import React, { memo } from 'react';
import MainRouter from './route/MainRouter';
import GlobalStyle from './style/GlobalStyle';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <MainRouter />
    </>
  );
};

export default App;
