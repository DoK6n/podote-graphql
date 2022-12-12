import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class UpdateDocumentInput {
  @Field(() => String)
  @IsString()
  id: string;

  @Field(() => GraphQLJSON, { nullable: true })
  content: Prisma.JsonValue;

  // @Field(() => String)
  // @IsString()
  // todoId: string;
}
