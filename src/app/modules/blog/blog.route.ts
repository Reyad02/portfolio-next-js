import { NextFunction, Request, Response, Router } from 'express';
import { upload } from '../../utils/sendImg';
import { blogControllers } from './blog.controller';

const blogRouter = Router();

blogRouter.post(
  '/',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  blogControllers.createBlog,
);

blogRouter.delete('/:blogId', blogControllers.deleteBlog);
blogRouter.get('/:blogId', blogControllers.getSingleBlog);
blogRouter.get('/', blogControllers.getBlogs);

export default blogRouter;
