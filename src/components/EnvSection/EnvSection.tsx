import { useMemo, useState } from 'react';
import * as S from './style';
import { PublicTab } from '..';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../style/Section';
import StyledPagination from '../PaginationButton/PaginationButton';
import { IEnvironment } from '../../types/environment.types';
import EnvironmentRow from '../EnvironmentList/EnvironmentRow';
import EnvironmentHeader from '../EnvironmentList/EnvironmentHeader';
import { EPlatform } from '../../lib/enum/platform';

const EnvSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [environments, setEnvironments] = useState<IEnvironment[]>([]);

  return (
    <SectionWrapper>
      <S.TabBox>
        <PublicTab />
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
        <StyledPagination count={pageCount} />
      </PaginationtWrapper>
    </SectionWrapper>
  );
};

export default EnvSection;
