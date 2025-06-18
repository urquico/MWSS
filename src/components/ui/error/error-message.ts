import { HTTP_STATUS } from '@/types/constants';

/**
 * Get error message based on status code.
 *
 * @param {number | null} status - The status code of the error.
 * @returns {string} The error message based on the status code.
 *
 * @example
 * getErrorMessage(404);
 * returns 'We can’t seem to find the page you’re looking for.'
 *
 */

export const getErrorMessage = (status: number | null) => {
  const isLogged = localStorage.getItem('isLogged');

  // If the user is logged in and the status is 401, show session expired message
  if (status === HTTP_STATUS.UNAUTHORIZED && isLogged) {
    return 'Session Expired. For your security, please log in again.';
  }
  switch (status) {
    case HTTP_STATUS.BAD_REQUEST:
      return 'Bad request. Please check your input and try again.';
    case HTTP_STATUS.UNAUTHORIZED:
      return 'Unauthorized access. Please log in to continue.';
    case HTTP_STATUS.FORBIDDEN:
      return "Access denied. You don't have permission to view this page.";
    case HTTP_STATUS.NOT_FOUND:
      return 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.';
    case HTTP_STATUS.REQUEST_TIMEOUT:
      return 'Request timeout. Please check your connection and try again.';
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
      return 'Internal server error. Please try again later or contact support if the issue persists.';
    case HTTP_STATUS.BAD_GATEWAY:
      return 'Bad gateway. Please try again later or contact support if the issue persists.';
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
      return 'Service unavailable. Please try again later or contact support if the issue persists.';
    case HTTP_STATUS.GATEWAY_TIMEOUT:
      return 'Gateway timeout. Please check your connection and try again.';
    default:
      return 'An unexpected error occurred. Please try again later or contact support if the issue persists.';
  }
};
