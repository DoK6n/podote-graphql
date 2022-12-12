
import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CreateDocumentInput {
  @Field(() => String)
  @IsString()
  todoId: string;

  @Field(() => GraphQLJSON, { nullable: true })
  content?: Prisma.JsonValue;
}
