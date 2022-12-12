import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsResolver } from './documents.resolver';
import { TodosModule } from 'src/todos/todos.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule, TodosModule],
  providers: [DocumentsResolver, DocumentsService],
  exports: [DocumentsService],
})
export class DocumentsModule {}
