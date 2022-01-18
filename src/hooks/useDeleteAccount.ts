import { useCallback } from 'react';

const useDeleteAccount = (id: number, onClose: () => void) => {
  const onClickDeleteAccountButton = useCallback(async () => {
    try {
      onClose();
    } catch (error: any) {}
  }, [id, onClose]);

  return { onClickDeleteAccountButton };
};

export default useDeleteAccount;
