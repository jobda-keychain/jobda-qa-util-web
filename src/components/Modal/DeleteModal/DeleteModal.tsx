import { Button } from '@mui/material';
import React, { FC } from 'react';
import * as S from './style';

interface Props {
  isShowModal: boolean;
  closeModal: () => void;
}

const DeleteModal: FC<Props> = ({ isShowModal, closeModal }) => {
  return (
    <>
      {isShowModal && (
        <S.Wrapper onClick={closeModal}>
          <S.ModalContainer>
            <span>계정을 삭제하시겠습니까?</span>
            <S.ButtonContainer>
              <Button variant='contained'>예</Button>
              <Button variant='outlined'>아니오</Button>
            </S.ButtonContainer>
          </S.ModalContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default DeleteModal;
