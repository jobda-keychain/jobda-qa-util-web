import { TextField } from '@mui/material';
import React, { FC } from 'react';
import useCopy from '../../../hooks/useCopy';
import { ModalButton } from '../../../style/Modal';
import * as S from './style';

interface CopyModalProps {
  id: number;
  onClose: () => void;
}

const CopyModal: FC<CopyModalProps> = ({ id, onClose }) => {
  const { format, onChangeFormat, copy } = useCopy(id, onClose);

  return (
    <S.CopyModal>
      <div>
        <h3>클립보드에 복사</h3>

        <S.HelpWrapper>
          기본 값: '환경: !(Env) 아이디: !(Id) 비밀번호: !(Pw) 서비스: !(Ser)'
        </S.HelpWrapper>
      </div>

      <TextField label='환경' variant='filled' value={format} onChange={onChangeFormat} />

      <S.ButtonWrapper>
        <ModalButton onClick={copy}>복사</ModalButton>
      </S.ButtonWrapper>
    </S.CopyModal>
  );
};

export default CopyModal;
