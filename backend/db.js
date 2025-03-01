import mongoose from "mongoose";
import { mongoDbUrl } from "./config.js";

export const connectDB =async ()=>{
    await mongoose.connect(`${mongoDbUrl}`).then(()=>console.log("Db connected"));
}
