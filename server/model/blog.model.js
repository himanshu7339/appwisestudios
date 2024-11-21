import mongoose from 'mongoose';
import slugify from 'slugify';

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters long']
    },
    slug: {
      type: String,
      unique: true
    },
    content: {
      type: String,
      required: [true, 'Content is required']
    },
    image: {
      type: String,
      default: '' // URL to the image
    },
    metaDescription: {
      type: String,
      maxlength: [160, 'Meta description must be less than 160 characters'],
      default: ''
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true // A blog post must belong to a category
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Pre-save middleware to generate slug for title
blogPostSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
