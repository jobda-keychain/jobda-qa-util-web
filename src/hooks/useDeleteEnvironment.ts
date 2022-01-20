import { useCallback } from 'react';
import { deleteEnvironment } from '../util/api/environment';

const useDeleteEnvironment = (id: number, onClose: () => void) => {
  const onClickDeleteEnvironmentButton = useCallback(async () => {
    try {
      await deleteEnvironment(id);
      onClose();
    } catch (error: any) {}
  }, [id, onClose]);

  return { onClickDeleteEnvironmentButton };
};

export default useDeleteEnvironment;
