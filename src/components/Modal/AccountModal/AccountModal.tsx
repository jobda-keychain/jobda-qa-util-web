import { TextField, Alert } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { EnvironmentOptionsType } from './../../../models/vo/index';
import { addAccount, getDetail, getFilterList } from '../../../util/api/Account';
import { modifyAccount } from './../../../util/api/Account/index';
import handleAxiosError from '../../../util/api/handleAxiosError';

type AccountModalType = 'add' | 'modify' | 'detail';

interface Props {
  type: AccountModalType;
  onClose: () => void;
  id?: number;
  getAccounts?: () => void;
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

const AccountModal: FC<Props> = ({ type, onClose, id, getAccounts }) => {
  const [environments, setEnvironments] = useState<EnvironmentOptionsType[]>([]);
  const [environmentValue, setEnvironmentValue] = useState<EnvironmentOptionsType | null>(null);
  const [inputs, setInputs] = useState({
    accountId: '',
    password: '',
    description: '',
  });
  const { accountId, password, description } = inputs;
  const { title, buttonText, isAdd, isDetail } = getModalInfo(type);

  const [errorMessage, setErrorMessage] = useState('');

  const fetchFilterList = async () => {
    try {
      const res = await getFilterList();
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
        setEnvironmentValue(res.data.environment);
        setInputs({
          accountId: res.data.accountId,
          password: res.data.password,
          description: res.data.description,
        });
      })
      .catch(err => {
        throw err;
      });
  };

  const addingAccount = async () => {
    handleAxiosError(
      async () => {
        await addAccount({
          ...inputs,
          environmentId: environmentValue && environmentValue.id,
        });
        window.location.reload();
      },
      {
        400: '아이디는 2~20자, 비밀번호는 2~20자, 설명은 0~100자로 입력해주세요.',
        401: '존재하지 않는 계정입니다.',
        409: '환경, 서비스, 아이디가 중복됩니다.',
      },
      setErrorMessage,
    );
  };

  const modifyingAccount = async () => {
    handleAxiosError(
      async () => {
        await modifyAccount(
          {
            ...inputs,
          },
          id,
        );
        onClose();
        if (getAccounts) getAccounts();
      },
      {
        400: '아이디는 2~20자, 비밀번호는 2~20자, 설명은 0~100자로 입력해주세요.',
        401: '존재하지 않는 계정입니다.',
        409: '환경, 서비스, 아이디가 중복됩니다.',
      },
      setErrorMessage,
    );
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
          isOptionEqualToValue={(option, value) =>
            (option as EnvironmentOptionsType).id === (value as EnvironmentOptionsType).id
          }
          disabled={!isAdd}
          renderInput={params => <TextField {...params} label='환경' variant='filled' required />}
        />
        <S.AuthInputsContainer>
          <TextField
            required
            name='userId'
            value={accountId}
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
          maxLength={100}
        />

        {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}

        <S.ButtonContainer>
          <button>{buttonText}</button>
        </S.ButtonContainer>
      </form>
    </S.ModalContainer>
  );
};

export default AccountModal;
