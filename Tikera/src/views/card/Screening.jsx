import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ScreeningContext from '../../context/ScreeningContext'
import SeatsContext from '../../context/SeatsContext'

function Screening({ screenings }){
  let { day } = useParams()
  if (day == null){
      const date = new Date();
      day = date.toLocaleDateString('en-US',{weekday: 'long'})
  }
  const { setScreeningId } = useContext(ScreeningContext)
  const { setSeats } = useContext(SeatsContext)

  return (
    <div>
      <div className='inline-block'>
                  {screenings
                    .filter(m => m.weekday === day)
                    .map((m, index) => (
                    <button key={index} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 border border-yellow-500 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:scale-110' onClick={() => {setScreeningId(m.id), setSeats([])}}>{m.start_time}</button>
                ))}
        </div>
    </div>
  )
}

export default Screening
