import { FaClipboard, FaPen, FaTrash } from 'react-icons/fa';
import { IoArrowRedo } from 'react-icons/io5';
import { Account } from '../../../types/account.types';
import { Row, RowButton } from '../../../style/Row';
import { PlatformLabel, EnvironmentLabel } from '../../../style/Labels';
import * as S from './style';
import { FC } from 'react';
import { AccountModalType } from '../../../types/modal.types';

interface AccountRowProps {
  account: Account;
  setModalType: (modalType: AccountModalType) => void;
  toggleIsOpenModal: () => void;
}

const AccountRow: FC<AccountRowProps> = ({ account, setModalType, toggleIsOpenModal }) => {
  const { environment, platform, userId } = account;

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
        {userId}
      </S.UserIdWrapper>

      <S.ButtonWrapper>
        <RowButton
          onClick={() => {
            setModalType('modify');
            toggleIsOpenModal();
          }}
        >
          <FaPen />
        </RowButton>
        <RowButton
          onClick={() => {
            setModalType('delete');
            toggleIsOpenModal();
          }}
        >
          <FaTrash />
        </RowButton>
        <RowButton>
          <IoArrowRedo />
        </RowButton>
        <RowButton>
          <FaClipboard
            onClick={() => {
              setModalType('copy');
              toggleIsOpenModal();
            }}
          />
        </RowButton>
      </S.ButtonWrapper>
    </Row>
  );
};

export default AccountRow;
