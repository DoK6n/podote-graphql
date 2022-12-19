import { Logger, UseGuards, UseInterceptors } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { FirebaseAuthGuard } from '@/auth';
import { SnsTypeService } from '@/sns-type/sns-type.service';
import { DecodedTokenDecorator } from './decorators';
import { User, UserWithSnsType } from './models';
import { UsersService } from './users.service';
import { DecodedToken } from './interfaces/decoded-token.interface';

@Resolver(() => User)
export class UsersResolver {
  private readonly logger = new Logger(UsersResolver.name);
  constructor(
    private readonly usersService: UsersService,
    private readonly snsTypeService: SnsTypeService,
  ) {}

  @UseGuards(FirebaseAuthGuard)
  @Query(() => UserWithSnsType)
  async login(
    @DecodedTokenDecorator() decodedToken: DecodedToken,
  ) {
    const user = await this.usersService.findUserByUserId(decodedToken.id);
    if (user) {
      const snsType = await this.snsTypeService.findOneSNSTypeId(
        user.snsTypeId,
      );
      return { ...user, snsType: snsType.name };
    } else {
      return {};
    }
  }

  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => User)
  async register(
    @DecodedTokenDecorator()
    user: DecodedToken,
  ) {
    const result = await this.usersService.createUser(user);
    return result;
  }

  @Query(() => [User], { nullable: true })
  async retrieveAllUsers() {
    return await this.usersService.findAllUsers();
  }

  // @UseGuards(FirebaseAuthGuard)
  // @Query(() => UserWithSnsType)
  // async retrieveUserById(@UserId() userId: string) {
  //   const user = await this.usersService.findUserByUserId(userId);
  //   if (user) {
  //     const snsType = await this.snsTypeService.findOneSNSTypeId(
  //       user.snsTypeId,
  //     );
  //     return { ...user, snsType: snsType.name };
  //   } else {
  //     return {};
  //   }
  // }
}
