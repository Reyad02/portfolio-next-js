import { z } from 'zod';

const userValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .nonempty({ message: 'Name can not be empty' }),
  email: z
    .string({ required_error: 'Email is required' })
    .nonempty({ message: 'Email can not be empty' }),
  password: z
    .string({ required_error: 'Password is required' })
    .nonempty({ message: 'Password can not be empty' }),
  profileImage: z.string().optional(),
  userType: z.literal('Admin').optional(),
});

const updateUserValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).optional(),
  email: z.string({ required_error: 'Email is required' }).optional(),
  password: z.string({ required_error: 'Password is required' }).optional(),
  profileImage: z.string().optional(),
  userType: z.literal('Admin').optional(),
});

export const userValidation = {
  userValidationSchema,
  updateUserValidationSchema,
};
