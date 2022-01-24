import React, { memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EnvManagement from '../page/EnvManagement/EnvManagement';
import Main from '../page/Main/Main';
import NotFound from '../page/NotFound/NotFound';

const MainRouter = () => {
  return (
    <BrowserRouter basename='/jobda-qa-util-web'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/env-management' element={<EnvManagement />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(MainRouter);
