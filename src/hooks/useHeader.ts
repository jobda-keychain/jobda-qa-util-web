import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeader = () => {
  const [isMainPage, setIsMainPage] = useState(true);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') setIsMainPage(false);
  }, [pathname]);

  const toggleIsOpenModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return { isMainPage, isOpenModal, toggleIsOpenModal };
};

export default useHeader;
