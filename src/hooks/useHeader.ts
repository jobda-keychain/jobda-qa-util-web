import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CreateEnvironment } from '../util/api/environment/environment.api';
import { ICreateEnvironmentDto } from '../util/api/environment/environment.dto';

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

  const onClickCreateEnvironment = useCallback(async (environment: ICreateEnvironmentDto) => {
    try {
      await CreateEnvironment(environment);
    } catch (error: any) {
      // 실패
    }
  }, []);

  return { isMainPage, isOpenModal, toggleIsOpenModal, onClickCreateEnvironment };
};

export default useHeader;
