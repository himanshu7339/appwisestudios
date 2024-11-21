import express from 'express';
import { createBlogPost, getBlogPostBySlug, getBlogPosts, updateBlogpost } from '../controllers/blogpost.controller.js';


const router = express.Router();

// Route to create a blog post
router.post('/create', createBlogPost);

// Route to get all blog posts
router.get('/', getBlogPosts);

// update blog post
router.put('/update/:id',updateBlogpost)

// get blog by slug
router.get('/:slug', getBlogPostBySlug)

export default router;
