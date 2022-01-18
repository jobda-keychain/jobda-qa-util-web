import React, { FC, useState, useEffect } from 'react';
import * as S from './style';
import { deleteTag } from '../../../assets/Main';
import { IEnvironmentFilter } from '../../../types/filter.types';
import { TextField } from '@mui/material';
import { getEnvironmentList } from './../../../util/api/EnvironmentList/index';

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

  const fetchFilterList = async () => {
    try {
      let platform;
      switch (tabNumber) {
        case 1:
          platform = 'JOBDA';
          break;
        case 2:
          platform = 'JOBDA_CMS';
      }
      const res = await getEnvironmentList(platform);
      const environments = res.data.data.map(ele => ({
        id: ele.id,
        label: ele.name,
      }));
      setEnvironments(environments);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchFilterList();
  }, [tabNumber]);

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
