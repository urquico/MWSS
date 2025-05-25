export type ModalStep = 'none' | 'changePassword' | 'verification' | 'success';

export type ForgotPasswordAction =
  | { type: 'OPEN' }
  | { type: 'GO_TO_VERIFICATION' }
  | { type: 'SHOW_SUCCESS' }
  | { type: 'CLOSE' };
