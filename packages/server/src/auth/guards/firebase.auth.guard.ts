import {
  CanActivate,
  ConsoleLogger,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Request, Response } from 'express';
import firebaseAdmin from 'firebase-admin';
@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  // private readonly logger = new ConsoleLogger(FirebaseAuthGuard.name);

  canActivate(context: ExecutionContext) {
    if (context.getType<GqlContextType>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      const request = gqlContext.getArgByIndex(2).req;
      return this.validateToken(request);
    }
  }

  private async validateToken(request: Request) {
    const { headers } = request;
    let token;

    if (headers.authorization) {
      token = headers.authorization.replace('Bearer ', '');
    } 
    // else {
    //   token = headers.cookie.replace('token=', '');
    // }

    if (!token) {
      throw new AuthenticationError('Not exist authorization token');
    }

    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);

      return true;
    } catch (e) {
      throw new AuthenticationError('Not authenticated properly', {
        invalidArgs: e,
        code: e.code,
        message: e.message,
      });
    }
  }
}
