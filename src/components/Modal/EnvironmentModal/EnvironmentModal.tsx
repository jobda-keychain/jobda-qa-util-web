import { TextField, Alert } from '@mui/material';
import React, { FC, useEffect } from 'react';
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

  useEffect(() => {
    console.log(/(^https?:\/\/)/.test('https://romi'));
  });

  return (
    <S.ModalWrapper onSubmit={onClick}>
      <h3>환경{typeLabel}</h3>

      <S.InputFormWrapper>
        <S.MultipleInputWrapper count={2}>
          <TextField
            required
            name='name'
            label='환경 이름'
            variant='filled'
            value={environment.name}
            onChange={onChangeEnvironment}
            inputProps={{ maxLength: 10, minLength: 2 }}
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
            required
            name='clientDomain'
            label='클라이언트 도메인'
            variant='filled'
            placeholder='http:// https:// - 영어 대소문자, 숫자, @:%._+~#=/'
            value={environment.clientDomain}
            onChange={onChangeEnvironment}
            inputProps={{
              maxLength: 255,
              minLength: 2,
              pattern: 'https?://[-a-zA-Z0-9@:%._+~#=/]{2,255}',
            }}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            required
            name='serverDomain'
            label='서버 도메인'
            variant='filled'
            placeholder='http:// https:// - 영어 대소문자, 숫자, @:%._+~#=/'
            value={environment.serverDomain}
            onChange={onChangeEnvironment}
            inputProps={{
              maxLength: 255,
              minLength: 2,
              pattern: 'https?://[-a-zA-Z0-9@:%._+~#=/]{2,255}',
            }}
          />
        </S.InputWrapper>
      </S.InputFormWrapper>

      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}

      <S.ButtonWrapper>
        <ModalButton>{typeLabel}</ModalButton>
      </S.ButtonWrapper>
    </S.ModalWrapper>
  );
};

export default EnvironmentModal;
