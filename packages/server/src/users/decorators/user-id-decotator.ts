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

// header로 담겨온 uid 검증후 반환하여 API에 파라미터로 넘기는 커스텀 데코레이터
export const UserId = createParamDecorator(
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
    // logger.debug(decodedToken);

    // const user = {
    //   id: decodedToken.uid,
    //   email: decodedToken.email,
    //   name: decodedToken.name,
    //   snsTypeId: decodedToken.firebase.sign_in_provider,
    // };

    return decodedToken.uid
  }

  // if (request.headers && request.headers.uid) {
  //   return request.headers.uid;
  // }
};
