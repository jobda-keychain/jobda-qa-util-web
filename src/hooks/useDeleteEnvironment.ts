import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { deleteEnvironment } from '../util/api/environment';

const useDeleteEnvironment = (id: number, onClose: () => void, getAccounts?: () => void) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onClickDeleteEnvironmentButton = useCallback(async () => {
    try {
      await deleteEnvironment(id);
      onClose();
      if (getAccounts) getAccounts();
    } catch (err) {
      switch ((err as AxiosError).response?.status) {
        case 400:
          setErrorMessage(
            '환경에 속한 계정이 있습니다. 환경에 속한 계정을 전부 제거하고 재시도하세요',
          );
          break;
        case 404:
          if (getAccounts) getAccounts();
          onClose();
          break;
      }
    }
  }, [id, onClose, getAccounts]);

  return { errorMessage, onClickDeleteEnvironmentButton };
};

export default useDeleteEnvironment;
