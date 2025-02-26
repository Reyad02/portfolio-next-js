import { sendImageToCloudinary } from '../../utils/sendImg';
import IBlog from './blog.interface';
import Blog from './blog.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createBlog = async (blog: IBlog, file: any) => {
  if (file) {
    const imageName = blog.name;
    const path = file;
    const { secure_url } = await sendImageToCloudinary(imageName, path.buffer);
    blog.img = secure_url as string;
  }
  const result = await Blog.create(blog);
  return result;
};

const getBlog = async (blogId: string) => {
  const result = await Blog.findById(blogId);
  return result;
};

const getBlogs = async () => {
  const result = await Blog.find();
  return result;
};

const deleteBlog = async (blogId: string) => {
  const result = await Blog.findByIdAndDelete(blogId);
  return result;
};
export const blogServices = { createBlog, getBlog, getBlogs, deleteBlog };
