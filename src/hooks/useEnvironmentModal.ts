import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { Platform } from '../lib/enum/platform';
import { Environment } from '../types/environment.types';
import { createEnvironment, modifyEnvironment } from '../util/api/environment/environment.api';
import handleAxiosError from '../util/api/handleAxiosError';

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
    try {
      await createEnvironment(environment);
      onClose();
    } catch (error: any) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 409) {
        setErrorMessage('이미 존재하는 이름입니다.');
      } else if (axiosError.response?.status === 400) {
        setErrorMessage('잘못된 입력입니다.');
      } else {
        setErrorMessage(axiosError.message);
      }
    }
  }, [environment, onClose]);

  const onClickModifyEnvironment = useCallback(async () => {
    handleAxiosError(async () => {
      await modifyEnvironment(environment.id, environment);
      onClose();
    }, []);

    try {
      await modifyEnvironment(environment.id, environment);
      onClose();
    } catch (error: any) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 409) {
        setErrorMessage('이미 존재하는 이름입니다.');
      } else if (axiosError.response?.status === 400) {
        setErrorMessage('잘못된 입력입니다.');
      } else {
        setErrorMessage(axiosError.message);
      }
    }
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
