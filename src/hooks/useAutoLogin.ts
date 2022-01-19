import { Cookies } from 'react-cookie';

const useAutoLogin = () => {
  const cookies = new Cookies();

  const autoLogin = () => {
    cookies.set('hello;', 'hello', {
      path: '/',
      domain: 'www.jobda.im',
      sameSite: 'none',
    });

    window.open('http://jobda.im', '_blank');
  };

  return { autoLogin };
};

export default useAutoLogin;
