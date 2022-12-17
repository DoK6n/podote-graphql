import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { FirebaseAuthGuard } from './auth';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello, Podote';
  }

  @Get('/check')
  @UseGuards(FirebaseAuthGuard)
  check(@Req() request: Request): string {
    const user = request.user as { email: string };
    return `Hello ${user?.email}!`;
  }
}
