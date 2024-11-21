import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name must be less than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    match: [
      /^\S+@\S+\.\S+$/,
      'Please provide a valid email address'
    ]
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true,
    maxlength: [500, 'Content must be less than 500 characters']
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
