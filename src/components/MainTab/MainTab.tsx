import React, { useState } from 'react';
import * as S from './style';

const MainTab = () => {
  const [value, setValue] = useState(0);

  const tabHandler = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <S.Wrapper value={value} onChange={tabHandler}>
      <S.ServiceTab label='전체' />
      <S.ServiceTab label='jobda' />
      <S.ServiceTab label='jobda-cms' />
    </S.Wrapper>
  );
};

export default MainTab;
