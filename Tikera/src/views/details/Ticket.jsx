import React, { useContext } from 'react'
import TicketContext from '../../context/TicketContext'

export function Ticket({ type }) {
  const { ticketCounts, setTicketCounts, ticketPrices } = useContext(TicketContext)
  const quantity = ticketCounts[type] || 0
  const amount = ticketPrices[type] || 0

  function handleIncrement() {
    setTicketCounts(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }))
  }

  function handleDecrease() {
    setTicketCounts(prev => ({
      ...prev,
      [type]: Math.max(prev[type] - 1, 0)
    }))
  }

  return (
    <div>
      <form className="max-w-xs mx-auto">
        <label
          htmlFor="quantity-input"
          className="block mb-2 text-sm font-medium text-gray-900 text-white max-sm:text-lg"
        >
          {type}
          <p className='text-gray-400'>{amount} Ft:</p>
        </label>
        <div className="relative flex max-w-[8rem]">
          <button
            type="button"
            onClick={() => handleDecrease()}
            className="bg-gray-100 bg-gray-700 text-center hover:bg-gray-600 border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11"
          >
            -
          </button>
          <input
            type="text"
            id="quantity-input"
            className="bg-gray-50 border-gray-300 h-11 text-center text-gray-900 text-sm block w-full bg-gray-700 border-gray-600 text-white"
            value={quantity}
            readOnly
          />
          <button
            type="button"
            onClick={() => handleIncrement()}
            className="bg-gray-100 bg-gray-700 text-center hover:bg-gray-600 border-gray-600 bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11"
          >
            +
          </button>
        </div>
      </form>
    </div>
  )
}

export default Ticket
