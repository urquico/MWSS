import { loginSchema } from '@/features/login/schema/login.schema';
import { z } from 'zod';

export type LoginRequest = z.infer<typeof loginSchema>;
