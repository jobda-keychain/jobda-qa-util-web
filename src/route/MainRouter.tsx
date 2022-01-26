import React, { lazy, Suspense } from 'react
import { HashRouter, Routes, Route } from 'react-router-dom';

const Main = lazy(() => import('../page/Main/Main'));
const EnvManagement = lazy(() => import('../page/EnvManagement/EnvManagement'));
const NotFound = lazy(() => import('../page/NotFound/NotFound'));

const MainRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/env-management' element={<EnvManagement />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default MainRouter;
