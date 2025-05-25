import { z } from 'zod';

export const loginSchema = z.object({
  kiosk_code: z.string().min(1, { message: 'Invalid email address.' }),
  password: z.string().min(1, {
    message: 'Password should not be empty.',
  }),
});
