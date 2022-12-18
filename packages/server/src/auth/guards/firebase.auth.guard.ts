import {
  CanActivate,
  ConsoleLogger,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Request } from 'express';
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

    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest();
      return this.validateToken(request);
    }
  }

  private async validateToken(request: Request) {
    const { headers } = request;
    const token = headers.cookie.replace('access_token=', '');
    
    if (!token) {
      throw new UnauthorizedException(
        'Authorization token not present in header.',
      );
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
