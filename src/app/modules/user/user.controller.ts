import { Request, Response } from 'express';
import { userServices } from './user.service';
import { userValidation } from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const parseBody = userValidation.userValidationSchema.parse(body);
    const result = await userServices.createUser(parseBody, req.file);
    res.json({
      message: 'User created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUser= async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const body = req.body;
      const parseBody =
        userValidation.updateUserValidationSchema.parse(body);
      const result = await userServices.updateUser(
        userId,
        parseBody,
        req.file,
      );
      res.json({
        message: 'user updated successfully',
        success: true,
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };



export const userControllers = {
  createUser,
  updateUser
};
