import { TextField } from '@mui/material';
import { FC } from 'react';
import useEnvironmentModal from '../../../hooks/useEnvironmentModal';
import { ModalButton } from '../../../style/Modal';
import { IEnvironment } from '../../../types/environment.types';
import ServiceRadio from '../../EnvManagement/ServiceRadio/ServiceRadio';
import * as S from './style';

interface EnvironmentModalProps {
  type: 'create' | 'modify';
  environmentValue?: IEnvironment;
  onClose: () => void;
}

const EnvironmentModal: FC<EnvironmentModalProps> = ({
  type,
  environmentValue,
  onClose,
}): JSX.Element => {
  const { environment, onChangeEnvironment, onClickCreateEnvironment, onClickModifyEnvironment } =
    useEnvironmentModal(onClose, environmentValue);

  const onClick = type === 'create' ? onClickCreateEnvironment : onClickModifyEnvironment;
  const typeLabel = type === 'create' ? '생성' : '수정';

  return (
    <S.EnvironmentModal>
      <h3>환경{typeLabel}</h3>

      <div>
        <S.MultipleInputWrapper count={2}>
          <TextField
            name='name'
            label='환경 이름'
            variant='filled'
            value={environment.name}
            onChange={onChangeEnvironment}
          />
          <div>
            <ServiceRadio
              disabled={type === 'modify'}
              platform={environment.platform}
              onChangePlatform={onChangeEnvironment}
            />
          </div>
        </S.MultipleInputWrapper>

        <S.InputWrapper>
          <TextField
            name='clientDomain'
            label='클라이언트 도메인'
            variant='filled'
            value={environment.clientDomain}
            onChange={onChangeEnvironment}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            name='serverDomain'
            label='서버 도메인'
            variant='filled'
            value={environment.serverDomain}
            onChange={onChangeEnvironment}
          />
        </S.InputWrapper>
      </div>

      <S.ButtonWrapper>
        <ModalButton onClick={onClick}>{typeLabel}</ModalButton>
      </S.ButtonWrapper>
    </S.EnvironmentModal>
  );
};

export default EnvironmentModal;
