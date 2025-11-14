import React, {useState} from 'react'
import { Nav } from './Nav'
import { Cards } from '../card/Cards'
import CardDetail from '../details/CardDetail'
import { Tickets } from '../details/Tickets'
import { Booking } from '../details/Booking'
import Checking from '../details/Checking'
import ActDay from './ActDay'
import TicketContext from '../../context/TicketContext'
import MovieContext from '../../context/MovieContext'
import ScreeningContext from '../../context/ScreeningContext'
import SeatsContext from '../../context/SeatsContext'
import  movieData  from '../../assets/movies.json'

const Menu = () => {
  const [screeningId, setScreeningId] =  useState(null)
  const [movieId, setMovieId] =  useState(null)


  const [seats, setSeats] = useState([]);
  const [movies, setMovies] = useState(movieData)

  const [ticketCounts, setTicketCounts] = useState({
    'Student': 0,
    'Adult': 0,
    'Senior': 0
  })
  const ticketPrices = {
    'Student': 2500,
    'Adult': 2000,
    'Senior': 1800
  }
  
  return (
    <SeatsContext.Provider value={{ seats, setSeats }}>
      <MovieContext.Provider value={{ movieId, setMovieId, movies, setMovies }}>
        <ScreeningContext.Provider value={{ screeningId, setScreeningId }}>
          <TicketContext.Provider value={{ ticketCounts, setTicketCounts, ticketPrices }}>
            <div>      
                <Nav/>  
                <ActDay/>
                <div className='grid grid-cols-2 grid-cols-2 max-2xl:grid-cols-1'>
                  <div className='grid grid-cols-4 gap-0 w-210 max-2xl:grid-cols-3 max-sm:grid-cols-1 mt-5'>
                      <Cards/>
                  </div>
                  <div className='min-xl:ml-30'>
                    <CardDetail/>
                    <div className='grid grid-cols-2 mt-5 max-sm:grid-cols-1 max-sm:text-2xl'>
                        <Tickets/>
                        <Booking/>
                        <Checking/>
                    </div>
                  </div>
                </div>
            </div>
          </TicketContext.Provider>
        </ScreeningContext.Provider>
      </MovieContext.Provider>
    </SeatsContext.Provider>
  )
}

export default Menu
