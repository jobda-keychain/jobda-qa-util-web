import { styled, Autocomplete } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  padding: 20px 40px;
`;

export const FilterInput = styled(Autocomplete)`
  width: 20%;
  height: 40px;
  margin-right: 15px;
`;

export const ResetBtn = styled('span')`
  color: #c93b3b;
  font-size: 16px;
  cursor: pointer;
`;

export const FiltersBox = styled('div')`
  width: 60%;
  display: flex;
  gap: 20px;
  margin-left: 30px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    background-color: #f0f0f0;
    font-size: 16px;
    cursor: pointer;
  }
`;
