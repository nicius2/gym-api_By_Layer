// src/database/migrations/002-create-check-ins.ts
import { Db } from "mongodb";

export const up = async (db: Db): Promise<void> => {
  await db.createCollection("checkins");

  await db.collection("checkins").createIndexes([
    {
      key: { user_id: 1 },
      name: "checkins_user_id",   // buscar check-ins de um usuário
    },
    {
      key: { gym_id: 1 },
      name: "checkins_gym_id",    // buscar check-ins de uma academia
    },
    {
      key: { user_id: 1, created_at: -1 },
      name: "checkins_user_id_created_at", // histórico de check-ins do usuário ordenado
    },
  ]);
};

export const down = async (db: Db): Promise<void> => {
  await db.collection("checkins").drop();
};