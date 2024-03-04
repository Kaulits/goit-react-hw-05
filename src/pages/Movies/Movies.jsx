import React, { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchMovies } from 'services/api';
import s from './Movies.module.css'

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
          <li  className={s.genrelist} key={movie.id}> <img className={s.poster} src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`} alt={movie.title} />{movie.title}</li>
        ))}
      </ul></div>
    </div>
  );
}

export default Movies;
