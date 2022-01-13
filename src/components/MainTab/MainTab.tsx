import React, { useState } from 'react';
import * as S from './style';

const MainTab = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const tabHandler = (event: React.SyntheticEvent, value: number) => {
    setTabNumber(value);
  };

  return (
    <S.Wrapper value={tabNumber} onChange={tabHandler}>
      <S.ServiceTab label='전체' />
      <S.ServiceTab label='jobda' />
      <S.ServiceTab label='jobda-cms' />
    </S.Wrapper>
  );
};

export default MainTab;
