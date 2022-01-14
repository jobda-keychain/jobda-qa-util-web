import { FC } from 'react';
import * as S from './style';

interface ModalTemplateProps {
  isShowModal: boolean;
  onClose: () => void;
  modal: React.ReactNode;
}

// 아무데나 삽입해서 사용하세요.
const ModalPerformer: FC<ModalTemplateProps> = ({ isShowModal, onClose, modal }) => {
  return (
    <>
      {isShowModal ? (
        <S.ModalBackground onClick={onClose}>
          <S.ModalWrapper>{modal}</S.ModalWrapper>
        </S.ModalBackground>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalPerformer;
