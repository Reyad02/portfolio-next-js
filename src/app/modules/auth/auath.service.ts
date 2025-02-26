import User from "../user/user.model";
import { IAuthUser } from "./auth.interface";
import bcrypt from 'bcrypt';
import { createToken } from "./auth.utils";
import config from "../../config";


const loginUser = async (loginInfo: IAuthUser) => {
    const isUserExist = await User.findOne({ email: loginInfo?.email });
    if (!isUserExist) {
      throw new Error('User not found');
    }
  
    const isPassWordMatched = await bcrypt.compare(
      loginInfo.password,
      isUserExist.password,
    );
  
    if (!isPassWordMatched) {
      throw new Error( 'Give the correct password');
    }
  
    const token = createToken(
      isUserExist.email,
      config.jwt_secret as string,
      config.jwt_expiration as string,
    );
  
    return { isUserExist, token };
  };

  
export const authServices = {
    loginUser,
  };