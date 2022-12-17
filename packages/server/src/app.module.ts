import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from './prisma/prisma.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { SnsTypeModule } from './sns-type/sns-type.module';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { LoggingInterceptor, HttpExceptionFilter } from './common';
import { AppController } from './app.controller';
import { DocumentsModule } from './documents/documents.module';
import { graphqlConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
    PrismaModule,
    TodosModule,
    UsersModule,
    SnsTypeModule,
    DocumentsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
