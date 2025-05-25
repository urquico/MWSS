import { AxiosError } from 'axios';

/**
 * Custom hook to retry request
 *
 * @param failureCount - The number of times the request has failed
 * @param error - The error object
 * @returns A boolean value
 * @example
 * const shouldRetry = retryRequest(failureCount, error);
 * if (shouldRetry) {
 *   console.log('Retrying request');
 * }
 *
 */

export const retryRequest = (failureCount: number, error: AxiosError) => {
  const status = error.status;
  if (status === 400 || status === 401) {
    return false;
  }
  return failureCount < 3;
};
