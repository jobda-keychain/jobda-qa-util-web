const useAutoLogin = () => {
  const autoLogin = () => {
    window.open('https://jobda.im/login', '_blank');
  };

  return { autoLogin };
};

export default useAutoLogin;
