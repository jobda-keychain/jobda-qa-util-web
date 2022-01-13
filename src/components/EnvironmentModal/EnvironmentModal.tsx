import { TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import { EPlatform } from '../../lib/enum/platform';
import { ModalButton } from '../../style/Modal';
import { IEnvironment } from '../../types/environment.types';
import ServiceRadio from '../ServiceRadio/ServiceRadio';
import * as S from './style';

interface EnvironmentModalProps {
  type: 'create' | 'modify';
  value?: IEnvironment;
}

const EnvironmentModal = ({ type, value }: EnvironmentModalProps): JSX.Element => {
  const [environment, setEnvironment] = useState(
    value ?? {
      id: 0,
      name: '',
      serverDomain: '',
      clientDomain: '',
      platform: EPlatform.JOBDA,
    },
  );

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnvironment({
      ...environment,
      name: e.target.value,
    });

  const onChangeClientDomain = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnvironment({
      ...environment,
      clientDomain: e.target.value,
    });

  const onChangeServerDomain = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnvironment({
      ...environment,
      serverDomain: e.target.value,
    });

  const onChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnvironment({
      ...environment,
      platform: e.target.value as EPlatform,
    });

  const typeLabel = useMemo(() => (type === 'create' ? '생성' : '수정'), [type]);

  return (
    <S.CopyModal>
      <h3>환경{typeLabel}</h3>

      <div>
        <S.MultipleInputWrapper count={2}>
          <TextField
            id='filled-basic'
            label='환경 이름'
            variant='filled'
            value={environment.name}
            onChange={onChangeName}
          />
          <div>
            <ServiceRadio platform={environment.platform} onChangePlatform={onChangePlatform} />
          </div>
        </S.MultipleInputWrapper>

        <S.InputWrapper>
          <TextField
            id='filled-basic'
            label='클라이언트 도메인'
            variant='filled'
            value={environment.clientDomain}
            onChange={onChangeClientDomain}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            id='filled-basic'
            label='서버 도메인'
            variant='filled'
            value={environment.serverDomain}
            onChange={onChangeServerDomain}
          />
        </S.InputWrapper>
      </div>

      <S.ButtonWrapper>
        <ModalButton>{typeLabel}</ModalButton>
      </S.ButtonWrapper>
    </S.CopyModal>
  );
};

export default EnvironmentModal;
