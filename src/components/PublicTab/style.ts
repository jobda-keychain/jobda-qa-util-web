import { styled } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Wrapper = styled(Tabs)`
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
