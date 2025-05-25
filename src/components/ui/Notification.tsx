import IconCheck from '@/components/icons/IconCheck';
import IconExclamationMark from '@/components/icons/IconExclamationMark';
import { notifications } from '@mantine/notifications';

/**
 * notifyPromise function displays notifications for the lifecycle of a promise.
 *
 * @param {Promise<any>} promise - The promise to monitor.
 * @param {Object} messages - Messages to display during different promise states.
 * @param {string} messages.loadingMessage - Message displayed while the promise is loading.
 * @param {string} messages.successMessage - Message displayed when the promise resolves successfully.
 * @param {string} messages.errorMessage - Message displayed when the promise is rejected.
 * @returns {Promise<any>} The result of the resolved promise.
 * @throws Will throw an error if the promise is rejected.
 */
export const notifyPromise = async (
  promise: Promise<any>,
  {
    loadingMessage,
    successMessage,
    errorMessage,
  }: { loadingMessage: string; successMessage: string; errorMessage: string },
) => {
  const id = notifications.show({
    loading: true,
    title: 'Loading',
    message: loadingMessage,
    autoClose: false,
    withCloseButton: false,
    position: 'top-center',
  });

  try {
    const result = await promise;
    notifications.update({
      id,
      color: 'teal',
      title: 'Success',
      message: successMessage,
      icon: <IconCheck />,
      loading: false,
      autoClose: 2000,
    });
    return result;
  } catch (error) {
    notifications.update({
      id,
      color: 'red',
      title: 'Error',
      message: errorMessage,
      icon: <IconExclamationMark />,
      loading: false,
      autoClose: 2000,
    });
    throw error;
  }
};
