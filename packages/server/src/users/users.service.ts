import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SnsTypeService } from '../sns-type/sns-type.service';
import { CreateUserInput } from './dto';
import { UserInfo } from './interfaces/UserInfo';
@Injectable()
export class UsersService {
  // private readonly logger = new Logger(UsersService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly snsTypeService: SnsTypeService,
  ) {}

  async createUser({ id, email, name, snsTypeId }: UserInfo) {
    const snsType = await this.snsTypeService.findOneSNSTypeName(snsTypeId);
    return await this.prisma.user.create({
      data: {
        id,
        email,
        name,
        snsType: {
          connect: {
            id: snsType.id,
          },
        },
      },
    });
  }

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findUserByUserId(userId: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
