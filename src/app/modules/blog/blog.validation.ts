import { z } from 'zod';

const createBlogValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .nonempty({ message: 'Name can not be empty' }),
  description: z
    .string({ required_error: 'Email is required' })
    .nonempty({ message: 'Email can not be empty' }),
  like: z.number().optional(),
});
const updateBlogValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .nonempty({ message: 'Name can not be empty' }),
  description: z
    .string({ required_error: 'Email is required' })
    .nonempty({ message: 'Email can not be empty' }),
  like: z.number().optional(),
  img: z.string().optional(),
});

export const blogValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
