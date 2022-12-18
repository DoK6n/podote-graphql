import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FirebaseAuthGuard } from '@/auth';
import { UserId } from '@/users/decorators';
import { DocumentsService } from './documents.service';
import { Document } from './models';
import {
  CreateDocumentInput,
  DeleteDocumentInput,
  FindOneDocumentInput,
  RemoveDocumentInput,
  RestoreDocumentInput,
  UpdateDocumentInput,
} from './dto';

@Resolver(() => Document)
export class DocumentsResolver {
  constructor(private readonly documentsService: DocumentsService) {}

  /** 문서 생성 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async addNewDocument(
    @UserId() userId: string,
    @Args('data') data: CreateDocumentInput,
  ) {
    return this.documentsService.createNewDocument(userId, data);
  }

  /** 문서 조회 */
  @UseGuards(FirebaseAuthGuard)
  @Query(() => Document, { nullable: true })
  async retrieveDocuement(
    @UserId() userId: string,
    @Args('data') data: FindOneDocumentInput,
  ) {
    return this.documentsService.findOneDocumentById(userId, data);
  }

  /** 지운 문서 조회 */
  @UseGuards(FirebaseAuthGuard)
  @Query(() => Document, { nullable: true })
  async retrieveRemovedDocument(
    @UserId() userId: string,
    @Args('data') data: FindOneDocumentInput,
  ) {
    return this.documentsService.findOneRemovedDocumentById(userId, data);
  }

  /** 문서 내용 수정 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async editDocumentContent(
    @UserId() userId: string,
    @Args('data') data: UpdateDocumentInput,
  ) {
    return this.documentsService.updateDocumentById(userId, data);
  }

  /** 문서 삭제 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async removeDocument(
    @UserId() userId: string,
    @Args('data') data: RemoveDocumentInput,
  ) {
    return this.documentsService.removeDocumentById(userId, data);
  }

  /** 삭제된 문서 복원 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async restoreDocument(
    @UserId() userId: string,
    @Args('data') data: RestoreDocumentInput,
  ) {
    return this.documentsService.restoreDocumentById(userId, data);
  }

  /** 문서 영구 삭제 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async deleteRemovedDocument(
    @UserId() userId: string,
    @Args('data') data: DeleteDocumentInput,
  ) {
    return this.documentsService.deleteDocumentById(userId, data);
  }
}
