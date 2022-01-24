import { TextField, Alert } from '@mui/material';
import React, { FC } from 'react';
import useEnvironmentModal from '../../../hooks/useEnvironmentModal';
import { ModalButton } from '../../../style/Modal';
import { Environment } from '../../../types/environment.types';
import ServiceRadio from '../../EnvManagement/ServiceRadio/ServiceRadio';
import * as S from './style';

interface EnvironmentModalProps {
  type: 'create' | 'modify';
  environmentValue?: Environment;
  onClose: () => void;
  refresh?: () => void;
}

const EnvironmentModal: FC<EnvironmentModalProps> = ({
  type,
  environmentValue,
  onClose,
  refresh,
}): JSX.Element => {
  const {
    environment,
    errorMessage,
    onChangeEnvironment,
    onClickCreateEnvironment,
    onClickModifyEnvironment,
  } = useEnvironmentModal(onClose, refresh, environmentValue);

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
            inputProps={{ maxLength: 10, minLength: 2, pattern: '^(http|https)://' }}
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
            inputProps={{ maxLength: 255, minLength: 2, pattern: '^(http|https)://' }}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            name='serverDomain'
            label='서버 도메인'
            variant='filled'
            value={environment.serverDomain}
            onChange={onChangeEnvironment}
            inputProps={{ maxLength: 255, minLength: 2 }}
          />
        </S.InputWrapper>
      </div>

      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}

      <S.ButtonWrapper>
        <ModalButton onClick={onClick}>{typeLabel}</ModalButton>
      </S.ButtonWrapper>
    </S.EnvironmentModal>
  );
};

export default EnvironmentModal;
