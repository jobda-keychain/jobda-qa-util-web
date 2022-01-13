import { TextField } from '@mui/material';
import { useState } from 'react';
import { ModalButton } from '../../style/Modal';
import ServiceRadio from '../ServiceRadio/ServiceRadio';
import * as S from './style';

const EnvironmentModal = (): JSX.Element => {
  const [name, setName] = useState('');
  const [clientDomain, setClientDomain] = useState('');
  const [serverDomain, setServerDomain] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onChangeClientDomain = (e: React.ChangeEvent<HTMLInputElement>) =>
    setClientDomain(e.target.value);

  const onChangeServerDomain = (e: React.ChangeEvent<HTMLInputElement>) =>
    setServerDomain(e.target.value);

  return (
    <S.CopyModal>
      <h3>환경생성</h3>

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
            <ServiceRadio />
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
        <ModalButton>생성</ModalButton>
      </S.ButtonWrapper>
    </S.CopyModal>
  );
};

export default EnvironmentModal;
