import { NextFunction, Request, Response, Router } from 'express';
import { upload } from '../../utils/sendImg';
import { userControllers } from './user.controller';

const userRouter = Router();

userRouter.post(
  '/',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  userControllers.createUser,
);

userRouter.put(
  '/:userId',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  userControllers.updateUser,
);


export default userRouter;
