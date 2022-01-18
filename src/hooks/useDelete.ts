import { useCallback } from 'react';
import { DeleteEnvironment } from '../util/api/environment/environment.api';

const useDelete = (id: number, onClose: () => void) => {
  const deleteAccount = useCallback(async () => {
    try {
      onClose();
    } catch (error: any) {}
  }, [id, onClose]);

  const deleteEnvironment = useCallback(async () => {
    try {
      await DeleteEnvironment(id);
      onClose();
    } catch (error: any) {}
  }, [id, onClose]);

  return { deleteAccount, deleteEnvironment };
};

export default useDelete;
