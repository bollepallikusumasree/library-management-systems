import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ["admin", "member"], default: "member" },
});

export default mongoose.model("User", userSchema);
