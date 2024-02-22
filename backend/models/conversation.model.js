import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    pasticipants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);
const Conversation = mongoose.model("Conversation", conversationSchema);

export default conversation;
