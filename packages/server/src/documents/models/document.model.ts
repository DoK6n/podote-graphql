import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsBoolean, IsString } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';
import { Todo } from '@/todos/models';
import { User } from '@/users/models';

@ObjectType()
export class Document {
  @Field(() => String)
  @IsString()
  id: string;

  @Field(() => String)
  @IsString()
  userId: string;

  @Field(() => String, { nullable: true })
  @IsString()
  todoId?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  content?: Prisma.JsonValue;

  @Field(() => GraphQLISODateTime)
  createdDt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedDt?: Date;

  @Field(() => Boolean)
  @IsBoolean()
  isRemoved: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  removedDt?: Date;

  @Field(() => Todo, { nullable: true })
  todo?: Todo;

  @Field(() => User)
  user: User;
}
