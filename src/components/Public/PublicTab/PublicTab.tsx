import React, { FC, useEffect, useState } from 'react';
import * as S from './style';

interface PublicTabProps {
  updateTab: (tabName: string | null) => void;
}

const PublicTab: FC<PublicTabProps> = ({ updateTab }) => {
  const [tabNumber, setTabNumber] = useState(0);

  const tabHandler = (event: React.SyntheticEvent, value: number) => {
    setTabNumber(value);
  };

  useEffect(() => {
    switch (tabNumber) {
      case 0:
        updateTab(null);
        break;
      case 1:
        updateTab('JOBDA');
        break;
      case 2:
        updateTab('JOBDA_CMS');
    }
  }, [tabNumber]);

  return (
    <S.Wrapper value={tabNumber} onChange={tabHandler}>
      <S.ServiceTab label='전체' />
      <S.ServiceTab label='jobda' />
      <S.ServiceTab label='jobda-cms' />
    </S.Wrapper>
  );
};

export default PublicTab;
