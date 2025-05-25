// src/features/forgot-password/api/forgot-password.ts
import axios from 'axios';



import type { PasswordResetInput, VerificationCodeInput } from '../schema/forgot-password';


/**
 * Submits a new password for the user with validation
 * @param input - Object containing newPassword and confirmPassword
 * @returns Promise resolving with success response
 */
export const submitNewPassword = async (input: PasswordResetInput) => {
  // const response = await axios.post('/api/forgot-password', {
  //   newPassword: input.newPassword,
  // });
  // return response.data;
  console.log('submitNewPassword input:', input);
  return Promise.resolve({ success: true });
};

/**
 * Verifies the reset code with validation
 * @param input - Object containing verification code
 * @returns Promise resolving with verification response
 */

export const verifyResetCode = async (input: VerificationCodeInput) => {
  // const response = await axios.post('/api/verify-reset-code', {
  //   code: input.code,
  // });
  // return response.data;
  console.log('verifyResetCode input:', input);
  return Promise.resolve({ success: true });
};