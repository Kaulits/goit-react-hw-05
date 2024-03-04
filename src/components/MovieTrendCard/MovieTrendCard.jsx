import React from 'react';
import { Link } from 'react-router-dom';
import s from './MovieTrendCard.module.css';

const MovieTrendCard = ({ movie }) => {
  return (
    <div className={s.card}>
      <Link to={`/movie/${movie.id}`} className={s.link}>
        <img
          src={movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`}
          alt={movie.title}
          className={s.poster}
        />
        <h2 className={s.title}>{movie.title}</h2>
      </Link>
    </div>
  );
};

export default MovieTrendCard;