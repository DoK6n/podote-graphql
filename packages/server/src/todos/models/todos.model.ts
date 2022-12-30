import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString, IsUUID } from 'class-validator';
import { Prisma } from '@prisma/client';
import { Document } from '../../documents/models';
import { User } from '../../users/models';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class Todo {
  @Field(() => String)
  @IsUUID()
  id: string;

  @Field(() => String)
  @IsString()
  userId: string;

  @Field(() => String, { nullable: true })
  documentId?: string;

  @Field(() => String)
  @IsString()
  title: string;

  @Field(() => Boolean)
  @IsBoolean()
  done: boolean;

  @Field(() => Boolean)
  @IsBoolean()
  editable: boolean;

  @Field(() => Number)
  @IsNumber()
  orderKey: number;

  @Field(() => GraphQLISODateTime)
  createdDt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedDt?: Date;

  @Field(() => Boolean)
  @IsBoolean()
  isRemoved: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  removedDt?: Date;

  @Field(() => Document, { nullable: true })
  document?: Document;

  @Field(() => User)
  user: User;
}
