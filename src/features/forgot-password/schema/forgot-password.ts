import { z } from 'zod';

export const PasswordResetSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password cannot exceed 64 characters') // Prevent excessive length
      .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Must contain at least one number')
      .regex(/[\W_]/, 'Must contain at least one special character'), // Stronger validation
    confirmPassword: z
      .string()
      .min(8, 'Confirm password must match requirements'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const VerificationCodeSchema = z.object({
  code: z
    .string()
    .length(6, 'Verification code must be 6 digits')
    .regex(/^\d{6}$/, 'Verification code must contain only numbers') // Ensure only digits
    .trim(), // Remove accidental spaces
});

export type PasswordResetInput = z.infer<typeof PasswordResetSchema>;
export type VerificationCodeInput = z.infer<typeof VerificationCodeSchema>;
