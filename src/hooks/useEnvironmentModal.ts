import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { Platform } from '../lib/enum/platform';
import { Environment } from '../types/environment.types';
import handleAxiosError from '../util/api/handleAxiosError';
import { createEnvironment, modifyEnvironment } from '../util/api/environment';

const useEnvironmentModal = (onClose: () => void, environmentValue?: Environment) => {
  const [environment, setEnvironment] = useState(
    environmentValue ?? {
      id: 0,
      name: '',
      serverDomain: '',
      clientDomain: '',
      platform: Platform.JOBDA,
    },
  );

  const [errorMessage, setErrorMessage] = useState('');

  const onChangeEnvironment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnvironment({
      ...environment,
      [e.target.name]: e.target.value,
    });

  const onClickCreateEnvironment = useCallback(async () => {
    handleAxiosError(
      async () => {
        await createEnvironment(environment);
        onClose();
      },
      { 409: '이미 존재하는 이름입니다.', 400: '잘못된 입력입니다.' },
      setErrorMessage,
    );
  }, [environment, onClose]);

  const onClickModifyEnvironment = useCallback(async () => {
    handleAxiosError(
      async () => {
        await modifyEnvironment(environment.id, environment);
        onClose();
      },
      { 409: '이미 존재하는 이름입니다.', 400: '잘못된 입력입니다.' },
      setErrorMessage,
    );
  }, [environment, onClose]);

  return {
    environment,
    errorMessage,
    onChangeEnvironment,
    onClickCreateEnvironment,
    onClickModifyEnvironment,
  };
};

export default useEnvironmentModal;
