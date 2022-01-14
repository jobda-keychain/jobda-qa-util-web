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
              <button>예</button>
              <button>아니오</button>
            </S.ButtonContainer>
          </S.ModalContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default DeleteModal;
