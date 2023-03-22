import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@/app.module';
import { PrismaService } from '@/prisma/prisma.service';
import firebaseAdmin from 'firebase-admin';
import { firebaseConfig } from '@/config';
import cookieParser from 'cookie-parser';
import { getMyIp } from '@/common/utils';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger:
      process.env.NODE_ENV === 'production'
        ? ['log', 'error', 'warn']
        : ['log', 'debug', 'error', 'verbose', 'warn'],
    snapshot: true,
  });

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseConfig),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });

  app.enableCors({
    origin: [/^(.*)/],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  });
  app.use(cookieParser(process.env.COOKIE_SECRET));

  await app.listen(PORT, () => {
    Logger.log(`

              🚀 Podote GraphQL Server ready at: ${
                process.env.NODE_ENV === 'production'
                  ? 'https://api.podoteapi.link'
                  : `http://localhost:${PORT}/graphql`
              }
              🚀 Host: http://${getMyIp()}:${PORT}/graphql
              ⭐️ front: https://podote-v2-client.vercel.app

    `);
  });
}
bootstrap();
