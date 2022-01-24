import { useCallback, useState } from 'react';
import { deleteAccount } from './../util/api/Account/index';
import { AxiosError } from 'axios';

const useDeleteAccount = (id: number, onClose: () => void, getAccounts?: () => void) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onClickDeleteAccountButton = useCallback(async () => {
    try {
      await deleteAccount(id);
      onClose();
      if (getAccounts) getAccounts();
    } catch (err) {
      switch ((err as AxiosError).response?.status) {
        case 404:
          if (getAccounts) getAccounts();
          onClose();
      }
    }
  }, [id, onClose, getAccounts]);

  return { onClickDeleteAccountButton };
};

export default useDeleteAccount;
