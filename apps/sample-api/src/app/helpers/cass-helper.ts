import { types } from 'cassandra-driver';

export type TimePrimary = string | types.TimeUuid;

/**
 * @deprecated TODO: Think a better way to do this.
 * @param str either string (which need to be converted) or TimeUUID
 * @returns TimeUUID or null if not valid.
 */
export function stringAsTimeUuid(str: TimePrimary): types.TimeUuid {
  if (str instanceof types.TimeUuid) {
    return str;
  }
  return types.TimeUuid.fromString(str);
}

/**
 *
 * @deprecated TODO: Think a better way to do this.
 * @param str
 * @returns
 */
export function timeUuidAsString(str: TimePrimary): string {
  if (str instanceof types.TimeUuid) {
    return str.toString();
  }
  return str;
}
