import React from 'react';
import { PublicTab } from '../..';
import * as S from './style';

const EnvSection = () => {
  return (
    <S.Wrapper>
      <S.TabBox>
        <PublicTab />
      </S.TabBox>
    </S.Wrapper>
  );
};

export default EnvSection;
