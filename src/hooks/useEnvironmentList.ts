import { useCallback, useState } from 'react';
import { Platform } from '../lib/enum/platform';
import { Environment } from '../types/environment.types';

const useEnvironmentList = () => {
  const [pageCount, setPageCount] = useState(1);

  const [environments, setEnvironments] = useState<Environment[]>([
    {
      id: 0,
      name: 'string',
      serverDomain: 'string',
      clientDomain: 'string',
      platform: Platform.JOBDA,
    },
  ]);

  const [isOpenModifyModal, setIsOpenModifyModal] = useState(false);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const toggleIsOpenModifyModal = useCallback(() => {
    setIsOpenModifyModal(!isOpenModifyModal);
  }, [isOpenModifyModal]);

  const toggleIsOpenDeleteModal = useCallback(() => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  }, [isOpenDeleteModal]);

  return {
    pageCount,
    environments,
    isOpenModifyModal,
    isOpenDeleteModal,
    toggleIsOpenModifyModal,
    toggleIsOpenDeleteModal,
  };
};

export default useEnvironmentList;
