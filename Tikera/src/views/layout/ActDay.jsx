import React from 'react'
import { useParams } from 'react-router-dom'

function ActDay(){
  let { day } = useParams();
  if (day == null){
    const date = new Date();
    day = date.toLocaleDateString('en-US',{weekday: 'long'});
  }
  return (
    <span className="text-4xl bg-yellow-500 text-black font-bold py-2 px-4 border border-yellow-500 rounded max-sm:text-5xl font-bold">{day}</span>
  )
}

export default ActDay
