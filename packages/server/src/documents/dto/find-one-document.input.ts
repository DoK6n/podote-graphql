import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class FindOneDocumentInput {
  @Field(() => String)
  @IsString()
  id: string;

  // @Field(() => String)
  // @IsString()
  // todoId: string;
}
