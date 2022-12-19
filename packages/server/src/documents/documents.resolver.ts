import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FirebaseAuthGuard } from '@/auth';
import { DecodedTokenDecorator } from '@/users/decorators';
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
import { DecodedToken } from '@/users/interfaces/decoded-token.interface';

@Resolver(() => Document)
export class DocumentsResolver {
  constructor(private readonly documentsService: DocumentsService) {}

  /** 문서 생성 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async addNewDocument(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: CreateDocumentInput,
  ) {
    return this.documentsService.createNewDocument(user.id, data);
  }

  /** 문서 조회 */
  @UseGuards(FirebaseAuthGuard)
  @Query(() => Document, { nullable: true })
  async retrieveDocuement(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: FindOneDocumentInput,
  ) {
    return this.documentsService.findOneDocumentById(user.id, data);
  }

  /** 지운 문서 조회 */
  @UseGuards(FirebaseAuthGuard)
  @Query(() => Document, { nullable: true })
  async retrieveRemovedDocument(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: FindOneDocumentInput,
  ) {
    return this.documentsService.findOneRemovedDocumentById(user.id, data);
  }

  /** 문서 내용 수정 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async editDocumentContent(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: UpdateDocumentInput,
  ) {
    return this.documentsService.updateDocumentById(user.id, data);
  }

  /** 문서 삭제 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async removeDocument(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: RemoveDocumentInput,
  ) {
    return this.documentsService.removeDocumentById(user.id, data);
  }

  /** 삭제된 문서 복원 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async restoreDocument(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: RestoreDocumentInput,
  ) {
    return this.documentsService.restoreDocumentById(user.id, data);
  }

  /** 문서 영구 삭제 */
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Document, { nullable: true })
  async deleteRemovedDocument(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: DeleteDocumentInput,
  ) {
    return this.documentsService.deleteDocumentById(user.id, data);
  }
}
