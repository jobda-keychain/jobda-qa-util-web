import Modal from '@mui/material/Modal';
import { useLocation } from 'react-router-dom';
import { logo } from '../../../assets/Main';
import useHeader from '../../../hooks/useHeader';
import AccountModal from '../../Modal/AccountModal/AccountModal';
import EnvironmentModal from '../../Modal/EnvironmentModal/EnvironmentModal';
import * as S from './style';

const PublicHeader = () => {
  const { isMainPage, isOpenModal, toggleIsOpenModal } = useHeader();

  return (
    <S.Wrapper>
      <S.Title>
        <S.Logo src={logo} alt='' />
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
          <AccountModal type='add' />
        </Modal>
      ) : (
        <Modal open={isOpenModal} onClose={toggleIsOpenModal}>
          <EnvironmentModal type='create'></EnvironmentModal>
        </Modal>
      )}
    </S.Wrapper>
  );
};

export default PublicHeader;
