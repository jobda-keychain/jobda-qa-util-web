import React from 'react';
import { logo } from '../../assets/Main';
import * as S from './style';

const MainHeader = () => {
  return (
    <S.Wrapper>
      <S.Logo src={logo} alt='' />
      <S.BtnWrapper>
        <S.AddAccountBtn>계정 추가</S.AddAccountBtn>
      </S.BtnWrapper>
    </S.Wrapper>
  );
};

export default MainHeader;
