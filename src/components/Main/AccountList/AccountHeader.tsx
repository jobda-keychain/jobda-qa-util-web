import { Row } from '../../../style/Row';
import * as S from './style';
import React from 'react';

const AccountHeader = (): JSX.Element => {
  return (
    <Row>
      <S.EnvironmentWrapper type='header'>환경</S.EnvironmentWrapper>
      <S.PlatformWrapper type='header'>서비스</S.PlatformWrapper>
      <S.UserIdHeaderWrapper type='header'>아이디</S.UserIdHeaderWrapper>

      <S.ButtonTextWrapper>
        <div>수정</div>
        <div>삭제</div>
        <div>이동</div>
        <div>복사</div>
      </S.ButtonTextWrapper>
    </Row>
  );
};

export default AccountHeader;
