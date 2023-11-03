import React, { useContext } from 'react'
import Marquee from 'react-fast-marquee'
import basin1 from '../assets/basin-1.png'
import basin2 from '../assets/basin-2.png'
import { UiContext } from '../context'

export const Section4 = () => {
  const { text, setText } = useContext(UiContext)

  let imageClass = 'h-[300px] md:h-[400px] lg:h-[500px] px-2 rounded-[15px] '
  let imageContainerClass = 'border-solid border-l-2 border-white'
  return (
    <div className="my-10">
      <div className="bg-[#0036a1]">
        <h1 className="py-2 text-white text-center border-solid border-b-2  border-white ">~ {text.pressName} ~</h1>

        <Marquee pauseOnHover={true} className="p-4 ">
          <div className={imageContainerClass}>
            <img className={imageClass} src={basin1} />
          </div>
          <div className={imageContainerClass}>
            <img className={imageClass} src={basin2} />
          </div>
          <div className={imageContainerClass}>
            <img className={imageClass} src={basin1} />
          </div>
          <div className={imageContainerClass}>
            <img className={imageClass} src={basin2} />
          </div>
          <div className={imageContainerClass}>
            <img className={imageClass} src={basin1} />
          </div>
          <div className={imageContainerClass}>
            <img className={imageClass} src={basin2} />
          </div>
          <div className={imageContainerClass}>
            <img className={imageClass} src={basin1} />
          </div>
          <div className={imageContainerClass}>
            <img className={imageClass} src={basin2} />
          </div>
        </Marquee>
      </div>
    </div>
  )
}
