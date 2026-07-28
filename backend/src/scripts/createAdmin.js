import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import User from "../models/User.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const password = await bcrypt.hash("Admin@123", 10);

await User.create({
    username: "admin",
    email: "admin@jindal.com",
    password,
    role: "admin",
});

console.log("Admin created");

process.exit();