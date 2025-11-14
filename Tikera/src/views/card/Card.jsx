import React from 'react'

export function Card({ movie, setMovieId }){ 
  
  return (
    <div className="card w-50 shadow-sm max-sm:w-60">
        <figure>
            <img src={`images/${movie.image}`} onClick={() => setMovieId(movie.id)}/>
        </figure>
        <div className="card-body max-sm:text-xl">
            <h2 className="card-title max-sm:text-2xl">{movie.title}</h2>
                <p>{movie.genre}</p>
                <p>{movie.duration} minutes</p>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
  )
}

export default Card
