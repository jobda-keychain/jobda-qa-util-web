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

  const onClickCreateEnvironment = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleAxiosError(
        async () => {
          await createEnvironment(environment);
          onClose();
          window.location.reload();
        },
        {
          409: '이미 존재하는 이름입니다.',
          400: '이름은 2~10자, 서버 도메인과 클라이언트 도메인은 2~255자로 입력해주세요.',
        },
        setErrorMessage,
      );
    },
    [environment, onClose],
  );

  const onClickModifyEnvironment = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleAxiosError(
        async () => {
          await modifyEnvironment(environment.id, environment);
          refresh?.();
          onClose();
        },
        {
          409: '이미 존재하는 이름입니다.',
          404: '이미 삭제된 환경입니다.',
          400: '환경에 속한 계정이 있습니다. 속한 계정을 전부 제거하고 재시도하세요',
        },
        setErrorMessage,
      );
    },
    [environment, refresh, onClose],
  );

  return {
    environment,
    errorMessage,
    onChangeEnvironment,
    onClickCreateEnvironment,
    onClickModifyEnvironment,
  };
};

export default useEnvironmentModal;
