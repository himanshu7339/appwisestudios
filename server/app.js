import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js"; // Import MongoDB connection
import fileUpload from "express-fileupload";

// Import routes
import category from "./routes/category.route.js";
import comment from "./routes/comment.route.js";
import blogpost from "./routes/blogpost.route.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());

// Connect to MongoDB

connectDB();

// use routes

app.use("/api/v1/categories", category);
app.use("/api/v1/comments", comment);
app.use("/api/v1/blogpost", blogpost);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
