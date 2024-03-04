import React, { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMovies } from 'services/api';
import s from './Movies.module.css'

import MovieTrendCard from 'components/MovieTrendCard/MovieTrendCard';


const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await fetchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };



  return (
    <div>
       
      <SearchForm onSearch={handleSearch} />
      <div className={s.wrapper}><ul className={s.wrapper}>
        {searchResults.map(movie => (
          <MovieTrendCard key={movie.id} movie={movie} />
        ))}
      </ul></div>
    </div>
  );
}

export default Movies;