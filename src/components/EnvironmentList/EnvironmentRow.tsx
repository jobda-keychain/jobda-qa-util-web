import { PlatformLabel, EnvironmentLabel } from '../../style/Labels';
import { FaPen, FaTrash } from 'react-icons/fa';
import { IEnvironment } from '../../types/environment.types';
import { Row, RowButton } from '../../style/Row';
import * as S from './style';
import { FC } from 'react';

interface EnvironmentRowProps {
  value: IEnvironment;
}

const EnvironmentRow: FC<EnvironmentRowProps> = ({ value }) => {
  const { name, platform, clientDomain, serverDomain } = value;

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
        <RowButton>
          <FaPen />
        </RowButton>
        <RowButton>
          <FaTrash />
        </RowButton>
      </S.ButtonWrapper>
    </Row>
  );
};

export default EnvironmentRow;
