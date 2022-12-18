import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConsoleLogger, Logger } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';
import { GraphQLFormattedError } from 'graphql';
import { join } from 'path';

export const graphqlConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  context: ({ req, res }) => ({ req, res }),
  buildSchemaOptions: { dateScalarMode: 'timestamp' },
  cors: {
    origin: [/^(.*)/],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  },
  introspection: true,
  playground: true,
  cache: 'bounded', // 사용 가능한 메모리를 고갈시켜 DOS를 유발하는 공격으로부터 서버를 보호합니다
  formatError: (error: ApolloError) => {
    const logger = new ConsoleLogger(error.extensions.code);

    if (error.extensions.invalidArgs) {
      logger.error(
        error.extensions.invalidArgs.code,
        error.extensions.invalidArgs.stack,
        'InvalidArgs',
      );
    }

    const graphQLFormattedError: GraphQLFormattedError = {
      message: error.message,
      locations: error.locations,
      path: error.path,
      extensions: {
        code: error.extensions.code,
        message: error.message,
      },
    };

    // if (error.extensions.code !== 'UNAUTHENTICATED') {
    // logger.error(
    //   error,
    //   error.extensions.exception.stacktrace.join('\n'),
    //   error.extensions.code,
    // );
    // }

    return graphQLFormattedError;
  },
};
