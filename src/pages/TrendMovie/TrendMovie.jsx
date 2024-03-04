import MovieCard from 'components/MovieTrendCard/MovieTrendCard'
import React, { useEffect, useState } from 'react'
import { fetchTrending } from 'services/api'
import s from './TrendMovies.module.css'

const TrendMovies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrending()
      .then(data => setMovies(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      {error ? (
        <p>Failed to fetch data: {error}</p>
      ) : (
        <div className={s.wrapper}>
          {movies && movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendMovies
