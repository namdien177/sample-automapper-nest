import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper, typeConverter } from '@automapper/core';
import { UserDto, UserEntity } from './user.dto';
import { types } from 'cassandra-driver';
import { stringAsTimeUuid, timeUuidAsString } from '../../helpers/cass-helper';

@Injectable()
export class UserMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        UserEntity,
        UserDto,
        typeConverter(String, types.TimeUuid, (rawStr) =>
          stringAsTimeUuid(rawStr)
        ),
        typeConverter(types.TimeUuid, String, (rawStr) =>
          timeUuidAsString(rawStr)
        ),
        typeConverter(String, Boolean, (str) => Boolean(str)),
        typeConverter(String, Date, (str) => new Date(str))
      );
    };
  }
}
