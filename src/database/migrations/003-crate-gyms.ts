// src/database/migrations/003-create-gyms.ts
import { Db } from "mongodb";

export const up = async (db: Db): Promise<void> => {
  await db.createCollection("gyms");

  await db.collection("gyms").createIndexes([
    {
      key: { title: 1 },
      name: "gyms_title",
    },
    {
      key: { latitude: 1, longitude: 1 },
      name: "gyms_coordinates",  // índice composto para buscas por localização
    },
  ]);
};

export const down = async (db: Db): Promise<void> => {
  await db.collection("gyms").drop();
};