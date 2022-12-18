import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FirebaseAuthGuard } from '@/auth';
import { UserId } from '@/users/decorators';
import {
  CreateTodoInput,
  TodoIdInput,
  UpdateTodoTitleInput,
  UpdateTodoDoneInput,
  UpdateTodoOrderkeyInput,
} from './dto';
import { Todo } from './models';
import { TodosService } from './todos.service';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todoService: TodosService) {}

  // 할일 추가
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async addNewTodo(
    @UserId() userId: string,
    @Args('data') data: CreateTodoInput,
  ) {
    return this.todoService.createNewTodo(userId, data);
  }

  // 할일 목록 조회
  @UseGuards(FirebaseAuthGuard)
  @Query(() => [Todo], { nullable: true })
  async retrieveAllTodos(@UserId() userId: string) {
    return this.todoService.findAllTodosByUser(userId);
  }

  // 할일 항목 조회
  @UseGuards(FirebaseAuthGuard)
  @Query(() => Todo, { nullable: true })
  async retrieveTodo(
    @Args('id', { type: () => String }) id: string,
    @UserId() userId: string,
  ) {
    return this.todoService.findOneTodoById(id, userId);
  }

  // 삭제한 항목 조회
  @UseGuards(FirebaseAuthGuard)
  @Query(() => Todo, { nullable: true })
  async retrieveRemovedTodo(
    @Args('id', { type: () => String }) id: string,
    @UserId() userId: string,
  ) {
    return this.todoService.findOneRemovedTodo(id, userId);
  }

  // 삭제한 할일 목록 조회
  @UseGuards(FirebaseAuthGuard)
  @Query(() => [Todo], { nullable: true })
  async retrieveAllRemovedTodo(@UserId() userId: string) {
    return this.todoService.findAllRemovedTodos(userId);
  }

  // 할일 항목 내용 수정
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async editTodoTitle(
    @UserId() userId: string,
    @Args('data') data: UpdateTodoTitleInput,
  ) {
    return this.todoService.updateTodoTitleById(userId, data);
  }

  // 할일 항목 완료
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async editTodoDone(
    @UserId() userId: string,
    @Args('data') data: UpdateTodoDoneInput,
  ) {
    return this.todoService.updateTodoDoneById(userId, data);
  }

  // 할일 항목 순서 변경
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => [Todo])
  async switchTodoOrder(
    @UserId() userId: string,
    @Args('data') data: UpdateTodoOrderkeyInput,
  ) {
    return this.todoService.updateTodoOrderkeyInput(userId, data);
  }

  // 할일 항목 삭제 (soft delete)
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async removeTodo(@UserId() userId: string, @Args('data') data: TodoIdInput) {
    return this.todoService.removeOneTodoById(userId, data);
  }

  // 삭제한 할일 항목 복원
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => Todo, { nullable: true })
  async restoreRemovedTodo(
    @UserId() userId: string,
    @Args('data') data: TodoIdInput,
  ) {
    return this.todoService.restoreOneRemovedTodoById(userId, data);
  }

  // 할일 항목 영구 삭제
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => [Todo], { nullable: true })
  async deleteRemovedTodo(
    @UserId() userId: string,
    @Args('data') data: TodoIdInput,
  ) {
    return this.todoService.deleteOneRemovedTodoById(userId, data);
  }

  // 할일 목록 전체 영구 삭제
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => [Todo], { nullable: true })
  async deleteAllRemovedTodos(@UserId() userId: string) {
    return this.todoService.deleteAllRemovedTodos(userId);
  }
}
