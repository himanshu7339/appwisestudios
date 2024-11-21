
import BlogPost from '../model/blog.model.js';
import Category from '../model/category.model.js';

import Comment from '../model/comment.model.js';
// create blogpost
export const createBlogPost = async (req, res) => {
  try {
    const { title, content, categoryId, commentIds, image, metaDescription } = req.body;
    
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    const blogPost = new BlogPost({
      title,
      content,
      category: categoryId,
      comments: commentIds,
      image,
      metaDescription
    });
    
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('category').populate('comments');
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
      .populate('category') // Populate the category field
      .populate('comments'); // Populate the comments field

    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.status(200).json(blogPost); // Return the found blog post
  } catch (error) {
    res.status(500).json({ message: error.message }); // Error handling
  }
};



// Update an existing blog post by ID
export const updateBlogpost = async (req, res) => {
  const { title, content, category, comments, image, metaDescription } = req.body;

  try {
    const blogPost = await BlogPost.findById(req.params.id); // Find blog post by ID
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    // Update the blog post fields
    blogPost.title = title || blogPost.title;
    blogPost.content = content || blogPost.content;
    blogPost.category = category || blogPost.category;
    blogPost.comments = comments || blogPost.comments;
    blogPost.image = image || blogPost.image;
    blogPost.metaDescription = metaDescription || blogPost.metaDescription;

    await blogPost.save(); // Save the updated blog post to the database
    res.status(200).json({ message: 'Blog post updated successfully', blogPost });
  } catch (error) {
    res.status(400).json({ message: 'Error updating blog post', error: error.message });
  }
};
