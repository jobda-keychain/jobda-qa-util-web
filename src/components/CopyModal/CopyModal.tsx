import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { ModalButton } from '../../style/Modal';
import * as S from './style';

const CopyModal = (): JSX.Element => {
  const [format, setFormat] = useState('');

  const onChangeFormat = (e: React.ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  return (
    <S.CopyModal>
      <div>
        <h3>클립보드에 복사</h3>

        <S.HelpWrapper>
          기본 값: '환경: !(Env) 아이디: !(Id) 비밀번호: !(Pw) 서비스: !(Ser)'
        </S.HelpWrapper>
      </div>

      <TextField
        id='filled-basic'
        label='환경'
        variant='filled'
        value={format}
        onChange={onChangeFormat}
      />

      <S.ButtonWrapper>
        <ModalButton>복사</ModalButton>
      </S.ButtonWrapper>
    </S.CopyModal>
  );
};

export default CopyModal;
