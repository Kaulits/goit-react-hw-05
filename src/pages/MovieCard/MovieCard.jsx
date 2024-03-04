import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from 'services/api'
import s from './MovieCard.module.css'

const MovieCard = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)

    console.log(error);

    useEffect(( )=> {
        fetchMovieDetails(id)
            .then(data => setMovie(data))
            .catch(err => setError(err.message))
    }, [id])
    
    if (!movie) {
        return <h1>Loading...</h1>
}

    
    
    return (
    <div className={s.wrapper}>
            
            <img className={s.poster} src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`} alt={movie.title} />
           <div className={s.about}> <h2>{movie.title}</h2>
            <p>User Score: {(movie.popularity / 100)?.toFixed(0)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={s.genrelist}>  {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}</ul></div>
           
    </div>
  )
}

export default MovieCard
