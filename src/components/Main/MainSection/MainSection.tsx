import { useState, useEffect } from 'react';
import * as S from './style';
import AccountRow from '../AccountList/AccoutRow';
import StyledPagination from '../../Public/PaginationButton/PaginationButton';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../../style/Section';
import { setting } from '../../../assets/Main';
import { MainFilter, PublicTab } from '../..';
import AccountHeader from '../AccountList/AccountHeader';
import { IAccount } from './../../../types/account.types';
import { getAccountList } from './../../../util/api/AccountList/index';
import { IEnvironmentFilter } from './../../../types/filter.types';

const MainSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [filters, setFilters] = useState<IEnvironmentFilter[]>([]);
  const [tabNumber, setTabNumber] = useState<number>(0);

  const getAccounts = async () => {
    try {
      let platform;
      switch (tabNumber) {
        case 0:
          platform = null;
          break;
        case 1:
          platform = 'JOBDA';
          break;
        case 2:
          platform = 'JOBDA_CMS';
      }
      const environment = filters.map(ele => ele.id).join(',');
      const res = await getAccountList(currentPage - 1, platform, environment);
      setAccounts(res.data.data);
      setPageCount(res.data.totalPages);
    } catch (err) {
      throw err;
    }
  };

  const pageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getAccounts();
  }, [tabNumber, filters]);

  return (
    <SectionWrapper>
      <S.Header>
        <PublicTab tabNumber={tabNumber} setTabNumber={setTabNumber} />
        <S.EnvBtn to='/env-management'>
          <img src={setting} alt='' />
          <span>환경 관리</span>
        </S.EnvBtn>
      </S.Header>
      {tabNumber !== 0 && (
        <MainFilter filters={filters} setFilters={setFilters} tabNumber={tabNumber} />
      )}
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
