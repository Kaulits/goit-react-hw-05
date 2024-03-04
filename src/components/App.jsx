import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import Layout from './Layout';
import '../index.css'
import MovieCard from 'pages/MovieCard/MovieCard';


export const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='/:id' element={<MovieCard />} />
      
      </Route>
        <Route path='*' element={<NotFound/>} />
     </Routes>
    </div>
  );
};
