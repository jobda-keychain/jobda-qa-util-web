import { PlatformLabel, EnvironmentLabel } from '../../style/Labels';
import { FaPen, FaTrash } from 'react-icons/fa';
import { IEnvironment } from '../../types/environment.types';
import { Row, RowButton } from '../../style/Row';
import * as S from './style';

interface EnvironmentRowProps {
  value: IEnvironment;
}

const EnvironmentRow = ({ value }: EnvironmentRowProps): JSX.Element => {
  return (
    <Row>
      <S.EnvironmentWrapper type='row'>
        <EnvironmentLabel>{value.name}</EnvironmentLabel>
      </S.EnvironmentWrapper>
      <S.PlatformWrapper type='row'>
        <PlatformLabel type={value.platform}>{value.platform}</PlatformLabel>
      </S.PlatformWrapper>
      <S.ServerDomainWrapper type='row'>
        <a href={value.clientDomain}>{value.clientDomain}</a>
      </S.ServerDomainWrapper>
      <S.ClientDomainWrapper type='row'>{value.serverDomain}</S.ClientDomainWrapper>

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
