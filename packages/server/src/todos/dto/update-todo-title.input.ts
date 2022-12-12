import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoTitleInput {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  title: string;
}
