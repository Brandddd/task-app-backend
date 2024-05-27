import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Path title is required!'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Path description is required!'],
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

// Export model based on the Schema created for the tasks
export default model("Task", taskSchema);
