import { useMemo, useState } from 'react';
import * as S from './style';
import { PublicTab } from '..';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../style/Section';
import StyledPagination from '../PaginationButton/PaginationButton';
import { IEnvironment } from '../../types/environment.types';
import EnvironmentRow from '../EnvironmentList/EnvironmentRow';
import EnvironmentHeader from '../EnvironmentList/EnvironmentHeader';

const EnvSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [environments, setEnvironments] = useState<IEnvironment[]>([]);

  const environmentList = useMemo(
    () =>
      environments.map(environment => (
        <div key={environment.id}>
          <EnvironmentRow value={environment} />
          <hr />
        </div>
      )),
    [environments],
  );

  return (
    <SectionWrapper>
      <S.TabBox>
        <PublicTab />
      </S.TabBox>

      <ListWrapper>
        <EnvironmentHeader />
        <hr />
        {environmentList}
      </ListWrapper>

      <PaginationtWrapper>
        <StyledPagination count={pageCount} />
      </PaginationtWrapper>
    </SectionWrapper>
  );
};

export default EnvSection;
