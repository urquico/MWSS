import { LoginDataType } from '@/features/login/types/login-data-types';
import { LoginRequest } from '@/features/login/types/login-request';
import { SuccessResponse } from '@/types/response-instance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '@/api/axios';
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
    const response = await api.post('/', {
      email: login.email,
      password: login.password,
    });

    const data = response.data as SuccessResponse<LoginDataType>;
    if (![200, 201].includes(data.statusCode)) {
      throw new Error(data.message);
    }

    return response.data;
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
      navigate('/landing');
      if (data.data?.id !== undefined) {
        localStorage.setItem('id', data.data.id.toString());
      }
      localStorage.setItem('isLogged', 'true');
    },
  });
};
