import React, { FC } from 'react';
import * as S from './style';

interface PublicTabProps {
  tabNumber: number;
  setTabNumber: (tabNumber: number) => void;
}

const PublicTab: FC<PublicTabProps> = ({ tabNumber, setTabNumber }) => {
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

export default PublicTab;
