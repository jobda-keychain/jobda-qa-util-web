import { useCallback, useState } from 'react';
import { Platform } from '../lib/enum/platform';
import { Environment } from '../types/environment.types';
import handleAxiosError from '../util/api/handleAxiosError';
import { createEnvironment, modifyEnvironment } from '../util/api/environment';

const useEnvironmentModal = (
  onClose: () => void,
  refresh?: () => void,
  environmentValue?: Environment,
) => {
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
        window.location.reload();
      },
      { 409: '이미 존재하는 이름입니다.', 400: '잘못된 입력입니다.' },
      setErrorMessage,
    );
  }, [environment, onClose]);

  const onClickModifyEnvironment = useCallback(async () => {
    handleAxiosError(
      async () => {
        await modifyEnvironment(environment.id, environment);
        refresh?.();
        onClose();
      },
      {
        409: '이미 존재하는 이름입니다.',
        400: '잘못된 입력입니다. 혹은 환경에 속한 계정이 있을 수 있습니다. 환경에 속한 계정을 전부 제거하고 재시도하세요',
      },
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
