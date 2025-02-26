import { Request, Response } from "express";
import { authServices } from "./auath.service";
import loginValidationSchema from "./auth.validation";

const loginUser = async (req: Request, res: Response) => {
    try {
      const loginCredential = loginValidationSchema.parse(req.body);
      const result = await authServices.loginUser(loginCredential);
      res.json({
         message: 'User logged in successfully',
        success: true,
        data: result,
      })
     
    } catch (err) {
      console.log(err);
    }
  };

  export const authControllers = {
    loginUser,
  };