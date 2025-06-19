import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Invalid email address.' }),
  password: z.string().min(1, {
    message: 'Password should not be empty.',
  }),
});
