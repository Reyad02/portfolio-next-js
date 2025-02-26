import { NextFunction, Request, Response, Router } from 'express';
import { upload } from '../../utils/sendImg';
import { projectControllers } from './project.controller';

const projectRouter = Router();

projectRouter.post(
  '/',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  projectControllers.createProject,
);

projectRouter.delete('/:projectId', projectControllers.deleteProject);
projectRouter.get('/:projectId', projectControllers.getSingleProject);
projectRouter.get('/', projectControllers.getProjects);

export default projectRouter;
