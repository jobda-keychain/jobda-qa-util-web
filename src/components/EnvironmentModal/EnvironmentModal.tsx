import { TextField } from '@mui/material';
import { useState } from 'react';
import { ModalButton } from '../../style/Modal';
import { IEnvironment } from '../../types/environment.types';
import ServiceRadio from '../ServiceRadio/ServiceRadio';
import * as S from './style';

interface EnvironmentModalProps {
  type: 'create' | 'modify';
  value?: IEnvironment;
}

const EnvironmentModal = ({ type, value }: EnvironmentModalProps): JSX.Element => {
  const [name, setName] = useState(value?.name ?? '');
  const [clientDomain, setClientDomain] = useState(value?.clientDomain ?? '');
  const [serverDomain, setServerDomain] = useState(value?.serverDomain ?? '');
  const [platform, setPlatform] = useState(value?.platform ?? 0);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onChangeClientDomain = (e: React.ChangeEvent<HTMLInputElement>) =>
    setClientDomain(e.target.value);

  const onChangeServerDomain = (e: React.ChangeEvent<HTMLInputElement>) =>
    setServerDomain(e.target.value);

  const onChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPlatform(Number(e.target.value));

  return (
    <S.CopyModal>
      <h3>환경{type === 'create' ? '생성' : '수정'}</h3>

      <div>
        <S.MultipleInputWrapper count={2}>
          <TextField
            id='filled-basic'
            label='환경 이름'
            variant='filled'
            value={name}
            onChange={onChangeName}
          />
          <div>
            <ServiceRadio platform={platform} onChangePlatform={onChangePlatform} />
          </div>
        </S.MultipleInputWrapper>

        <S.InputWrapper>
          <TextField
            id='filled-basic'
            label='클라이언트 도메인'
            variant='filled'
            value={clientDomain}
            onChange={onChangeClientDomain}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            id='filled-basic'
            label='서버 도메인'
            variant='filled'
            value={serverDomain}
            onChange={onChangeServerDomain}
          />
        </S.InputWrapper>
      </div>

      <S.ButtonWrapper>
        <ModalButton>{type === 'create' ? '생성' : '수정'}</ModalButton>
      </S.ButtonWrapper>
    </S.CopyModal>
  );
};

export default EnvironmentModal;
