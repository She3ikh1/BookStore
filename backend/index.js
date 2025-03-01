import express from "express";
import { PORT, mongoDbUrl } from "./config.js";
import bookRouter from "./routes/bookRoute.js";
import mongoose from "mongoose";
import { connectDB } from "./db.js";
import cors from "cors";


const app = express();
app.use(express.json())
app.use(cors())

app.use(express.json())
app.use(cors()) 

connectDB();

// app.post('/books')

app.use("/api/book",bookRouter)
// app.use("/api/book/bookRouter")

app.get("/",(req,res)=>{
  res.send("API working")
})

app.listen(PORT,()=>{
 console.log(`server starting at  http://localhost:${PORT}`)
})

// mongoose
//   .connect(mongoDbUrl)
//   .then(() => {
//     console.log("database connectec");
//     app.listen(PORT, () => {
//       console.log(`server starting at  http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
