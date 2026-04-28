// database/migrations/20240101000000-create-users.ts
import { Db } from 'mongodb';

export const up = async (db: Db): Promise<void> => {
  await db.createCollection('users');

  await db.collection('users').createIndexes([
    {
      key: { email: 1 },
      name: 'users_email_unique',
      unique: true,        
    },
    {
      key: { created_at: 1 },
      name: 'users_created_at',
    },
  ]);
};

export const down = async (db: Db): Promise<void> => {
  await db.collection('users').drop();
};