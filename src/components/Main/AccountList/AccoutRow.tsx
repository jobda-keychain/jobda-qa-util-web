import { FaClipboard, FaPen, FaTrash } from 'react-icons/fa';
import { IoArrowRedo } from 'react-icons/io5';
import { IAccount } from '../../../types/account.types';
import { Row, RowButton } from '../../../style/Row';
import { PlatformLabel, EnvironmentLabel } from '../../../style/Labels';
import * as S from './style';
import { FC, useState } from 'react';
import { Modal } from '@mui/material';
import AccountModal from '../../Modal/AccountModal/AccountModal';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';

interface AccountRowProps {
  account: IAccount;
}

const AccountRow: FC<AccountRowProps> = ({ account }) => {
  const { environment, platform, userId } = account;
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
        <AccountModal type='detail' onClose={toggleIsOpenDetailModal} />
      </Modal>
      <Modal open={isOpenModifyModal} onClose={toggleIsOpenModifyModal}>
        <AccountModal type='modify' />
      </Modal>
      <Modal open={isOpenDeleteModal} onClose={toggleIsOpenDeleteModal}>
        <DeleteModal />
      </Modal>
    </Row>
  );
};

export default AccountRow;
