import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled('section')`
  margin: 0 200px;
  background-color: #fff;
  border-radius: 20px;
`;

export const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7eaf1;
`;

export const EnvBtn = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 40px;
  color: #d1d1d1;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;

export const ListWrapper = styled.div`
  padding: 0px 40px;
`;
