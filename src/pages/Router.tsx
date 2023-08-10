import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './home/HomePage';
import BookListPage from './book-list/BookListPage';

const Router = () => {
  return (
    <Routes>         
      <Route path="/" element={<HomePage />} />
      <Route path="/list/:date/:list" element={<BookListPage />} />
    </Routes>
  )
}

export default Router;