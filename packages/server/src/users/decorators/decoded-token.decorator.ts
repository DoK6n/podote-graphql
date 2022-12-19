import {
  ConsoleLogger,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Request } from 'express';
import firebaseAdmin from 'firebase-admin';
import { DecodedToken } from '../interfaces/decoded-token.interface';

export const DecodedTokenDecorator = createParamDecorator(
  async (data, context: ExecutionContext) => {
    if (context.getType<GqlContextType>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      const ctx = gqlContext.getArgByIndex(2).req;

      const { token, exp, ...user } = await validateRequest(ctx);
      const options = { maxAge: exp, httpOnly: true };
      ctx.res.cookie('token', token, options);
      return user;
    }

    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest();
      return validateRequest(request);
    }
  },
);

const validateRequest = async (request: Request) => {
  const { headers } = request;
  let token;

  if (headers.authorization) {
    token = headers.authorization.replace('Bearer ', '');
  } else {
    token = headers.cookie.replace('token=', '');
  }

  if (!token) {
    throw new AuthenticationError('Not exist authorization token');
  }

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    const user: DecodedToken = {
      id: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name,
      snsTypeId: decodedToken.firebase.sign_in_provider,
      exp: decodedToken.exp,
      token,
    };

    return user;
  } catch (e) {
    throw new AuthenticationError('Not authenticated properly', {
      invalidArgs: e,
      code: e.code,
      message: e.message,
    });
  }
};
