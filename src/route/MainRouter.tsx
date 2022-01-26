import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import EnvManagement from '../page/EnvManagement/EnvManagement';
import Main from '../page/Main/Main';
import NotFound from '../page/NotFound/NotFound';

const MainRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/env-management' element={<EnvManagement />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default MainRouter;
