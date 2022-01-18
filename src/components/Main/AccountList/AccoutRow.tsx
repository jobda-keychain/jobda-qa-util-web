import { FaClipboard, FaPen, FaTrash } from 'react-icons/fa';
import { IoArrowRedo } from 'react-icons/io5';
import { Account } from '../../../types/account.types';
import { Row, RowButton } from '../../../style/Row';
import { PlatformLabel, EnvironmentLabel } from '../../../style/Labels';
import * as S from './style';
import { FC, useState } from 'react';
import { Modal } from '@mui/material';
import AccountModal from '../../Modal/AccountModal/AccountModal';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';

interface AccountRowProps {
  account: Account;
}

const AccountRow: FC<AccountRowProps> = ({ account }) => {
  const { id, environment, platform, userId } = account;

  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenModifyModal, setIsOpenModifyModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const toggleIsOpenDetailModal = () => {
    setIsOpenDetailModal(!isOpenDetailModal);
  };

  const toggleIsOpenModifyModal = () => {
    setIsOpenModifyModal(!isOpenModifyModal);
  };

  const toggleIsOpenDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  return (
    <Row>
      <S.EnvironmentWrapper type='row'>
        <EnvironmentLabel>{environment}</EnvironmentLabel>
      </S.EnvironmentWrapper>
      <S.PlatformWrapper type='row'>
        <PlatformLabel type={platform}>{platform}</PlatformLabel>
      </S.PlatformWrapper>
      <S.UserIdWrapper type='row' onClick={toggleIsOpenDetailModal}>
        {userId}
      </S.UserIdWrapper>

      <S.ButtonWrapper>
        <RowButton onClick={toggleIsOpenModifyModal}>
          <FaPen />
        </RowButton>
        <RowButton onClick={toggleIsOpenDeleteModal}>
          <FaTrash />
        </RowButton>
        <RowButton>
          <IoArrowRedo />
        </RowButton>
        <RowButton>
          <FaClipboard />
        </RowButton>
      </S.ButtonWrapper>

      <Modal open={isOpenDetailModal} onClose={toggleIsOpenDetailModal}>
        <AccountModal type='detail'></AccountModal>
      </Modal>

      <Modal open={isOpenModifyModal} onClose={toggleIsOpenModifyModal}>
        <AccountModal type='modify'></AccountModal>
      </Modal>

      <Modal open={isOpenDeleteModal} onClose={toggleIsOpenDeleteModal}>
        <DeleteModal type='account' id={id} onClose={toggleIsOpenDeleteModal}></DeleteModal>
      </Modal>
    </Row>
  );
};

export default AccountRow;
