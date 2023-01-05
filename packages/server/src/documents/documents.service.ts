import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { uniqueIdGenerator } from '@/common/utils';
import {
  CreateDocumentInput,
  DeleteDocumentInput,
  FindOneDocumentInput,
  RemoveDocumentInput,
  RestoreDocumentInput,
  UpdateDocumentInput,
} from './dto';
import { Todo, Document } from '@prisma/client';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class DocumentsService {
  private readonly logger = new Logger(DocumentsService.name);
  constructor(private readonly prisma: PrismaService) {}

  async createNewDocument(userId: string, data: CreateDocumentInput) {
    const { todoId, content } = data;
    try {
      return await this.prisma.$transaction(async tx => {
        const newDocument = await tx.document.create({
          data: {
            id: uniqueIdGenerator('document'),
            content: JSON.parse(JSON.stringify(content)),
            userId,
            todoId,
          },
        });

        await tx.todo.updateMany({
          where: {
            id: todoId,
            documentId: null,
          },
          data: {
            documentId: newDocument.id,
          },
        });

        return newDocument;
      });
    } catch (e) {}
  }

  async findAllDocumentsByUserId(userId: string) {
    return await this.prisma.document.findMany({
      where: {
        userId,
        isRemoved: false,
      },
      include: {
        todo: true,
      },
    });
  }

  async findOneDocumentById(userId: string, data: FindOneDocumentInput) {
    const { id } = data;

    return await this.prisma.document.findFirst({
      where: {
        id,
        userId,
        isRemoved: false,
      },
      include: {
        todo: true,
      },
    });
  }

  async findOneRemovedDocumentById(userId: string, data: FindOneDocumentInput) {
    const { id } = data;

    return await this.prisma.document.findFirst({
      where: {
        id,
        userId,
        isRemoved: true,
      },
      include: {
        todo: true,
      },
    });
  }

  async findAllRemovedDocuments(userId: string) {
    return await this.prisma.document.findMany({
      where: {
        userId,
        isRemoved: true,
      },
      include: {
        todo: true,
      },
    });
  }

  async updateDocumentById(userId: string, data: UpdateDocumentInput) {
    const { id, content } = data;
    // document 내용 수정
    await this.prisma.document.updateMany({
      where: {
        id,
        userId,
        isRemoved: false,
      },
      data: {
        content: JSON.parse(JSON.stringify(content)),
      },
    });
    return await this.findOneDocumentById(userId, { id });
  }

  // document 휴지통으로 옮김
  async removeDocumentById(userId: string, data: RemoveDocumentInput) {
    const { id } = data;

    try {
      return await this.prisma.$transaction(async tx => {
        // 옮기기 전 연결된 todo가 있는지 조회
        const todo = await tx.todo.findFirst({
          where: {
            documentId: id,
            isRemoved: false,
          },
        });

        // document를 휴지통으로 옮김
        await tx.document.updateMany({
          where: {
            id,
            userId,
            isRemoved: false,
          },
          data: {
            isRemoved: true,
            removedDt: new Date(),
            todoId: null,
          },
        });

        // 연결된 todo가 존재하면 todo에서 documentId 제거하여 연결 해제
        if (todo) {
          await tx.$queryRaw<Todo>`UPDATE todo SET document_id = null WHERE id = ${todo.id} AND user_id = ${userId}`;
        }

        // todo와 연결이 해제되고 휴지통에 있는 document 조회하여 반환
        return await tx.document.findFirst({
          where: {
            id,
            userId,
            todoId: null,
            isRemoved: true,
          },
        });
      });
    } catch (e) {}
  }

  // document 휴지통에서 복원하기
  async restoreDocumentById(userId: string, data: RestoreDocumentInput) {
    const { id } = data;

    try {
      return await this.prisma.$transaction(async tx => {
        // document와 연결된 todo가 있는지 조회
        const todo = await tx.todo.findFirst({
          where: {
            documentId: id,
            userId,
            isRemoved: true,
          },
        });

        // 연결된 todo가 있는 document는 document만 따로 복원할 수 없음
        if (todo) {
          // TODO Error 모듈화 필요
          throw new ApolloError(
            '연결된 할일이 존재하여 문서만 복원할 수 없습니다',
            'EXIST_CONNECTED_TODO_ERROR',
            {
              customErrorCode: 401,
            },
          );
        }

        // todo와 연결 해제 후 document만 복원
        await tx.$queryRaw<Document>`
          UPDATE document SET is_removed = false, removed_dt = null, todo_id = null WHERE id = ${id} AND user_id = ${userId}
        `;

        return await tx.document.findFirst({
          where: {
            id,
            userId,
            todoId: null,
            isRemoved: false,
          },
        });
      });
    } catch (e) {
      if (e instanceof ApolloError) {
        this.logger.error(e);
        return e;
      }
    }
  }

  // 문서 영구 삭제
  async deleteDocumentById(userId: string, data: DeleteDocumentInput) {
    const { id } = data;

    try {
      return await this.prisma.$transaction(async tx => {
        // 삭제된 todo중에 영구 삭제하려는 문서가 존재하는지 확인을 위한 조회
        const todo = await tx.todo.findFirst({
          where: {
            documentId: id,
            isRemoved: true,
          },
        });

        // 해당 documentId를 가지고 있는 삭제된 todo가 있는 경우
        if (todo) {
          // 삭제된 todo에서 documentId를 삭제
          await tx.todo.updateMany({
            where: {
              id: todo.id,
              userId,
              documentId: id,
              isRemoved: true,
            },
            data: {
              documentId: null,
            },
          });
        }

        // document 영구 삭제
        await tx.$queryRaw<Document>`DELETE FROM document WHERE id = ${id} AND is_removed = true AND user_id = ${userId}`;
      });
    } catch (e) {}
  }
}
