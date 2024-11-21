import mongoose from 'mongoose';
import slugify from 'slugify';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
      trim: true,
      minlength: [3, 'Category name must be at least 3 characters long']
    },
    slug: {
      type: String,
      unique: true
    },
    description: {
      type: String,
      maxlength: [200, 'Description must be less than 200 characters'],
      default: ''
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Pre-save middleware to generate slug
categorySchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
