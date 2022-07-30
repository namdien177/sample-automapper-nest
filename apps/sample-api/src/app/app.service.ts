import { Injectable } from '@nestjs/common';
import { UserQuery } from './database/user-query';

@Injectable()
export class AppService {
  constructor(private userQuery: UserQuery) {}

  getData() {
    return this.userQuery.selectById();
  }
}
