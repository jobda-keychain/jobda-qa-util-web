import { useState } from 'react';
import * as S from './style';
import { PublicTab } from '../..';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../../style/Section';
import StyledPagination from '../../Public/PaginationButton/PaginationButton';
import { IEnvironment } from '../../../types/environment.types';
import EnvironmentRow from '../EnvironmentList/EnvironmentRow';
import EnvironmentHeader from '../EnvironmentList/EnvironmentHeader';

const EnvSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [environments, setEnvironments] = useState<IEnvironment[]>([]);
  const [tabNumber, setTabNumber] = useState<number>(0);

  const pageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <SectionWrapper>
      <S.TabBox>
        <PublicTab tabNumber={tabNumber} setTabNumber={setTabNumber} />
      </S.TabBox>
      <ListWrapper>
        <EnvironmentHeader />
        <hr />
        {environments.map(environment => (
          <div key={environment.id}>
            <EnvironmentRow environment={environment} />
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

export default EnvSection;
