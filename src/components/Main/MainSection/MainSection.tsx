import { useState } from 'react';
import * as S from './style';
import AccountRow from '../AccountList/AccoutRow';
import StyledPagination from '../../Public/PaginationButton/PaginationButton';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../../style/Section';
import { setting } from '../../../assets/Main';
import { MainFilter, PublicTab } from '../..';
import AccountHeader from '../AccountList/AccountHeader';
import { IAccount } from './../../../types/account.types';

const MainSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [filters, setFilters] = useState<IEnvironmentFilter[]>([]);
  const pageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

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
        <MainFilter filters={filters} setFilters={setFilters} tabNumber={tabNumber} />
      <ListWrapper>
        <AccountHeader />
        <hr />
        {accounts.map(account => (
          <div key={account.id}>
            <AccountRow account={account} />
            <hr />
          </div>
        ))}
      </ListWrapper>
      <PaginationtWrapper>
        <StyledPagination page={currentPage} onChange={pageHandler} count={pageCount} />
      </PaginationtWrapper>
    </SectionWrapper>
  );
};

export default MainSection;
