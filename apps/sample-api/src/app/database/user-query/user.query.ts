import { Injectable } from '@nestjs/common';
import { types } from 'cassandra-driver';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { UserDto, UserEntity } from '../../dto';

/**
 * TODO: implement function to update user email (delete old, insert new).
 */
@Injectable()
export class UserQuery {
  constructor(
    @InjectMapper()
    private mapper: Mapper
  ) {}

  async selectById() {
    return this.mapper.map(
      {
        id: types.TimeUuid.now(),
        email: '',
        displayName: '',
        password: '',
      },
      UserEntity,
      UserDto
    );
  }
}
