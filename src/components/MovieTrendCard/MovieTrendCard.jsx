import React from 'react'
import s from './MovieTrendCard.module.css'

const MovieTrendCard = (movie) => {
  return (
    <div className={s.wrapper}>
      <li className={s.filmlist} key={movie.id}>{movie.title} <img className={s.poster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`
              }
              alt={movie.title}
            /></li>
    </div>
  )
}

export default MovieTrendCard
