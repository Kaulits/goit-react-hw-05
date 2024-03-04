import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import Layout from './Layout';
import '../index.css'


export const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
      </Route>
        <Route path='*' element={<NotFound/>} />
     </Routes>
    </div>
  );
};
