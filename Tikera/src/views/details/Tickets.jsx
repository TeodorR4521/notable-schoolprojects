import React, { useContext } from 'react'
import Ticket from './Ticket'
import MovieContext from '../../context/MovieContext'
import ScreeningContext from '../../context/ScreeningContext'

export function Tickets(){
  const {movies, movieId } = useContext(MovieContext)
  const { screeningId } = useContext(ScreeningContext)

  const movie = movies.find(movie => movie.id == movieId)
  const screening = movie?.screenings.find(screening => screening.id == screeningId)
  
  if (screening != null){
    return (
      <div>
          <Ticket type='Student'/>
          <Ticket type='Adult'/>
          <Ticket type='Senior'/>
      </div>
      )
    }
  }


export default Tickets
