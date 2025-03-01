import express from "express";
// import {addBook} from '../controllers/bookController.js';
import { addBook, deleteBook, findBook, listBook, updateBook } from "../controllers/bookController.js";


const bookRouter= express.Router();

bookRouter.post("/add",addBook);
bookRouter.get("/all-books",listBook);
bookRouter.get("/book-by-id/:id",findBook);
bookRouter.put("/update-by-id/:id",updateBook);
bookRouter.delete("/delete-by-id/:id",deleteBook);


export default bookRouter;



// foodRouter.post("/add",upload.single("image"),addFood)

