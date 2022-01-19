import { Row } from '../../../style/Row';
import * as S from './style';
import React from 'react';

const AccountHeader = (): JSX.Element => {
  return (
    <Row>
      <S.EnvironmentWrapper type='header'>환경</S.EnvironmentWrapper>
      <S.PlatformWrapper type='header'>서비스</S.PlatformWrapper>
      <S.UserIdWrapper type='header'>아이디</S.UserIdWrapper>

      <S.ButtonWrapper>
        <div>수정</div>
        <div>삭제</div>
        <div>이동</div>
        <div>복사</div>
      </S.ButtonWrapper>
    </Row>
  );
};

export default AccountHeader;
