import { styled, Autocomplete } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Section = styled('section')`
  margin: 0 200px;
  background-color: #fff;
  border-radius: 20px;
`;

export const SectionHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7eaf1;
`;

export const TabWrapper = styled(Tabs)`
  width: 50%;
  div > span {
    background-color: #00c17c;
    height: 4px;
  }
`;

export const ServiceTab = styled(Tab)`
  width: 33%;
  height: 60px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.25);
`;

export const EnvBtn = styled('div')`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 40px;
  color: #d1d1d1;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const FilterNavBar = styled('div')`
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

export const FiltersWrapper = styled('div')`
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
