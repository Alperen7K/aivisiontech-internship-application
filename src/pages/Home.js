import React from 'react'
import { FirstStack, Footer, NavBar, Section2, Section3, Section4 } from '../component'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => {
          navigate('/deneme')
        }}
      >
        denemeyegit
      </button>
      <NavBar />
      <FirstStack />
      {/* <Section2 /> */}
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  )
}
