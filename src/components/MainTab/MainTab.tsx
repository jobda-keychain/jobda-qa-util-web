import React, { useState } from 'react';
import * as S from './style';
import { StylesProvider } from '@mui/styles';
import { deleteTag, setting } from '../../assets/Main';
import { TextField } from '@mui/material';
import { IEnvironment } from './../../types/envs.types';

const MainTab = () => {
  const [value, setValue] = useState(0);
  const [environments, setEnvironments] = useState<IEnvironment[]>([
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

  const tabHandler = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  const addFilter = (event: React.SyntheticEvent, value: string) => {
    if (value && !filters.includes(value)) setFilters([...filters, value]);
  };

  const resetFilter = () => {
    setFilters([]);
  };

  const removeFilter = (name: string) => {
    setFilters(filters.filter(ele => ele !== name));
  };

  return (
    <StylesProvider injectFirst>
      <S.Section>
        <S.SectionHeader>
          <S.TabWrapper value={value} onChange={tabHandler}>
            <S.ServiceTab label='전체' />
            <S.ServiceTab label='jobda' />
            <S.ServiceTab label='jobda-cms' />
          </S.TabWrapper>
          <S.EnvBtn>
            <img src={setting} alt='' />
            <span>환경 관리</span>
          </S.EnvBtn>
        </S.SectionHeader>
        <S.FilterNavBar>
          <S.FilterInput
            size='small'
            onChange={(event, value) => {
              addFilter(event, value as string);
            }}
            disablePortal
            id='combo-box-demo'
            options={environments.map(ele => ele.name)}
            renderInput={params => <TextField {...params} label='필터 추가' />}
          />
          <S.ResetBtn onClick={resetFilter}>필터 초기화</S.ResetBtn>
          <S.FiltersWrapper>
            {filters.map(ele => {
              return (
                <div key={ele} onClick={() => removeFilter(ele)}>
                  <span>{ele}</span>
                  <img src={deleteTag} alt='' />
                </div>
              );
            })}
          </S.FiltersWrapper>
        </S.FilterNavBar>
      </S.Section>
    </StylesProvider>
  );
};

export default MainTab;
