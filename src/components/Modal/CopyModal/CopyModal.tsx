import { Alert, TextField } from '@mui/material';
import React, { FC } from 'react';
import useCopy from '../../../hooks/useCopy';
import { ModalButton } from '../../../style/Modal';
import * as S from './style';

interface CopyModalProps {
  id: number;
  onClose: () => void;
}

const CopyModal: FC<CopyModalProps> = ({ id, onClose }) => {
  const { format, errorMessage, onChangeFormat, copy } = useCopy(id, onClose);

  return (
    <S.CopyModal>
      <div>
        <h3>클립보드에 복사</h3>

        <S.HelpWrapper>
          <div>환경 - !(Env)</div>
          <div>아이디 - !(Id)</div>
          <div>비밀번호 - !(Pw)</div>
          <div>서비스 - !(Ser)</div>
        </S.HelpWrapper>
      </div>

      <TextField label='복사 양식' variant='filled' value={format} onChange={onChangeFormat} />

      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}

      <S.ButtonWrapper>
        <ModalButton onClick={copy}>복사</ModalButton>
      </S.ButtonWrapper>
    </S.CopyModal>
  );
};

export default CopyModal;
