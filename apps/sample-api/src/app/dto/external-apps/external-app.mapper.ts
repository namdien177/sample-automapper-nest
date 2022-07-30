import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper, typeConverter } from '@automapper/core';
import { types } from 'cassandra-driver';
import { ExternalAppDto, ExternalAppEntity } from './external-app.dto';
import { stringAsTimeUuid, timeUuidAsString } from "../../helpers/cass-helper";
import TimeUuid = types.TimeUuid;

@Injectable()
export class ExternalAppMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        ExternalAppEntity,
        ExternalAppDto,
        typeConverter(String, TimeUuid, (rawStr) => stringAsTimeUuid(rawStr)),
        typeConverter(TimeUuid, String, (rawStr) => timeUuidAsString(rawStr)),
        typeConverter(String, Boolean, (str) => Boolean(str)),
        typeConverter(String, Date, (str) => new Date(str))
      );
    };
  }
}
