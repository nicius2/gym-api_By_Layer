import { Document, model, Schema, Types } from "mongoose";

interface CheckInProps extends Document {
  created_at: Date;
  validated_at: Date | null;
  user_id: Types.ObjectId;
  gym_id: Types.ObjectId;
}

const checkInSchema = new Schema<CheckInProps>(
  {
    created_at: {
      type: Date,
      default: Date.now,
    },
    validated_at: {
      type: Date,
      default: null,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    gym_id: {
      type: Schema.Types.ObjectId,
      ref: "Gym",
      required: true,
    },
  },
  {
    timestamps: false,
  },
);

checkInSchema.set("toJSON", {
  transform: (_, ret: any) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

export const checkIn = model<CheckInProps>("CheckIn", checkInSchema);
