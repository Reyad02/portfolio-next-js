import { z } from 'zod';

const projectValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .nonempty({ message: 'Name can not be empty' }),
  description: z
    .string({ required_error: 'Description is required' })
    .nonempty({ message: 'Description can not be empty' }),
  liveLink: z
    .string({ required_error: 'Live Link is required' })
    .nonempty({ message: 'Live Link can not be empty' }),
});

export default projectValidationSchema;
