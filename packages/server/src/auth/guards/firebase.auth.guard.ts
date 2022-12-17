import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Request } from 'express';
import firebaseAdmin from 'firebase-admin';
import { GraphQLError } from 'graphql';
@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  // private readonly logger = new Logger(FirebaseAuthGuard.name);

  canActivate(context: ExecutionContext) {
    if (context.getType<GqlContextType>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      const request = gqlContext.getArgByIndex(2).req;
      return this.validateToken(request);
    }

    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest();
      return this.validateToken(request);
    }
  }

  private async validateToken(request: Request) {
    const { headers } = request;
    const token = headers.authorization;

    if (!token) {
      throw new UnauthorizedException(
        'Authorization token not present in header.',
      );
    }

    try {
      const decodedToken = await firebaseAdmin
        .auth()
        .verifyIdToken(token.replace('Bearer ', ''));
      const user = {
        email: decodedToken.email,
      };
      request.user = user;
      return true;
    } catch (e) {
      throw new AuthenticationError('Not authenticated properly', {
        invalidArgs: e,
        code: e.code ,
        message: e.message
      });
    }
  }
}
