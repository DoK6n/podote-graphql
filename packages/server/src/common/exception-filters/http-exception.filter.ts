import {
  ArgumentsHost,
  Catch,
  ContextType,
  HttpException,
  Logger,
} from '@nestjs/common';
import {
  GqlArgumentsHost,
  GqlExceptionFilter,
  GqlContextType,
} from '@nestjs/graphql';
import { Response } from 'express';
import { ApolloError } from 'apollo-server-express';

@Catch(HttpException || ApolloError)
export class HttpExceptionFilter implements GqlExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException | ApolloError, host: ArgumentsHost) {
    switch (host.getType() as GqlContextType) {
      case 'graphql':
        // const gqlHost = GqlArgumentsHost.create(host);
        // const gqlContext = gqlHost.getContext<GraphQLResolveInfo>();
        const apolloException = exception as ApolloError;
        this.logger.error(
          `${apolloException.getStatus()} ➜ ${apolloException}`,
          apolloException.stack,
        );
      default:
        // const ctx = host.switchToHttp();
        // const res = ctx.getResponse<Response>();
        // const status = exception.getStatus();
        // this.logger.error(
        //   `${status} ➜ ${exception}`,
        //   exception.cause ? exception.cause.stack : exception.stack,
        // );
        // res.status(status).json(exception.getResponse());
        break;
    }
  }
}
