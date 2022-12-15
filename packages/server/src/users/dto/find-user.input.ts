import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindUserInput {
  @Field(() => String)
  id: string;
}
