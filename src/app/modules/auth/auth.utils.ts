import jwt, { SignOptions } from 'jsonwebtoken';

export const createToken = (
  email: string,
  secret: string,
  expiredTime: string,
) => {
  return jwt.sign({ email }, secret, {
    expiresIn: expiredTime,
  } as SignOptions);
};
