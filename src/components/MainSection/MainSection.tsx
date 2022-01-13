import React from 'react';
import * as S from './styles';
import { setting } from '../../assets/Main';
import { MainFilter, PublicTab } from '..';

const MainSection = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <PublicTab />
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
