import { React, useContext } from 'react'
import { Armchair } from 'lucide-react' 
import SeatsContext from '../../context/SeatsContext'

export function Seat({ booked, index, allTickets, setDisplayBookedMessage}){
    const { seats, setSeats } = useContext(SeatsContext)
    const numberOfBooked = seats.length

    const isSelected = seats.some(seat => seat[0] == index[0] && seat[1] == index[1])
    const color = booked === 'red' ? 'red' : isSelected ? 'yellow' : 'white'

    function handleOnClick(){
        if (booked == 'red'){
            setDisplayBookedMessage("This seat is already booked!")
        }
        else if (isSelected){
            const newSeats = seats.filter(seat => !(seat[0] === index[0] && seat[1] === index[1]))
            setSeats(newSeats)
        }
        else if (numberOfBooked < allTickets){
            setSeats([...seats, index])
        }
    }
    
  return (
    <>
        <Armchair size={36} color={color} onClick={handleOnClick} className={'max-sm:size-12'}/>
    </>
  )
}

export default Seat