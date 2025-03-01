import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true },
  },
  {
    timestamps: true // ✅ CORRECTED
  }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
