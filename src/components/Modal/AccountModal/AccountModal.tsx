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

  const getModalInfo = () => {
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
  const { title, buttonText, isAdd, isDetail } = getModalInfo();

  console.log(isAdd);
  console.log(isDetail);
  return (
    <>
      {isShowModal && (
        <S.Wrapper onClick={closeModal}>
          <S.ModalContainer onClick={e => e.stopPropagation()}>
            <S.Title>{`계정 ${title}`}</S.Title>
            <S.EnvInput
              size='small'
              disablePortal
              id='combo-box-demo'
              options={environments.map(ele => ele.name)}
              disabled={!isAdd}
              renderInput={params => <TextField {...params} label='환경' variant='filled' />}
            />
            <S.AuthInputsContainer>
              <TextField disabled={isDetail} id='standard-basic' label='아이디' variant='filled' />
              <TextField
                disabled={isDetail}
                id='standard-basic'
                label='비밀번호'
                variant='filled'
              />
            </S.AuthInputsContainer>
            <textarea placeholder='상세 설명' disabled={isDetail} />
            <S.ButtonContainer>
              <button>{buttonText}</button>
            </S.ButtonContainer>
          </S.ModalContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default AccountModal;
