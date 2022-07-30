import { AutoMap } from '@automapper/classes';
import { types } from 'cassandra-driver';

/**
 * Raw from the database
 */
export class UserEntity {
  @AutoMap()
  id!: types.TimeUuid;
  @AutoMap()
  email!: string;
  @AutoMap()
  password!: string;
  @AutoMap()
  displayName!: string;
  @AutoMap()
  avatar?: string;
  @AutoMap()
  birthday?: Date;
  @AutoMap()
  firstName?: string;
  @AutoMap()
  gender?: number;
  @AutoMap()
  lastName?: string;
  @AutoMap()
  updatedAt?: Date;
  @AutoMap()
  verifiedAt?: Date;
}

/**
 * JS object from raw database object.
 */
export class UserDto {
  @AutoMap()
  id!: string;
  @AutoMap()
  email!: string;
  @AutoMap()
  password!: string;
  @AutoMap()
  displayName!: string;
  @AutoMap()
  avatar?: string;
  @AutoMap()
  birthday?: Date;
  @AutoMap()
  firstName?: string;
  @AutoMap()
  gender?: number;
  @AutoMap()
  lastName?: string;
  @AutoMap()
  updatedAt?: Date;
  @AutoMap()
  verifiedAt?: Date;
}
