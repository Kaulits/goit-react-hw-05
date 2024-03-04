import React from 'react'
import s from './MovieTrendCard.module.css'
import { Link } from 'react-router-dom'

const MovieTrendCard = ({ movie: { title = 'Default Title', id, poster_path } }) => {
  return (
    <div className={s.wrapper}>
      <Link to={id.toString()}><li className={s.filmlist} key={id}>{title} <img className={s.poster}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`
              }
              alt={title}
            /></li></Link>
    </div>
  )
}

export default MovieTrendCard
