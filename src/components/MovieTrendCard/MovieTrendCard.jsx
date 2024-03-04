import React from 'react';
import { Link } from 'react-router-dom';
import s from './MovieTrendCard.module.css';


const MovieTrendCard = ({ movie: { title = 'Default Title', id, poster_path } }) => {

  return (
    <div className={s.card}>
      <Link to={`/movie/${id}`} className={s.link}>
        <img
          src={poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`}
          alt={title}
          className={s.poster}
        />
        <h2 className={s.title}>{title}</h2>
      </Link>
    </div>
  );
};

export default MovieTrendCard;