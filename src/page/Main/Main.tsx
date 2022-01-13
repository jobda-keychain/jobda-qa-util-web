import { memo } from 'react';
import { PublicHeader, MainSection } from '../../components';

const Main = (): JSX.Element => {
  return (
    <>
      <PublicHeader />
      <MainSection />
    </>
  );
};

export default memo(Main);
