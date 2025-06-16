import Modal from '@/components/ui/modal/Modal';
import PasswordInput from '@/components/ui/PasswordInput';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import type { ModalStep, ForgotPasswordAction } from '../types/forgot-password';
import { useForgotPassword } from '@/features/forgot-password/hooks/useForgotPassword';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Flex, Group, PinInput } from '@mantine/core';
import React, { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  PasswordResetSchema,
  VerificationCodeSchema,
} from '../schema/forgot-password';
import type {
  PasswordResetInput,
  VerificationCodeInput,
} from '../schema/forgot-password';


interface ForgotPasswordState {
  step: ModalStep;
}

const forgotPasswordReducer = (
  state: ForgotPasswordState,
  action: ForgotPasswordAction,
): ForgotPasswordState => {
  switch (action.type) {
    case 'OPEN':
      return { step: 'changePassword' };
    case 'GO_TO_VERIFICATION':
      return { step: 'verification' };
    case 'SHOW_SUCCESS':
      return { step: 'success' };
    case 'CLOSE':
      return { step: 'none' };
    default:
      return state;
  }
};

interface ForgotPasswordModalProps {
  open: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  open,
  onClose,
}) => {
  const [state, dispatch] = useReducer(forgotPasswordReducer, {
    step: open ? 'changePassword' : 'none',
  });

  useEffect(() => {
    if (open) {
      dispatch({ type: 'OPEN' });
    }
  }, [open]);

  const { newPasswordMutation, verifyCodeMutation } = useForgotPassword();
  const [verificationError, setVerificationError] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetInput>({
    resolver: zodResolver(PasswordResetSchema),
  });

  const handlePasswordSubmit = async (data: PasswordResetInput) => {
    try {
      await newPasswordMutation.mutateAsync(data);
      dispatch({ type: 'GO_TO_VERIFICATION' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleCodeSubmit = async (data: VerificationCodeInput) => {
    try {
      await verifyCodeMutation.mutateAsync(data);
      setVerificationError('');
      dispatch({ type: 'SHOW_SUCCESS' });
    } catch (err) {
      setVerificationError('Invalid or expired code. Please try again.');
      console.error(err);
    }
  };

  return (
    <Modal
      opened={open && state.step !== 'none'}
      onClose={() => {
        dispatch({ type: 'CLOSE' });
        onClose();
      }}
      title={
        state.step === 'changePassword'
          ? 'Change Password'
          : state.step === 'verification'
            ? 'Verification'
            : state.step === 'success'
              ? 'Success'
              : ''
      }
      centered
      size={
        state.step === 'changePassword' || state.step === 'verification'
          ? '55rem'
          : 'lg'
      }
      contentClassName={state.step === 'success' ? 'p-28' : undefined}
      withHeaderBorder
    >
      {state.step === 'changePassword' && (
        <form onSubmit={handleSubmit(handlePasswordSubmit)}>
          <Flex justify='center' direction='column' gap='md'>
            <Text fz={30} fw={700} className='text-neutral '>
              Change Password
            </Text>
            <PasswordInput
              fz={20}
              fw={400}
              placeholder='Enter New Password'
              label='New Password'
              {...register('newPassword')}
              withAsterisk
              withStrength
              error={errors.newPassword?.message}
              onChange={(e) => {
                register('newPassword').onChange(e);
              }}
            />
            <PasswordInput
              fz={20}
              fw={400}
              placeholder='Confirm New Password'
              label='Confirm New Password'
              {...register('confirmPassword')}
              withAsterisk
              autoComplete='off'
              error={errors.confirmPassword?.message}
            />
            <Button type='submit' loading={newPasswordMutation.isPending}>
              Log In
            </Button>
          </Flex>
        </form>
      )}
      {state.step === 'verification' && (
        <Flex justify='center' direction='column' gap='lg'>
          <Text fz={30} fw={700} className='text-neutral'>
            Verification Code
          </Text>
          <Text>Enter the code sent to your email</Text>
          {verificationError && <Alert color='red'>{verificationError}</Alert>}
          <div className='ml-9'>
            <PinInput
              size='xl'
              length={6}
              placeholder='*'
              type='number'
              styles={{
                input: { height: '65px', fontSize: '20px', width: '45px' },
                root: { gap: '20px' }, // <-- this sets the gap between boxes
              }}
              value={verificationCode}
              onChange={setVerificationCode}
            />
          </div>
          <Group grow className='mt-4'>
            <Button variant='outline' color='#000ADE'
              loading={verifyCodeMutation.isPending}>
              Resend Code
            </Button>
            <Button
              onClick={() => handleCodeSubmit({ code: verificationCode })}
              loading={verifyCodeMutation.isPending}
              disabled={verificationCode.length !== 6}
            >
              Continue
            </Button>
          </Group>
        </Flex>
      )}
      {state.step === 'success' && (
        <Flex gap="md" justify="center" align="stretch" direction="column">
          <Text fz={30} fw={700} className='text-neutral' ta="center">
            Password Updated!
          </Text>
          <Text mb='sm' ta="center">
            Your password has been successfully updated! You can now log in with
            your new credentials and continue accessing your account securely
          </Text>
          <Group mt='md' grow>
            <Button fullWidth onClick={() => dispatch({ type: 'CLOSE' })}>Close</Button>
          </Group>
        </Flex>
      )}
    </Modal>
  );
};

export default ForgotPasswordModal;
