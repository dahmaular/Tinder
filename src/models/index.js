// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Genders = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { Like, User } = initSchema(schema);

export {
  Like,
  User,
  Genders
};