import { Module } from '@nestjs/common';
import { UserQuery } from './user.query';
import { UserMapper } from "../../dto";

@Module({
  providers: [UserMapper, UserQuery],
  exports: [UserQuery],
})
export class UserQueryModule {}
