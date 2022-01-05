import React, { memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './page/NotFound';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default memo(App);
