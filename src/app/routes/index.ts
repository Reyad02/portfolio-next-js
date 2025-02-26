import { Router } from 'express';
import projectRouter from '../modules/project/project.route';
import userRouter from '../modules/user/user.route';
import blogRouter from '../modules/blog/blog.route';
import authRouter from '../modules/auth/auth.route';

const router = Router();

const routes = [
  {
    path: '/project',
    route: projectRouter,
  },
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/blog',
    route: blogRouter,
  },
  {
    path: '/auth',
    route: authRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));
export default router;
