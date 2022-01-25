import { Alert, TextField } from '@mui/material';
import React, { FC } from 'react';
import useCopy from '../../../hooks/useCopy';
import { ModalButton } from '../../../style/Modal';
import * as S from './style';

interface CopyModalProps {
  id: number;
}

const CopyModal: FC<CopyModalProps> = ({ id }) => {
  const { format, successMessage, errorMessage, onChangeFormat, copy } = useCopy(id);

  return (
    <S.ModalWrapper onSubmit={copy}>
      <div>
        <h3>클립보드에 복사</h3>

        <S.HelpWrapper>
          <div>환경 - !(Env)</div>
          <div>아이디 - !(Id)</div>
          <div>비밀번호 - !(Pw)</div>
          <div>서비스 - !(Ser)</div>
        </S.HelpWrapper>
      </div>

      <TextField
        required
        label='복사 양식'
        variant='filled'
        value={format}
        onChange={onChangeFormat}
      />

      {successMessage && <Alert severity='success'>{successMessage}</Alert>}

      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}

      <S.ButtonWrapper>
        <ModalButton>복사</ModalButton>
      </S.ButtonWrapper>
    </S.ModalWrapper>
  );
};

export default CopyModal;
