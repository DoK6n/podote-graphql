import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class DocumentIdInput {
  @Field(() => String)
  @IsString()
  id: string;
}
