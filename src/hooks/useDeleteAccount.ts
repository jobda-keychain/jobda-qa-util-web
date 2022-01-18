import { useCallback } from 'react';

const useDeleteAccount = (id: number, onClose: () => void) => {
  const deleteAccount = useCallback(async () => {
    try {
      onClose();
    } catch (error: any) {}
  }, [id, onClose]);

  return { deleteAccount };
};

export default useDeleteAccount;
