import React, { useState } from 'react';
import * as S from './style';
import { deleteTag } from '../../assets/Main';
import { IEnvironmentFilter } from '../../types/filter.types';
import { TextField } from '@mui/material';

const MainFilter = () => {
  const [environments, setEnvironments] = useState<IEnvironmentFilter[]>([
    {
      id: 1,
      name: 'dv1',
    },
    {
      id: 2,
      name: 'st1',
    },
  ]);

  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (value: string) => {
    if (value && !filters.includes(value)) setFilters([...filters, value]);
  };

  const resetFilter = () => {
    setFilters([]);
  };

  const removeFilter = (name: string) => {
    setFilters(filters.filter(ele => ele !== name));
  };
  return (
    <S.Wrapper>
      <S.FilterInput
        size='small'
        onChange={(event, value) => {
          addFilter(value as string);
        }}
        disablePortal
        id='combo-box-demo'
        options={environments.map(ele => ele.name)}
        renderInput={params => <TextField {...params} label='필터 추가' />}
      />
      <S.ResetBtn onClick={resetFilter}>필터 초기화</S.ResetBtn>
      <S.FiltersBox>
        {filters.map(ele => {
          return (
            <div key={ele} onClick={() => removeFilter(ele)}>
              <span>{ele}</span>
              <img src={deleteTag} alt='' />
            </div>
          );
        })}
      </S.FiltersBox>
    </S.Wrapper>
  );
};

export default MainFilter;
