import React, { useContext } from 'react'
import  movieData  from '../../assets/movies.json'
import Screening from '../card/Screening'
import MovieContext from '../../context/MovieContext'

export function CardDetail(){
  const { movieId } = useContext(MovieContext)

  let movie = movieData.find(movie => movie.id == movieId);
  if (movie != null){
    return (
      <>
        <div className="card w-130 grid grid-cols-2">
            <figure>
                <img src={`images/${movie.image}`} className="w-full object-cover"/>
            </figure>
            <div className="card-body max-sm:text-lg">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.release_year}</p>
                <p>{movie.genre}</p>
                <p>{movie.duration} minutes</p>
                <p>{movie.description}</p>
            </div>
        </div>
        <div className='mt-8'>
          <Screening screenings={movie.screenings}/>
        </div>
      </>
    )
  }
}

export default CardDetail
