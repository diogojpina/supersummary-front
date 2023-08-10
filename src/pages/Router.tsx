import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './home/HomePage';

const Router = () => {
  return (
    <Routes>         
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default Router;