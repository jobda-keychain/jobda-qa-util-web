import { Button } from '@mui/material';
import React, { FC } from 'react';
import useDeleteAccount from '../../../hooks/useDeleteAccount';
import useDeleteEnvironment from '../../../hooks/useDeleteEnvironment';
import { DeleteModalType } from '../../../types/modal.types';
import * as S from './style';

interface DeleteModalProps {
  id: number;
  type: DeleteModalType;
  onClose: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ id, type, onClose }) => {
  const { deleteEnvironment } = useDeleteEnvironment(id, onClose);
  const { deleteAccount } = useDeleteAccount(id, onClose);

  const onClick = type === 'account' ? deleteAccount : deleteEnvironment;

  return (
    <S.ModalContainer>
      <span>계정을 삭제하시겠습니까?</span>
      <S.ButtonContainer>
        <Button onClick={onClick} variant='contained'>
          예
        </Button>
        <Button onClick={onClose} variant='outlined'>
          아니오
        </Button>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
};

export default DeleteModal;
