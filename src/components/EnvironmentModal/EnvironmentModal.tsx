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

  const onChangeEnvironment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnvironment({
      ...environment,
      [e.target.name]: e.target.value,
    });

  const typeLabel = useMemo(() => (type === 'create' ? '생성' : '수정'), [type]);

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
            <ServiceRadio platform={environment.platform} onChangePlatform={onChangeEnvironment} />
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
        <ModalButton>{typeLabel}</ModalButton>
      </S.ButtonWrapper>
    </S.EnvironmentModal>
  );
};

export default EnvironmentModal;
