import { FaClipboard, FaPen, FaTrash } from 'react-icons/fa';
import { IoArrowRedo } from 'react-icons/io5';
import { Account } from '../../../types/account.types';
import { Row } from '../../../style/Row';
import { PlatformLabel, EnvironmentLabel } from '../../../style/Labels';
import * as S from './style';
import React, { FC } from 'react';
import { AccountModalType } from '../../../types/modal.types';
import { IconButton } from '@mui/material';

interface AccountRowProps {
  account: Account;
  setModalType: (modalType: AccountModalType) => void;
  toggleIsOpenModal: () => void;
  autoLogin: () => void;
}

const AccountRow: FC<AccountRowProps> = ({
  account,
  setModalType,
  toggleIsOpenModal,
  autoLogin,
}) => {
  const { environment, platform, accountId } = account;

  return (
    <Row>
      <S.EnvironmentWrapper type='row'>
        <EnvironmentLabel>{environment}</EnvironmentLabel>
      </S.EnvironmentWrapper>
      <S.PlatformWrapper type='row'>
        <PlatformLabel type={platform}>{platform}</PlatformLabel>
      </S.PlatformWrapper>
      <S.UserIdWrapper
        type='row'
        onClick={() => {
          setModalType('detail');
          toggleIsOpenModal();
        }}
      >
        {accountId}
      </S.UserIdWrapper>
      <S.ButtonWrapper>
        <IconButton
          onClick={() => {
            setModalType('modify');
            toggleIsOpenModal();
          }}
        >
          <FaPen />
        </IconButton>

        <IconButton
          onClick={() => {
            setModalType('delete');
            toggleIsOpenModal();
          }}
        >
          <FaTrash />
        </IconButton>

        <IconButton onClick={autoLogin}>
          <IoArrowRedo />
        </IconButton>

        <IconButton
          onClick={() => {
            setModalType('copy');
            toggleIsOpenModal();
          }}
        >
          <FaClipboard />
        </IconButton>
      </S.ButtonWrapper>
    </Row>
  );
};

export default AccountRow;
