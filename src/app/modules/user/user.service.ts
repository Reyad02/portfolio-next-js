/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from '../../utils/sendImg';
import IUser from './user.interface';
import User from './user.model';
import config from '../../config';
import bcrypt from 'bcrypt';

const createUser = async (user: IUser, file: any) => {
  if (file) {
    const imageName = user.name;
    const path = file;
    const { secure_url } = await sendImageToCloudinary(imageName, path.buffer);
    user.profileImage = secure_url as string;
  }
  const result = await User.create(user);
  return result;
};

const updateUser = async (id: string, user: Partial<IUser>, file: any) => {
  if (file) {
    const imageName = user.name;
    const path = file;
    const { secure_url } = await sendImageToCloudinary(
      imageName as string,
      path.buffer,
    );
    user.profileImage = secure_url as string;
  }
  if (user?.password) {
    const updatedPass = await bcrypt.hash(
      user.password,
      Number(config.salt_rounds),
    );
    user.password = updatedPass;
  }
  const result = await User.findByIdAndUpdate(id, user, { new: true });
  return result;
};

export const userServices = {
  createUser,
  updateUser,
};
