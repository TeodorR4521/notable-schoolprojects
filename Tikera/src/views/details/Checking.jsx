import React, { useContext } from 'react'
import TicketContext from '../../context/TicketContext'
import MovieContext from '../../context/MovieContext'
import SeatsContext from '../../context/SeatsContext'
import ScreeningContext from '../../context/ScreeningContext'

function Checking({}){
  const { screeningId } = useContext(ScreeningContext)
  const { movieId, movies, setMovies } = useContext(MovieContext)
  const { seats, setSeats } = useContext(SeatsContext)
  const { ticketCounts, ticketPrices } = useContext(TicketContext)
  const movie = movies.find(movie => movie.id == movieId)
  const screening = movie?.screenings.find(screening => screening.id == screeningId)
  
  const total = Object.keys(ticketCounts).reduce((sum, type) => {
     return sum + ticketCounts[type] * ticketPrices[type];
  }, 0);


  function checkingBooked() {
    const updatedMovies = [...movies];
    const newMovieIndex = updatedMovies.findIndex(m => m.id === movieId);
    const newScreeningIndex = updatedMovies[newMovieIndex].screenings.findIndex(s => s.id === screeningId);
  
    const currentScreening = updatedMovies[newMovieIndex].screenings[newScreeningIndex];
  
    if (!currentScreening.bookings) {
      currentScreening.bookings = [];
    }
  
    currentScreening.bookings.push(...seats.map(([row, seat]) => ({ row, seat })));
    
    setMovies(updatedMovies);
    setSeats([]);
  }

  if (screening != null){
    return (
      <div>
        <p className="mt-4 flex items-baseline">
          <span className="text-3xl font-semibold text-white">{movie.title}</span>
        </p>
        <p className="text-lg text-gray-300 max-sm:text-2xl">{screening.weekday}</p>
        <p className="text-lg text-gray-300 max-sm:text-2xl">{screening.start_time}</p>
        <ul className="text-sm/6 text-gray-300 mt-10 max-sm:text-lg">

        {Object.entries(ticketCounts).map(([type, count]) => (
            <p key={type}>{type} {ticketPrices[type]} Ft: {count} db</p>
        ))}
        <hr></hr>
        <li className='block mt-2'>
            {seats.map(seat => <p key={`${seat[0]}-${seat[1]}`} className='flex'>Row: {seat[0]} Seat: {seat[1]} </p>)}
        </li>
        </ul>
        <p className="mt-4 flex justify-between gap-x-2 w-100">
          <span className="text-2xl font-semibold text-white">Total: {total} Ft</span>
          <a onClick={checkingBooked} className="rounded-md bg-[oklch(68.1%_0.162_75.834)] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[oklch(50%_0.162_75.834)] sm:mt-10 cursor-pointer transition-colors duration-300 ease-in-out hover:scale-110">Complete Booking</a>
        </p>
      </div>
    )
  }
}

export default Checking
