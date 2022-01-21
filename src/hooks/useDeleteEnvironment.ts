import { useCallback, useState } from 'react';
import { deleteEnvironment } from '../util/api/environment';
import handleAxiosError from '../util/api/handleAxiosError';

const useDeleteEnvironment = (id: number, onClose: () => void, getAccounts?: () => void) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onClickDeleteEnvironmentButton = useCallback(async () => {
    handleAxiosError(
      async () => {
        await deleteEnvironment(id);
        onClose();
        if (getAccounts) getAccounts();
      },
      { 400: '환경에 속한 계정이 있습니다. 환경에 속한 계정을 전부 제거하고 재시도하세요' },
      setErrorMessage,
    );
  }, [id, onClose, getAccounts]);

  return { errorMessage, onClickDeleteEnvironmentButton };
};

export default useDeleteEnvironment;
