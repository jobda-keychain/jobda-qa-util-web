import { FaClipboard, FaPen, FaTrash } from 'react-icons/fa';
import { IoArrowRedo } from 'react-icons/io5';
import { IAccount } from '../../types/account.types';
import { Row, RowButton } from '../../style/Row';
import { PlatformLabel, EnvironmentLabel } from '../../style/Labels';
import * as S from './style';
import { FC } from 'react';

interface AccountRowProps {
  value: IAccount;
}

const AccountRow: FC<AccountRowProps> = ({ value }) => {
  const { environment, platform, userId } = value;

  return (
    <Row>
      <S.EnvironmentWrapper type='row'>
        <EnvironmentLabel>{environment}</EnvironmentLabel>
      </S.EnvironmentWrapper>
      <S.PlatformWrapper type='row'>
        <PlatformLabel type={platform}>{platform}</PlatformLabel>
      </S.PlatformWrapper>
      <S.UserIdWrapper type='row'>{userId}</S.UserIdWrapper>

      <S.ButtonWrapper>
        <RowButton>
          <FaPen />
        </RowButton>
        <RowButton>
          <FaTrash />
        </RowButton>
        <RowButton>
          <IoArrowRedo />
        </RowButton>
        <RowButton>
          <FaClipboard />
        </RowButton>
      </S.ButtonWrapper>
    </Row>
  );
};

export default AccountRow;
