import { nanoid, customAlphabet } from 'nanoid';

type IdType = 'todo' | 'document';

export const uniqueIdGenerator = (type?: IdType) => {
  return type
    ? `${type.slice(0, 1)}-${customAlphabet(
        '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        23,
      )()}`
    : nanoid(25);
};
