import { TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { EnvironmentFilter } from './../../../types/filter.types';
import { getEnvironmentList } from './../../../util/api/EnvironmentList/index';
import { addAccount, getDetail, modifyAccount } from './../../../util/api/Account/index';
import { AxiosError } from 'axios';
import { EnvironmentOptionsType } from './../../../models/vo/index';

type AccountModalType = 'add' | 'modify' | 'detail';

interface Props {
  type: AccountModalType;
  onClose: () => void;
  id?: number;
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

const AccountModal: FC<Props> = ({ type, onClose, id }) => {
  const [environments, setEnvironments] = useState<EnvironmentFilter[]>([]);
  const [environmentValue, setEnvironmentValue] = useState<EnvironmentOptionsType | null>(null);
  const [inputs, setInputs] = useState({
    userId: '',
    password: '',
    description: '',
  });
  const { userId, password, description } = inputs;
  const { title, buttonText, isAdd, isDetail } = getModalInfo(type);

  const fetchFilterList = async () => {
    try {
      const res = await getEnvironmentList();
      const environments = res.data.data.map(ele => ({
        id: ele.id,
        label: `${ele.name}(${ele.platform})`,
      }));
      setEnvironments(environments);
    } catch (err) {
      throw err;
    }
  };

  const gettingDetailInfo = async () => {
    getDetail(id)
      .then(res => {
        setInputs({
          userId: res.data.userId,
          password: res.data.password,
          description: res.data.description,
        });
      })
      .catch(err => {
        throw err;
      });
  };

  const addingAccount = async () => {
    try {
      await addAccount({
        ...inputs,
        environmentId: environmentValue && environmentValue.id,
      });
      console.log('계정이 성공적으로 생성되었습니다.');
      onClose();
    } catch (err: unknown) {
      switch ((err as AxiosError).response?.status) {
        case 400:
          console.log('빈칸이 있는지 확인해주세요.');
          break;
        case 401:
          console.log('존재하는 계정인지 확인해주세요.');
          break;
      }
    }
  };

  const modifyingAccount = async () => {
    try {
      await modifyAccount(
        {
          ...inputs,
        },
        id,
      );
      console.log('계정이 성공적으로 수정되었습니다.');
      onClose();
    } catch (err: unknown) {
      switch ((err as AxiosError).response?.status) {
        case 400:
          console.log('빈칸이 있는지 확인해주세요.');
          break;
        case 401:
          console.log('존재하는 계정인지 확인해주세요.');
          break;
      }
    }
  };

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    switch (type) {
      case 'add':
        addingAccount();
        break;
      case 'modify':
        modifyingAccount();
        break;
      case 'detail':
        onClose();
    }
  };

  const onInputsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchFilterList();
  }, []);

  useEffect(() => {
    if (type !== 'add') gettingDetailInfo();
  }, [type]);

  return (
    <S.ModalContainer>
      <form onSubmit={onSubmitHandler}>
        <S.Title>{`계정 ${title}`}</S.Title>
        <S.EnvInput
          value={environmentValue}
          onChange={(event, value) => {
            setEnvironmentValue(value as EnvironmentOptionsType);
          }}
          size='small'
          disablePortal
          id='combo-box-demo'
          options={environments}
          disabled={!isAdd}
          renderInput={params => <TextField {...params} label='환경' variant='filled' required />}
        />
        <S.AuthInputsContainer>
          <TextField
            required
            name='userId'
            value={userId}
            onChange={onInputsChange}
            disabled={isDetail}
            id='standard-basic'
            label='아이디'
            variant='filled'
            inputProps={{ maxLength: 20, minLength: 2 }}
          />
          <TextField
            required
            name='password'
            value={password}
            onChange={onInputsChange}
            disabled={isDetail}
            id='standard-basic'
            label='비밀번호'
            variant='filled'
            inputProps={{ maxLength: 20, minLength: 2 }}
          />
        </S.AuthInputsContainer>
        <textarea
          name='description'
          value={description}
          onChange={onInputsChange}
          placeholder='상세 설명'
          disabled={isDetail}
        />
        <S.ButtonContainer>
          <button>{buttonText}</button>
        </S.ButtonContainer>
      </form>
    </S.ModalContainer>
  );
};

export default AccountModal;
