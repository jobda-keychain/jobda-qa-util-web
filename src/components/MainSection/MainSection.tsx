import React from 'react';
import * as S from './styles';
import { setting } from '../../assets/Main';
import { MainFilter, PublicTab } from '..';
import { useNavigate } from 'react-router-dom';

const MainSection = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Header>
        <PublicTab />
        <S.EnvBtn onClick={() => navigate('/env-management')}>
          <img src={setting} alt='' />
          <span>환경 관리</span>
        </S.EnvBtn>
      </S.Header>
      <MainFilter />
    </S.Wrapper>
  );
};

export default MainSection;
