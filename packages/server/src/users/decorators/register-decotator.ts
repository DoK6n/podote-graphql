import {
  BadRequestException,
  ConsoleLogger,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Request } from 'express';
import firebaseAdmin from 'firebase-admin';

export const RegistUserInfo = createParamDecorator(
  (data, context: ExecutionContext) => {
    if (context.getType<GqlContextType>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      const request = gqlContext.getArgByIndex(2).req;
      return validateRequest(request);
    }

    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest();
      return validateRequest(request);
    }
  },
);

const validateRequest = async (request: Request) => {
  const logger = new ConsoleLogger();

  const { headers } = request;
  const token = headers.cookie.split('=')[1];

  if(headers.cookie && token) {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    logger.debug(decodedToken);

    const user = {
      id: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name,
      snsTypeId: decodedToken.firebase.sign_in_provider,
    };

    return user
  }

  // if (request.headers && request.headers.uid) {
  //   return request.headers.uid;
  // }
};
