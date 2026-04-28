import { Document, model, Schema } from "mongoose";

interface UserProps extends Document {
  name: string;
  email: string;
  password_hash: string;
  created_at: Date;
}

const userSchema = new Schema<UserProps>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  },
);

userSchema.set("toJSON", {
  transform: (_, ret: any) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

export const User = model<UserProps>("User", userSchema);
