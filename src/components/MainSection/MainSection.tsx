import { useMemo, useState } from 'react';
import * as S from './style';
import { setting } from '../../assets/Main';
import { MainFilter, PublicTab } from '..';
import AccountHeader from '../AccountList/AccountHeader';
import { IAccount } from '../../types/account.types';
import AccountRow from '../AccountList/AccoutRow';
import StyledPagination from '../PaginationButton/PaginationButton';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../style/Section';

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
    <SectionWrapper>
      <S.Header>
        <PublicTab />
        <S.EnvBtn to='/env-management'>
          <img src={setting} alt='' />
          <span>환경 관리</span>
        </S.EnvBtn>
      </S.Header>
      <MainFilter />

      <ListWrapper>
        <AccountHeader />
        <hr />
        {accountList}
      </ListWrapper>

      <PaginationtWrapper>
        <StyledPagination count={pageCount} />
      </PaginationtWrapper>
    </SectionWrapper>
  );
};

export default MainSection;
