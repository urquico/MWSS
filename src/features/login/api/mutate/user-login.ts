import { api } from '@/api/axios';
import { LoginDataType } from '@/features/login/types/login-data-types';
import { LoginRequest } from '@/features/login/types/login-request';
import { API_URL } from '@/types/constants';
import { ErrorResponse, SuccessResponse } from '@/types/response-instance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 *
 * This function is used to login the user
 *
 * @param login - The login request object
 * @returns The login response object
 *
 * @throws Error
 *
 * @example
 * const loginResponse = await login(loginRequest);
 *
 * @category Login
 *
 **/

export const login = async (
  login: LoginRequest,
): Promise<SuccessResponse<LoginDataType>> => {
  try {
    const response = await api.post(`${API_URL}/api/v1/auth/login`, {
      email: login.email,
      password: login.password,
    });

    if (response.data.statusCode >= 400) {
      throw response.data;
    }

    const data = response.data as SuccessResponse<LoginDataType>;

    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Custom hook to login the user
 *
 * @returns The login mutation
 * @example
 * const { mutate, isLoading, isError, isSuccess, error } = useLoginMutation();
 * if (isError) {
 * return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 */

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (loginRequest: LoginRequest) => {
      return login(loginRequest);
    },
    onSuccess: (data: SuccessResponse<LoginDataType>) => {
      if (data.data.permissions !== undefined) {
        localStorage.setItem(
          'permissions',
          JSON.stringify(data.data.permissions),
        );
      }
      localStorage.setItem('isLogged', 'true');

      navigate('/landing');
    },
    onError: (error: ErrorResponse) => {
      console.error('Login failed:', error);
      // Handle error, e.g., show a notification or alert
    },
  });
};
