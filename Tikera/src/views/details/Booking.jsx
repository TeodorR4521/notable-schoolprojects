import React, { useState, useContext, useEffect  } from 'react'
import { Seat } from './Seat'
import TicketContext from '../../context/TicketContext'
import MovieContext from '../../context/MovieContext'
import SeatsContext from '../../context/SeatsContext'
import ScreeningContext from '../../context/ScreeningContext'

export function Booking(){
  const { ticketCounts } = useContext(TicketContext)
  const { screeningId } = useContext(ScreeningContext)
  const { movieId, movies } = useContext(MovieContext)
  const { seats } = useContext(SeatsContext)

  const [displayBookedMessage, setDisplayBookedMessage] = useState('');

  const numberOfBooked = seats.length
  const allTickets = Object.values(ticketCounts).reduce((a, b) => a + b, 0)
  
  const movie = movies.find(movie => movie.id == movieId)
  const screening = movie?.screenings.find(screening => screening.id == screeningId)
  
  useEffect(() => {
    setDisplayBookedMessage('');
  }, [seats]); 

  if (screening != null){
    return (
      <div className='max-sm:mt-10'>
        {numberOfBooked < allTickets ? <h1>Number of selected seats: {numberOfBooked}/{allTickets}</h1> : <h1>You can't choose more seats</h1>}
        {
          [...Array(screening.room.rows)].map((_, i) => (
            <div key={i} className='flex gap-1'>
              {
                [...Array(screening.room.seatsPerRow)].map((_, j) => { 
                  const isBooked = screening.bookings.some(book => book.row === i+1 && book.seat === j+1);
                  return (
                    <Seat key={j} booked={isBooked ? 'red' : 'white'} index={[i+1,j+1]} allTickets={allTickets} setDisplayBookedMessage={setDisplayBookedMessage}/>
                  );
                })
              }
            </div>
          ))
        }

        <span className='block text-xl text-red-500'>{displayBookedMessage}</span>

      </div>
    )
  }
}

export default Booking
