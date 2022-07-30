import { AutoMap } from '@automapper/classes';
import { types } from 'cassandra-driver';
import TimeUuid = types.TimeUuid;

/**
 * Raw from the database
 */
export class ExternalAppEntity {
  @AutoMap()
  id!: TimeUuid;
  @AutoMap()
  name!: string;
  @AutoMap()
  avatar!: string;
  @AutoMap()
  origin!: string;
  @AutoMap()
  redirectUrl!: string;
  @AutoMap()
  status!: number;
  @AutoMap()
  description?: string;
  @AutoMap()
  cover?: string;
  @AutoMap()
  updatedAt?: Date;
}

/**
 * JS object from raw database object.
 */
export class ExternalAppDto {
  @AutoMap()
  id!: string;
  @AutoMap()
  name!: string;
  @AutoMap()
  avatar!: string;
  @AutoMap()
  origin!: string;
  @AutoMap()
  redirectUrl!: string;
  @AutoMap()
  status!: number;
  @AutoMap()
  description?: string;
  @AutoMap()
  cover?: string;
  @AutoMap()
  updatedAt?: Date;
}
