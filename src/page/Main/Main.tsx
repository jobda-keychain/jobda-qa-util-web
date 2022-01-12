import { memo } from 'react';
import { MainHeader, MainSection } from '../../components';

const Main = (): JSX.Element => {
  return (
    <>
      <MainHeader />
      <MainSection />
    </>
  );
};

export default memo(Main);
