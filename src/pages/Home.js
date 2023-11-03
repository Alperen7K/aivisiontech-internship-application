import React from 'react'
import { FirstStack, Footer, NavBar, Section2, Section3, Section4 } from '../component'

export const Home = () => {
  return (
    <div>
      <NavBar />
      <FirstStack />
      {/* <Section2 /> */}
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  )
}
