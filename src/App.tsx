import React, { memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main/Main';
import NotFound from './page/NotFound/NotFound';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default memo(App);
