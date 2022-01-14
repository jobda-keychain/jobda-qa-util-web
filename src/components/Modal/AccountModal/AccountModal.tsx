import { TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import * as S from './style';
import { IEnvironmentFilter } from './../../../types/filter.types';

interface Props {
  isShowModal: boolean;
  closeModal: () => void;
  type: 'add' | 'modify' | 'detail';
}

const AccountModal: FC<Props> = ({ isShowModal, closeModal, type }) => {
  const [environments, setEnvironments] = useState<IEnvironmentFilter[]>([
    {
      id: 1,
      name: 'dv1',
    },
    {
      id: 2,
      name: 'st1',
    },
  ]);
  const isAdd = type === '추가';
  const isDetail = type === '상세보기';

  return (
    <>
      {isShowModal && (
        <S.Wrapper onClick={closeModal}>
          <S.ModalContainer onClick={e => e.stopPropagation()}>
            <S.Title>{`계정 ${type}`}</S.Title>
            <S.EnvInput
              size='small'
              disablePortal
              id='combo-box-demo'
              options={environments.map(ele => ele.name)}
              disabled={!isAdd}
              renderInput={params => <TextField {...params} label='환경' variant='filled' />}
            />
            <S.AuthInputsContainer>
              <TextField disabled={!isAdd} id='standard-basic' label='아이디' variant='filled' />
              <TextField disabled={!isAdd} id='standard-basic' label='비밀번호' variant='filled' />
            </S.AuthInputsContainer>
            <textarea placeholder='상세 설명' disabled={isDetail} />
            <S.ButtonContainer>
              <button>{type === '상세보기' ? '취소' : type}</button>
            </S.ButtonContainer>
          </S.ModalContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default AccountModal;
