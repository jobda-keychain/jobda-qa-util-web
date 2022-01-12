import { memo } from 'react';
import { MainHeader, MainTab } from '../../components';

const Main = (): JSX.Element => {
  return (
    <>
      <MainHeader />
      <MainTab />
    </>
  );
};

export default memo(Main);
