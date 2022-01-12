import React, { useState } from 'react';
import * as S from './style';
import { StylesProvider } from '@mui/styles';
import { deleteTag, setting } from '../../assets/Main';
import { TextField } from '@mui/material';
import { IEnvs } from './../../types/envs.types';

const MainTab = () => {
  const [value, setValue] = useState<Number>(0);
  const [envs, setEnvs] = useState<IEnvs[]>([
    {
      id: 1,
      name: 'dv1',
    },
    {
      id: 2,
      name: 'st1',
    },
  ]);
  const [filters, setFilters] = useState<any[]>([]);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  const onChange = (event: React.SyntheticEvent, value: any) => {
    if (value && !filters.includes(value)) {
      setFilters([...filters, value]);
    }
  };

  const onReset = () => {
    setFilters([]);
  };

  const removeFilter = (id: Number) => {
    setFilters(filters.filter(ele => ele.id !== id));
  };

  return (
    <StylesProvider injectFirst>
      <S.Section>
        <S.SectionHeader>
          <S.TabWrapper value={value} onChange={handleChange}>
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
              onChange(event, value);
            }}
            disablePortal
            id='combo-box-demo'
            options={envs}
            renderInput={params => <TextField {...params} label='필터 추가' />}
          />
          <S.ResetBtn onClick={onReset}>필터 초기화</S.ResetBtn>
          <S.FiltersWrapper>
            {filters.map(ele => {
              return (
                <div onClick={() => removeFilter(ele.id)}>
                  <span key={ele.id}>{ele.name}</span>
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
