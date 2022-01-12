import React from 'react';
import * as S from './styles';
import { deleteTag, setting } from '../../assets/Main';
import { MainHeader, MainTab } from '..';
import MainFilter from './../MainFilter/MainFilter';

const MainSection = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <MainTab />
        <S.EnvBtn>
          <img src={setting} alt='' />
          <span>환경 관리</span>
        </S.EnvBtn>
      </S.Header>
      <MainFilter />
    </S.Wrapper>
  );
};

export default MainSection;
