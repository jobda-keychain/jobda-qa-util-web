import React from 'react';
import * as S from './style';
import { PublicTab } from '..';

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
