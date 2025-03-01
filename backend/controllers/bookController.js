import mongoose from "mongoose";
import bookModel from "../models/bookModel.js";
import Book from "../models/bookModel.js";

export const addBook = async (req, res) => {
  const { title, author, publishYear } = req.body;
  if (!title || !author || !publishYear) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const Book = new bookModel({
    title: req.body.title,
    author: req.body.author,
    publishYear: req.body.publishYear,
  });
  try {
    await Book.save();
    res.json({ success: true, message: "New Book Added" });
    console.log("added");
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export const listBook = async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.json({ success: true, data: books });
    console.log("all books");
    // console.log(res.)
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

export const findBook = async (req, res) => {
  try {
    const id = req.params.id;

    const books = await Book.findById(id);
    res.json({ success: true, count: books.length, data: books });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      console.log("book not found");
      return res.json({ success: false, message: "Book not found" });
    }
    return res.json({ success: true, message: " Book Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const dlt= await Book.findByIdAndDelete(id);
    if (!dlt) {
      console.log("book not found");
      return res.json({ success: false, message: "Book not found" });
    }
    return res.json({ success: false, message: "Book deleted " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// export default addBook;
