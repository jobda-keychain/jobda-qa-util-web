import { useCallback } from 'react';
import { deleteAccount } from './../util/api/Account/index';

const useDeleteAccount = (id: number, onClose: () => void) => {
  const onClickDeleteAccountButton = useCallback(async () => {
    try {
      await deleteAccount(id);
      onClose();
      console.log('삭제에 성공했습니다.');
    } catch (error: any) {
      throw error;
    }
  }, [id, onClose]);

  return { onClickDeleteAccountButton };
};

export default useDeleteAccount;
