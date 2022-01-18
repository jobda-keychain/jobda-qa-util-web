import React, { useState } from 'react';
import * as S from './style';
import { deleteTag } from '../../../assets/Main';
import { IEnvironmentFilter } from '../../../types/filter.types';
import { TextField } from '@mui/material';

interface MainFilterProps {
  filters: IEnvironmentFilter[];
  setFilters: (filters: IEnvironmentFilter[]) => void;
  tabNumber: number;
}

const MainFilter: FC<MainFilterProps> = ({ filters, setFilters, tabNumber }) => {
  const [environments, setEnvironments] = useState<IEnvironmentFilter[]>([]);

  const addFilter = (value: IEnvironmentFilter) => {
    if (value && !filters.includes(value)) setFilters([...filters, value]);
  };

  const resetFilter = () => {
    setFilters([]);
  };

  const removeFilter = (id: number) => {
    setFilters(filters.filter(ele => ele.id !== id));
  };
  return (
    <S.Wrapper>
      <S.FilterInput
        size='small'
        onChange={(event, value) => {
          addFilter(value as IEnvironmentFilter);
        }}
        disablePortal
        id='combo-box-demo'
        options={environments}
        renderInput={params => <TextField {...params} label='필터 추가' />}
      />
      <S.ResetBtn onClick={resetFilter}>필터 초기화</S.ResetBtn>
      <S.FiltersBox>
        {filters.map(ele => {
          return (
            <div key={ele.id} onClick={() => removeFilter(ele.id)}>
              <span>{ele.label}</span>
              <img src={deleteTag} alt='' />
            </div>
          );
        })}
      </S.FiltersBox>
    </S.Wrapper>
  );
};

export default MainFilter;
