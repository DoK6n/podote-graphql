import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FirebaseAuthGuard } from '@/auth';
import { DecodedTokenDecorator } from '@/users/decorators';
import {
  CreateTodoInput,
  TodoIdInput,
  UpdateTodoTitleInput,
  UpdateTodoDoneInput,
  UpdateTodoOrderkeyInput,
} from './dto';
import { Todo } from './models';
import { TodosService } from './todos.service';
import { DecodedToken } from '@/users/interfaces/decoded-token.interface';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todoService: TodosService) {}

  // 할일 추가
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async addNewTodo(
    @DecodedTokenDecorator() { id }: DecodedToken,
    @Args('data') data: CreateTodoInput,
  ) {
    return this.todoService.createNewTodo(id, data);
  }

  // 할일 목록 조회
  @UseGuards(FirebaseAuthGuard)
  @Query(() => [Todo], { nullable: true })
  async retrieveAllTodos(@DecodedTokenDecorator() user: DecodedToken) {
    return this.todoService.findAllTodosByUser(user.id);
  }

  // 할일 항목 조회
  @UseGuards(FirebaseAuthGuard)
  @Query(() => Todo, { nullable: true })
  async retrieveTodo(
    @Args('data') data: TodoIdInput,
    @DecodedTokenDecorator() user: DecodedToken,
  ) {
    return this.todoService.findOneTodoById(data.id, user.id);
  }

  // 삭제한 항목 조회
  @UseGuards(FirebaseAuthGuard)
  @Query(() => Todo, { nullable: true })
  async retrieveRemovedTodo(
    @Args('data') data: TodoIdInput,
    @DecodedTokenDecorator() user: DecodedToken,
  ) {
    return this.todoService.findOneRemovedTodo(data.id, user.id);
  }

  // 삭제한 할일 목록 조회
  @UseGuards(FirebaseAuthGuard)
  @Query(() => [Todo], { nullable: true })
  async retrieveAllRemovedTodo(@DecodedTokenDecorator() user: DecodedToken) {
    return this.todoService.findAllRemovedTodos(user.id);
  }

  // 할일 항목 내용 수정
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async editTodoTitle(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: UpdateTodoTitleInput,
  ) {
    return this.todoService.updateTodoTitleById(user.id, data);
  }

  // 할일 항목 완료
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async editTodoDone(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: UpdateTodoDoneInput,
  ) {
    return this.todoService.updateTodoDoneById(user.id, data);
  }

  // 할일 항목 순서 변경
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => [Todo])
  async switchTodoOrder(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: UpdateTodoOrderkeyInput,
  ) {
    return this.todoService.updateTodoOrderkeyInput(user.id, data);
  }

  // 할일 항목 삭제 (soft delete)
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async removeTodo(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: TodoIdInput,
  ) {
    return this.todoService.removeOneTodoById(user.id, data);
  }

  // 삭제한 할일 항목 복원
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async restoreRemovedTodo(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: TodoIdInput,
  ) {
    return this.todoService.restoreOneRemovedTodoById(user.id, data);
  }

  // 할일 항목 영구 삭제
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => [Todo], { nullable: true })
  async deleteRemovedTodo(
    @DecodedTokenDecorator() user: DecodedToken,
    @Args('data') data: TodoIdInput,
  ) {
    return this.todoService.deleteOneRemovedTodoById(user.id, data);
  }

  // 할일 목록 전체 영구 삭제
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => [Todo], { nullable: true })
  async deleteAllRemovedTodos(@DecodedTokenDecorator() user: DecodedToken) {
    return this.todoService.deleteAllRemovedTodos(user.id);
  }
}
