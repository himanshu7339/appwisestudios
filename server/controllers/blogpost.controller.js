import BlogPost from "../model/blog.model.js";
import Category from "../model/category.model.js";
import Comment from "../model/comment.model.js";

import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create blog post
export const createBlogPost = async (req, res) => {
  try {
    const { title, content, categoryId, metaDescription } = req.body;

    // Check if a file was uploaded
    const image = req.files?.file;
    if (!image) {
      return res.status(400).json({ message: "Image file is required." });
    }

    // Validate category
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Define folder and file paths
    const folderPath = path.join(__dirname, "../public/uploads");
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const uploadPath = path.join(folderPath, image.name);
    console.log("Upload Path:", uploadPath);

    // Save file to the server
    image.mv(uploadPath, async (err) => {
      if (err) {
        console.error("Image Upload Error:", err);
        return res.status(500).json({ message: "Failed to upload image." });
      }

      // Save blog post to database
      const blogPost = new BlogPost({
        title,
        content,
        category: categoryId,
        image: `/uploads/${image.name}`, // Relative path
        metaDescription,
      });

      await blogPost.save();
      res.status(201).json(blogPost);
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};


export const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find()
      .populate("category")
      .populate("comments");
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get blog by slug

export const getBlogPostBySlug = async (req, res) => {
  const { slug } = req.params; // Extract the slug from the request parameters

  try {
    const blogPost = await BlogPost.findOne({ slug })
      .populate("category") // Populate the category field
      .populate("comments"); // Populate the comments field

    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json(blogPost); // Return the found blog post
  } catch (error) {
    res.status(500).json({ message: error.message }); // Error handling
  }
};

// Update an existing blog post by ID
export const updateBlogpost = async (req, res) => {
  const { title, content, category, comments, image, metaDescription } =
    req.body;

  try {
    const blogPost = await BlogPost.findById(req.params.id); // Find blog post by ID
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Update the blog post fields
    blogPost.title = title || blogPost.title;
    blogPost.content = content || blogPost.content;
    blogPost.category = category || blogPost.category;
    blogPost.comments = comments || blogPost.comments;
    blogPost.image = image || blogPost.image;
    blogPost.metaDescription = metaDescription || blogPost.metaDescription;

    await blogPost.save(); // Save the updated blog post to the database
    res
      .status(200)
      .json({ message: "Blog post updated successfully", blogPost });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating blog post", error: error.message });
  }
};
