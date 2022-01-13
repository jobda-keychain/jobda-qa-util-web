import React, { useMemo, useState } from 'react';
import * as S from './style';
import { setting } from '../../assets/Main';
import { MainFilter, PublicTab } from '..';
import AccountHeader from '../AccountList/AccountHeader';
import { IAccount } from '../../types/account.types';
import AccountRow from '../AccountList/AccoutRow';
import { EPlatform } from '../../lib/enum/platform';

const MainSection = () => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  const accountList = useMemo(
    () =>
      accounts.map(account => (
        <>
          <AccountRow key={account.id} value={account} />
          <hr />
        </>
      )),
    [accounts],
  );

  return (
    <S.Wrapper>
      <S.Header>
        <PublicTab />
        <S.EnvBtn to='/env-management'>
          <img src={setting} alt='' />
          <span>환경 관리</span>
        </S.EnvBtn>
      </S.Header>
      <MainFilter />

      <S.ListWrapper>
        <AccountHeader />
        <hr />
        {accountList}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default MainSection;
