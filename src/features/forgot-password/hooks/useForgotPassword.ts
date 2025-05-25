// src/features/forgot-password/hooks/useForgotPassword.ts
import { useMutation } from '@tanstack/react-query';

import { submitNewPassword, verifyResetCode } from '../api/forgot-password';
import type {
  PasswordResetInput,
  VerificationCodeInput,
} from '../schema/forgot-password';


/**
 * Custom hook to handle the forgot password process.
 * It returns mutations for sending a new password and for verifying the code.
 */
export const useForgotPassword = () => {
  const newPasswordMutation = useMutation({
    mutationFn: (input: PasswordResetInput) => submitNewPassword(input),
  });

  const verifyCodeMutation = useMutation({
    mutationFn: (input: VerificationCodeInput) => verifyResetCode(input),
  });

  return {
    newPasswordMutation,
    verifyCodeMutation,
    isPending: newPasswordMutation.isPending || verifyCodeMutation.isPending,
  };
};