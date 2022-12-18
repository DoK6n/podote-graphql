import { Logger, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FirebaseAuthGuard } from '@/auth';
import { SnsTypeService } from '@/sns-type/sns-type.service';
import { RegistUserInfo, UserId } from './decorators';
import { User, UserWithSnsType } from './models';
import { UsersService } from './users.service';
import { UserInfo } from './interfaces/UserInfo';

@Resolver(() => User)
export class UsersResolver {
  // private readonly logger = new Logger(UsersResolver.name);
  constructor(
    private readonly usersService: UsersService,
    private readonly snsTypeService: SnsTypeService,
  ) {}

  @UseGuards(FirebaseAuthGuard)
  @Query(() => UserWithSnsType)
  async login(@UserId() userId: string, @Context() context: any) {
    // const { req, res } = context;
    // const token = req.headers.cookie;
    // const expiresIn = 60 * 60 * 24 * 5 * 1000;
    // const options = { maxAge: expiresIn, httpOnly: true, secure: true };
    const user = await this.usersService.findUserByUserId(userId);
    if (user) {
      const snsType = await this.snsTypeService.findOneSNSTypeId(
        user.snsTypeId,
      );
      // res.cookie('access_token', token.replace('access_token=', ''), options);
      return { ...user, snsType: snsType.name };
    } else {
      return {};
    }
  }

  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => User)
  async register(
    @RegistUserInfo()
    user: UserInfo,
    @Context() context: any,
  ) {
    // const { req, res } = context;
    // const token = req.headers.cookie;
    // const expiresIn = 60 * 60 * 24 * 5 * 1000;
    // const options = { maxAge: expiresIn, httpOnly: true, secure: true };
    const result = await this.usersService.createUser(user);
    // res.cookie('access_token', token.replace('access_token=', ''), options);
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
