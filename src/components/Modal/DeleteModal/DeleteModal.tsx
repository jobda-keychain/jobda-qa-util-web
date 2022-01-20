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
  getAccounts?: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ id, type, onClose, getAccounts }) => {
  const { onClickDeleteAccountButton } = useDeleteAccount(id, onClose, getAccounts);
  const { onClickDeleteEnvironmentButton } = useDeleteEnvironment(id, onClose, getAccounts);

  const onClick = type === 'account' ? onClickDeleteAccountButton : onClickDeleteEnvironmentButton;

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
