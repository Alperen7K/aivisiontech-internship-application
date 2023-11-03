import React from 'react'
import bebek from '../assets/baby.jpeg'
import bebek2 from '../assets/baby2.jpg'

export const Section2 = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly w-full">
        <img src={bebek} className="w-[40vw]" />
        <img src={bebek2} className="w-[40vw]" />
      </div>
    </div>
  )
}
