import { Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FirebaseAuthGuard, UserIdGuard } from '@/auth';
import { SnsTypeService } from '@/sns-type/sns-type.service';
import { UserId } from './decorators';
import { CreateUserInput, FindUserInput } from './dto';
import { User, UserWithSnsType } from './models';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  private readonly logger = new Logger(UsersResolver.name);
  constructor(
    private readonly usersService: UsersService,
    private readonly snsTypeService: SnsTypeService,
  ) {}

  @UseGuards(UserIdGuard)
  @Mutation(() => User)
  async addUser(@UserId() uid: string, @Args('data') data: CreateUserInput) {
    return this.usersService.createUser(uid, data);
  }

  @Query(() => [User], { nullable: true })
  async retrieveAllUsers() {
    return this.usersService.findAllUsers();
  }

  // @UseGuards(FirebaseAuthGuard)
  @UseGuards(UserIdGuard)
  @Query(() => UserWithSnsType)
  async retrieveUserById(@UserId() uid: string) {
    const user = await this.usersService.findUserByUid(uid);
    if (user) {
      const snsType = await this.snsTypeService.findOneSNSTypeId(
        user.snsTypeId,
      );
      return { ...user, snsType: snsType.name };
    } else {
      return {};
    }
  }
}
