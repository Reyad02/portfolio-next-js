import { model, Schema } from 'mongoose';
import IBlog from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true },
);

blogSchema.pre('save', async function (next) {
  this.like = 0;
  next();
});

const Blog = model<IBlog>('Blog', blogSchema);
export default Blog;
