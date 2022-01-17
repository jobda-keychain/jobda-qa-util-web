import { useCallback, useState } from 'react';
import { EPlatform } from '../lib/enum/platform';
import { IEnvironment } from '../types/environment.types';
import { CreateEnvironment } from '../util/api/environment/environment.api';
import { ICreateEnvironmentDto } from '../util/api/environment/environment.dto';

const useEnvironment = () => {
  const [pageCount, setPageCount] = useState(1);

  const [environments, setEnvironments] = useState<IEnvironment[]>([
    {
      id: 0,
      name: 'string',
      serverDomain: 'string',
      clientDomain: 'string',
      platform: EPlatform.JOBDA,
    },
  ]);

  const [isOpenModifyModal, setIsOpenModifyModal] = useState(false);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const toggleIsOpenModifyModal = () => {
    setIsOpenModifyModal(!isOpenModifyModal);
  };

  const toggleIsOpenDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const onClickCreateEnvironment = useCallback(async (environment: ICreateEnvironmentDto) => {
    try {
      await CreateEnvironment(environment);
    } catch (error: any) {
      // 실패
    }
  }, []);

  return {
    pageCount,
    environments,
    isOpenModifyModal,
    isOpenDeleteModal,
    toggleIsOpenModifyModal,
    toggleIsOpenDeleteModal,
    onClickCreateEnvironment,
  };
};

export default useEnvironment;
