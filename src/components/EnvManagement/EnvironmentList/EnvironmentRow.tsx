import { PlatformLabel, EnvironmentLabel } from '../../../style/Labels';
import { FaPen, FaTrash } from 'react-icons/fa';
import { IEnvironment } from '../../../types/environment.types';
import { Row, RowButton } from '../../../style/Row';
import * as S from './style';
import { FC } from 'react';

interface EnvironmentRowProps {
  environment: IEnvironment;
  toggleIsOpenModifyModal: () => void;
  toggleIsOpenDeleteModal: () => void;
}

const EnvironmentRow: FC<EnvironmentRowProps> = ({
  environment,
  toggleIsOpenModifyModal,
  toggleIsOpenDeleteModal,
}) => {
  const { name, platform, clientDomain, serverDomain } = environment;

  return (
    <Row>
      <S.EnvironmentWrapper type='row'>
        <EnvironmentLabel>{name}</EnvironmentLabel>
      </S.EnvironmentWrapper>
      <S.PlatformWrapper type='row'>
        <PlatformLabel type={platform}>{platform}</PlatformLabel>
      </S.PlatformWrapper>
      <S.ServerDomainWrapper type='row'>
        <a href={clientDomain}>{clientDomain}</a>
      </S.ServerDomainWrapper>
      <S.ClientDomainWrapper type='row'>{serverDomain}</S.ClientDomainWrapper>

      <S.ButtonWrapper>
        <RowButton onClick={toggleIsOpenModifyModal}>
          <FaPen />
        </RowButton>
        <RowButton onClick={toggleIsOpenDeleteModal}>
          <FaTrash />
        </RowButton>
      </S.ButtonWrapper>
    </Row>
  );
};

export default EnvironmentRow;
