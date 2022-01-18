import { useCallback, useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleIsOpenModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return { isOpenModal, toggleIsOpenModal };
};

export default useModal;
