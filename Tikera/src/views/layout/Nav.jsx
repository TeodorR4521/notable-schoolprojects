import React, { useContext } from 'react'
import { FaTicket } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


export function Nav() {
  const days=['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="text-3xl text-[oklch(68.1%_0.162_75.834)] font-bold max-sm:text-4xl">

        <div className='navbar-start'>
          <div className='flex gap-3'>
            <FaTicket />
            <h1>Tikera</h1>
          </div>
        </div>

        <div className='navbar-center'>
          <div className='flex gap-4 max-xl:flex-wrap max-sm:flex-col'>

          {days.map((day) => (
            <NavLink
              key={day}
              to={`/${day}`}
              className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 border border-yellow-500 transition-colors duration-300 ease-in-out hover:scale-110 rounded'
            >
              <span>{day}</span>
            </NavLink>
          ))}

            </div>
          </div>
          <div className="navbar-end" />
      </div>
  )
}
