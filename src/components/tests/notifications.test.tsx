import IconCheck from '@/components/icons/IconCheck';
import IconExclamationMark from '@/components/icons/IconExclamationMark';
import { notifications } from '@mantine/notifications';
import { describe, expect, it, vi } from 'vitest';

import { notifyPromise } from '../ui/Notification';

vi.mock('@mantine/notifications', () => ({
  notifications: {
    show: vi.fn(() => 'mock-id'),
    update: vi.fn(),
  },
}));

describe('notifyPromise', () => {
  it('should show loading notification and update to success on promise resolve', async () => {
    const promise = Promise.resolve('Success');
    const messages = {
      loadingMessage: 'Loading...',
      successMessage: 'Operation successful!',
      errorMessage: 'Operation failed!',
    };

    await notifyPromise(promise, messages);

    expect(notifications.show).toHaveBeenCalledWith({
      loading: true,
      title: 'Loading',
      message: messages.loadingMessage,
      autoClose: false,
      withCloseButton: false,
      position: 'top-center',
    });

    expect(notifications.update).toHaveBeenCalledWith({
      id: 'mock-id',
      color: 'teal',
      title: 'Success',
      message: messages.successMessage,
      icon: <IconCheck />,
      loading: false,
      autoClose: 2000,
    });
  });

  it('should show loading notification and update to error on promise reject', async () => {
    const promise = Promise.reject(new Error('Failure'));
    const messages = {
      loadingMessage: 'Loading...',
      successMessage: 'Operation successful!',
      errorMessage: 'Operation failed!',
    };

    try {
      await notifyPromise(promise, messages);
    } catch (error) {
      // Handle the error to prevent unhandled promise rejection
    }

    expect(notifications.show).toHaveBeenCalledWith({
      loading: true,
      title: 'Loading',
      message: messages.loadingMessage,
      autoClose: false,
      withCloseButton: false,
      position: 'top-center',
    });

    expect(notifications.update).toHaveBeenCalledWith({
      id: 'mock-id',
      color: 'red',
      title: 'Error',
      message: messages.errorMessage,
      icon: <IconExclamationMark />,
      loading: false,
      autoClose: 2000,
    });
  });
});
