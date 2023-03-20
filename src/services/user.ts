import { useMutation } from 'react-query';
import { useState } from 'react';

// import { TAccount } from '../providers/AuthProvider';
import client from './client';
// import { useAuthContext } from '../providers/hooks/useAuthContext';
import { Error } from '../types/general';

export function useLogin() {
  const [serverError, setServerError] = useState<string | null>(null);
  // const { setAuthData } = useAuthContext();

  const onCredentialsSuccess = (authData: any) => {
    if (authData?.accessToken) {
      // setAuthData(authData);
    }
  };

  const { mutate, isLoading } = useMutation(client.users.login, {
    onSuccess: (data) => {
      const authData = data?.data;

      if (!authData?.access_token) {
        setServerError('error-credential-wrong');

        return;
      }
      const payload = {
        accessToken: authData.access_token,
        refreshToken: authData.refresh_token,
        user: authData.user,
      };

      onCredentialsSuccess(payload);
    },
    onError: (error: Error) => {
      console.log("🚀 ~ file: user.ts:39 ~ useLogin ~ error", error)
    },
  });

  return { mutate, isLoading, serverError, setServerError };
}
