import { useCallback } from 'react';
import { DeleteEnvironment } from '../util/api/environment/environment.api';

const useDeleteEnvironment = (id: number, onClose: () => void) => {
  const deleteEnvironment = useCallback(async () => {
    try {
      await DeleteEnvironment(id);
      onClose();
    } catch (error: any) {}
  }, [id, onClose]);

  return { deleteEnvironment };
};

export default useDeleteEnvironment;
