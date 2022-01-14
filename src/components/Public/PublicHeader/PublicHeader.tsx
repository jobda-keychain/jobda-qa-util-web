import Modal from '@mui/material/Modal';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { logo } from '../../../assets/Main';
import AccountModal from '../../Modal/AccountModal/AccountModal';
import EnvironmentModal from '../../Modal/EnvironmentModal/EnvironmentModal';
import * as S from './style';

const PublicHeader = () => {
  const [isMainPage, setIsMainPage] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') setIsMainPage(false);
  }, [pathname]);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <S.Wrapper>
      <S.Title>
        <S.Logo src={logo} alt='' />
        {isMainPage || <span>환경관리</span>}
      </S.Title>
      <S.BtnWrapper>
        {isMainPage ? (
          <S.AddBtn onClick={openModal}>계정 추가</S.AddBtn>
        ) : (
          <S.AddBtn onClick={openModal}>환경 추가</S.AddBtn>
        )}
      </S.BtnWrapper>

      {isMainPage ? (
        <Modal
          open={isShowModal}
          onClose={closeModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <AccountModal type='add' />
        </Modal>
      ) : (
        <Modal
          open={isShowModal}
          onClose={closeModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <EnvironmentModal type='create'></EnvironmentModal>
        </Modal>
      )}
    </S.Wrapper>
  );
};

export default PublicHeader;
