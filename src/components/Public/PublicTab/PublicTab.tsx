import React, { FC } from 'react';
import { ActionInterface } from '../../../types/action.types';
import * as S from './style';

interface PublicTabProps {
  tabNumber: number;
  dispatch: (action: ActionInterface) => void;
}

const PublicTab: FC<PublicTabProps> = ({ tabNumber, dispatch }) => {
  const tabHandler = (event: React.SyntheticEvent, value: number) => {
    dispatch({
      type: 'CHANGE_TAB',
      payload: {
        value,
      },
    });
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
