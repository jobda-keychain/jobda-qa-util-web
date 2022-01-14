import { TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { IEnvironmentFilter } from './../../../types/filter.types';

interface Props {
  isShowModal: boolean;
  closeModal: () => void;
  type: string;
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
  const [texts, setTexts] = useState({
    title: '',
    buttonText: '',
    isAdd: false,
    isDetail: false,
  });
  const { title, buttonText, isAdd, isDetail } = texts;

  useEffect(() => {
    switch (type) {
      case 'add':
        setTexts({
          ...texts,
          title: '추가',
          buttonText: '추가',
          isAdd: true,
        });
        break;
      case 'modify':
        setTexts({
          ...texts,
          title: '수정',
          buttonText: '수정',
        });
        break;
      case 'detail':
        setTexts({
          ...texts,
          title: '상세보기',
          buttonText: '닫기',
          isDetail: true,
        });
    }
  }, []);

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
              disabled={type !== 'add'}
              renderInput={params => <TextField {...params} label='환경' variant='filled' />}
            />
            <S.AuthInputsContainer>
              <TextField disabled={!isAdd} id='standard-basic' label='아이디' variant='filled' />
              <TextField disabled={!isAdd} id='standard-basic' label='비밀번호' variant='filled' />
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
