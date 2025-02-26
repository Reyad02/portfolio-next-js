import { Router } from 'express';
import projectRouter from '../modules/project/project.route';

const router = Router();

const routes = [
  {
    path: '/project',
    route: projectRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));
export default router;
