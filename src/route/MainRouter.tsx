import React, { memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../page/Main/Main';
import NotFound from '../page/NotFound/NotFound';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*'} element={<NotFound />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(MainRouter);
