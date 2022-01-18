import { TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import * as S from './style';
import { EnvironmentFilter } from './../../../types/filter.types';

type AccountModalType = 'add' | 'modify' | 'detail';

interface Props {
  type: AccountModalType;
  onClose?: () => void;
}

const getModalInfo = (type: AccountModalType) => {
  switch (type) {
    case 'add':
      return {
        title: '추가',
        buttonText: '추가',
        isAdd: true,
        isDetail: false,
      };
    case 'modify':
      return {
        title: '수정',
        buttonText: '수정',
        isAdd: false,
        isDetail: false,
      };
    case 'detail':
      return {
        title: '상세보기',
        buttonText: '닫기',
        isAdd: false,
        isDetail: true,
      };
  }
};

const onClickHandler = (type: AccountModalType, onClose: () => void) => {
  switch (type) {
    case 'add':
      break;
    case 'modify':
      break;
    case 'detail':
      onClose();
  }
};

const AccountModal: FC<Props> = ({ type, onClose }) => {
  const [environments, setEnvironments] = useState<EnvironmentFilter[]>([
    {
      id: 1,
      label: 'dv1',
    },
    {
      id: 2,
      label: 'st1',
    },
  ]);
  const { title, buttonText, isAdd, isDetail } = getModalInfo(type);

  return (
    <S.ModalContainer>
      <S.Title>{`계정 ${title}`}</S.Title>
      <S.EnvInput
        size='small'
        disablePortal
        id='combo-box-demo'
        options={environments}
        disabled={!isAdd}
        renderInput={params => <TextField {...params} label='환경' variant='filled' />}
      />
      <S.AuthInputsContainer>
        <TextField disabled={isDetail} id='standard-basic' label='아이디' variant='filled' />
        <TextField disabled={isDetail} id='standard-basic' label='비밀번호' variant='filled' />
      </S.AuthInputsContainer>
      <textarea placeholder='상세 설명' disabled={isDetail} />
      <S.ButtonContainer>
        <button onClick={() => onClickHandler(type, () => onClose)}>{buttonText}</button>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
};

export default AccountModal;
