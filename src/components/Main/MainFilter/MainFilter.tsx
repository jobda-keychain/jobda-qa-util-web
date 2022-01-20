import React, { FC, useState, useEffect } from 'react';
import * as S from './style';
import { deleteTag } from '../../../assets/Main';
import { TextField } from '@mui/material';
import { getFilterList } from '../../../util/api/Account';
import { EnvironmentOptionsType } from './../../../models/vo/index';

interface MainFilterProps {
  filters: EnvironmentOptionsType[];
  setFilters: (filters: EnvironmentOptionsType[]) => void;
  tabNumber: number;
}

const MainFilter: FC<MainFilterProps> = ({ filters, setFilters, tabNumber }) => {
  const [environments, setEnvironments] = useState<EnvironmentOptionsType[]>([]);
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const [filterInputValue, setFilterInputValue] = useState('');

  const addFilter = (value: EnvironmentOptionsType) => {
    setFilterValue(null);
    setFilterInputValue('');
    if (value && !filters.includes(value)) {
      setFilters([...filters, value]);
    }
  };

  const removeFilter = (id: number) => {
    setFilters(filters.filter(ele => ele.id !== id));
  };

  const resetFilter = () => {
    setFilters([]);
  };

  const inputHandler = (e: React.SyntheticEvent, value: string) => {
    setFilterValue(value);
  };

  const inputChange = (e: React.SyntheticEvent, value: string) => {
    setFilterInputValue(value);
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
      const res = await getFilterList(platform);
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
    resetFilter();
    setFilterValue(null);
    fetchFilterList();
  }, [tabNumber]);

  return (
    <S.Wrapper>
      <S.FilterInput
        size='small'
        value={filterValue}
        onChange={(event, value) => {
          inputHandler(event, value as string);
          addFilter(value as EnvironmentOptionsType);
        }}
        inputValue={filterInputValue}
        onInputChange={inputChange}
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
