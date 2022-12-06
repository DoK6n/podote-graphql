import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CreateTodoInput {
  @Field(() => GraphQLJSON, { nullable: true })
  document: Prisma.JsonValue;
}