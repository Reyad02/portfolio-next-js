import { Request, Response } from 'express';
import { blogValidation } from './blog.validation';
import { blogServices } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const parseBody = blogValidation.createBlogValidationSchema.parse(body);
    const result = await blogServices.createBlog(parseBody, req.file);
    res.json({
      message: 'Blog created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;
    const result = await blogServices.getBlog(blogId);
    res.json({
      message: 'Blog retrived successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getBlogs = async (req: Request, res: Response) => {
  try {
    const result = await blogServices.getBlogs();
    res.json({
      message: 'Blog retrived successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;
    const result = await blogServices.deleteBlog(blogId);
    res.json({
      message: 'Blog deleted successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const blogControllers = {
  createBlog,
  getBlogs,
  getSingleBlog,
  deleteBlog,
};
