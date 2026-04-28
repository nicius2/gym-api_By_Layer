// src/models/Gym.ts
import { Document, model, Schema } from "mongoose";

interface GymProps extends Document {
  title: string;
  description: string | null;
  phone: string | null;
  latitude: number;
  longitude: number;
}

const gymSchema = new Schema<GymProps>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: false,
  },
);

gymSchema.set("toJSON", {
  transform: (_, ret: any) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

export const Gym = model<GymProps>("Gym", gymSchema);