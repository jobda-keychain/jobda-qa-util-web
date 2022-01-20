import { useCallback, useState } from 'react';
import { login } from '../util/api/Account';
import handleAxiosError from '../util/api/handleAxiosError';

const useAutoLogin = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const autoLogin = useCallback(async (id: number) => {
    handleAxiosError(
      async () => {
        const { data } = await login(id);
        window.open(data.clientDomain, '_blank');
      },
      { 401: '사용할 수 없는 계정입니다.' },
      setErrorMessage,
    );
  }, []);

  return { errorMessage, autoLogin };
};

export default useAutoLogin;
