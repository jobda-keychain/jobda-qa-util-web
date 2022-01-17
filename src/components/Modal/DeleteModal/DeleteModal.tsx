import { Button } from '@mui/material';
import React, { FC } from 'react';
import * as S from './style';

const DeleteModal: FC = () => {
  return (
    <S.ModalContainer>
      <span>계정을 삭제하시겠습니까?</span>
      <S.ButtonContainer>
        <Button variant='contained'>예</Button>
        <Button variant='outlined'>아니오</Button>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
};

export default DeleteModal;
