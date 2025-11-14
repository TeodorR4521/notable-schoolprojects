import React from 'react'

import movieData  from '../../assets/movies.json'
import Card from './Card'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import MovieContext from '../../context/MovieContext'

export function Cards(){
  let { day } = useParams()
  if (day == null){
    const date = new Date();
    day = date.toLocaleDateString('en-US',{weekday: 'long'});
  }
  const { setMovieId } = useContext(MovieContext)
  
  const actualMovies = movieData.filter((movie) =>
    movie.screenings.some((screen) => screen.weekday === day))
  
  return (
    actualMovies.map((movieObject,index) =>
    <div key={index}>
        <Card movie={movieObject} day={day} setMovieId={setMovieId}/>
    </div>
    )
  )
}

