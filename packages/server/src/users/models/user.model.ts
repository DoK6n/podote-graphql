import { Document } from '@/documents/models';
import { Todo } from '@/todos/models';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

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

  @Field(() => Document)
  document: Document;

  @Field(() => Todo)
  todo: Todo[];
}

@ObjectType()
export class UserWithSnsType extends User {
  @Field(() => String)
  snsType: string;
}
