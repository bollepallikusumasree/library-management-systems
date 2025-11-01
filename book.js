import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  genre: String,
  available: Boolean,
});

export default mongoose.model("Book", bookSchema);
