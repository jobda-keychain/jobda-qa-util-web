import { TextField } from '@mui/material';
import { useState } from 'react';
import { EPlatform } from '../../lib/enum/platform';
import { ModalButton } from '../../style/Modal';
import ServiceRadio from '../ServiceRadio/ServiceRadio';
import * as S from './style';

interface EnvironmentModalProps {
  type: 'create' | 'modify';
  nameValue?: string;
  clientDomainValue?: string;
  serverDomainValue?: string;
  platformValue?: EPlatform;
}

const EnvironmentModal = ({
  type,
  nameValue,
  clientDomainValue,
  serverDomainValue,
  platformValue,
}: EnvironmentModalProps): JSX.Element => {
  const [name, setName] = useState(nameValue ?? '');
  const [clientDomain, setClientDomain] = useState(clientDomainValue ?? '');
  const [serverDomain, setServerDomain] = useState(serverDomainValue ?? '');
  const [platform, setPlatform] = useState(platformValue ?? EPlatform.JOBDA);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onChangeClientDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setClientDomain(e.target.value);
  };

  const onChangeServerDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setServerDomain(e.target.value);
  };

  const onChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value as EPlatform);
    setPlatform(e.target.value as EPlatform);
  };

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
