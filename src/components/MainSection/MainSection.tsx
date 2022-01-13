import { useMemo, useState } from 'react';
import * as S from './style';
import { setting } from '../../assets/Main';
import { MainFilter, PublicTab } from '..';
import AccountHeader from '../AccountList/AccountHeader';
import { IAccount } from '../../types/account.types';
import AccountRow from '../AccountList/AccoutRow';
import StyledPagination from '../PaginationButton/PaginationButton';

const MainSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  const accountList = useMemo(
    () =>
      accounts.map(account => (
        <div key={account.id}>
          <AccountRow value={account} />
          <hr />
        </div>
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

      <S.PaginationtWrapper>
        <StyledPagination count={pageCount} />
      </S.PaginationtWrapper>
    </S.Wrapper>
  );
};

export default MainSection;
