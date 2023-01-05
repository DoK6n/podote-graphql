import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLJSON } from 'graphql-type-json';
import { DocumentIdInput } from './document-id.input';

@InputType()
export class UpdateDocumentInput extends DocumentIdInput {
  @Field(() => GraphQLJSON, { nullable: true })
  content: Prisma.JsonValue;
}
