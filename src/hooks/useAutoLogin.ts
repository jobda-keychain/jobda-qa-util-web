import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { login } from '../util/api/Account';

const useAutoLogin = () => {
  const autoLogin = useCallback(async (id: number) => {
    try {
      const { data } = await login(id);
      window.open(data.clientDomain, '_blank');
    } catch (error: any) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === 401) {
        alert('로그인할 수 없는 계정입니다.');
      }
    }
  }, []);

  return { autoLogin };
};

export default useAutoLogin;
