import { login } from '../util/api/Account';

const useAutoLogin = () => {
  const autoLogin = async (id: number) => {
    const { data } = await login(id);

    window.open(data.clientDomain, '_blank');
  };

  return { autoLogin };
};

export default useAutoLogin;
