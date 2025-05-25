import { api } from '@/api/axios-instance';
import { SuccessResponse } from '@/types/response-instance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 *
 * This function is used to logout the user
 *
 * @returns The logout response object
 *
 * @throws Error
 *
 * @example
 * const logoutResponse = await logout();
 *
 * @category Logout
 *
 **/

export const logout = async () => {
  try {
    const response = await api.post('/auth/logout');

    const data = response.data as SuccessResponse;
    if (![200, 201].includes(data.statusCode)) {
      throw new Error(data.message);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Custom hook to logout the user
 *
 * @returns The logout mutation
 * @example
 * const { mutateAsync, isLoading, isError, isSuccess, error } = useLogoutMutation();
 * if (isError) {
 * return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 */

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: () => {
      return logout();
    },
    onSuccess: () => {
      localStorage.clear();
      navigate('/');
    },
  });
};
