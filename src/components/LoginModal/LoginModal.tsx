import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import { logo } from '../../assets/Main';
import * as S from './style';

const LoginModal: FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => setPw(e.target.value);

  const onChangeIsChecked = (e: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    setIsChecked(checked);
    console.log(checked);
  };

  return (
    <S.LoginModal>
      <S.DescriptionWrapper>
        <S.Logo src={logo} />
        <p>기업·면접·합격·역검까지</p>
        <S.MultipleDescriptionWrapper>
          <h3>
            <b>취업의 진짜 정보만 잡다!</b>
          </h3>
          <p>의 키체인 서비스</p>
        </S.MultipleDescriptionWrapper>
      </S.DescriptionWrapper>

      <div>
        <S.InputWrapper>
          <TextField label='아이디' variant='filled' value={id} onChange={onChangeId} />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField label='비밀번호' variant='filled' value={pw} onChange={onChangePw} />
        </S.InputWrapper>

        <FormControlLabel
          value={isChecked}
          onChange={onChangeIsChecked}
          control={<Checkbox />}
          label='자동로그인'
        />
      </div>

      <S.LoginModalButton>로그인</S.LoginModalButton>
    </S.LoginModal>
  );
};

export default LoginModal;
