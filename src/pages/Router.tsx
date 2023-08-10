import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './home/HomePage';
import BookListPage from './book-list/BookListPage';
import BookPage from './book/BookPage';

const Router = () => {
  return (
    <Routes>         
      <Route path="/" element={<HomePage />} />
      <Route path="/list/:date/:list" element={<BookListPage />} />
      <Route path="/book/:list" element={<BookPage />} />
    </Routes>
  )
}

export default Router;