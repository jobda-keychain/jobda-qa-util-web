import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { logo } from '../../assets/Main';
import * as S from './style';

const PublicHeader = () => {
  const [isMainPage, setIsMainPage] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') setIsMainPage(false);
  }, [pathname]);

  return (
    <S.Wrapper>
      <S.Title>
        <S.Logo src={logo} alt='' />
        {isMainPage || <span>환경관리</span>}
      </S.Title>
      <S.BtnWrapper>
        {isMainPage ? <S.AddBtn>계정 추가</S.AddBtn> : <S.AddBtn>환경 추가</S.AddBtn>}
      </S.BtnWrapper>
    </S.Wrapper>
  );
};

export default PublicHeader;