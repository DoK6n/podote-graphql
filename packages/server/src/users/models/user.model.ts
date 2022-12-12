import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prisma, Todo } from '@prisma/client';
import { IsEmail } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  snsTypeId: number;

  @Field(() => GraphQLJSON)
  documents: Prisma.JsonValue[];

  @Field(() => GraphQLJSON) // FIXME
  todos: Todo[];
}

@ObjectType()
export class UserWithSnsType extends User {
  @Field(() => String)
  snsType: string;
}
