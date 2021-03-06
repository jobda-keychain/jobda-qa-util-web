import React from 'react';
import Modal from '@mui/material/Modal';
import { logo } from '../../../assets/Main';
import useHeader from '../../../hooks/useHeader';
import { ModalWrapper } from '../../../style/Modal';
import AccountModal from '../../Modal/AccountModal/AccountModal';
import EnvironmentModal from '../../Modal/EnvironmentModal/EnvironmentModal';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const PublicHeader = () => {
  const { isMainPage, isOpenModal, toggleIsOpenModal } = useHeader();
  const navigate = useNavigate();

  const linkToMain = () => {
    navigate('/');
  };

  return (
    <S.Wrapper>
      <S.Title>
        <S.Logo onClick={linkToMain} src={logo} alt='' />
        {isMainPage || <span>환경관리</span>}
      </S.Title>
      <S.BtnWrapper>
        {isMainPage ? (
          <S.AddBtn onClick={toggleIsOpenModal}>계정 추가</S.AddBtn>
        ) : (
          <S.AddBtn onClick={toggleIsOpenModal}>환경 추가</S.AddBtn>
        )}
      </S.BtnWrapper>

      {isMainPage ? (
        <Modal open={isOpenModal} onClose={toggleIsOpenModal}>
          <ModalWrapper>
            <AccountModal type='add' onClose={toggleIsOpenModal} />
          </ModalWrapper>
        </Modal>
      ) : (
        <Modal open={isOpenModal} onClose={toggleIsOpenModal}>
          <ModalWrapper>
            <EnvironmentModal type='create' onClose={toggleIsOpenModal} />
          </ModalWrapper>
        </Modal>
      )}
    </S.Wrapper>
  );
};

export default PublicHeader;
