import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import x from '../assets/x.svg'
import turkey from '../assets/turkey.png'
import unitedKingdom from '../assets/united-kingdom.png'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  const [isTurkish, setIsTurkish] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const Options = ['ANASAYFA', 'HAKKIMIZDA', 'ÜRÜN', 'FOTOĞRAFLAR VE VİDEOLAR', 'HABERLER', 'İLETİŞİM', 'BLOG', 'TAKIM']

  return (
    <>
      <div className="sticky top-0 z-30 backdrop-blur-sm h-[100px] lg:h-[125px] w-full bg-[#0036a1] flex items-center justify-center  font-bold">
        <div className="h-full sm:w-[98vw] w-full flex  items-center justify-around xl:justify-between">
          <img src={logo} alt="Logo" className="w-[150px] lg:mt-10 xl:mt-0 sm:w-[180px] lg:w-[200px] 2xl:w-[250px] hover:scale-[1.1] delay-100 duration-300" />

          <div className="hidden lg:flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between">
            <div className=" lg:block text-white">
              {Options.map((opt) => {
                return <label className="mx-2 xl:mx-3 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">{opt}</label>
              })}
            </div>
            <div className="flex justify-end ">
              <div className="w-[55px] h-[26px] mr-[15px] mb-4 xl:mb-0 xl:ml-4  lg:flex items-center justify-between bg-black/50 rounded-[12px] hover:scale-[1.1] delay-100 duration-300">
                <img
                  onClick={() => {
                    setIsTurkish(true)
                  }}
                  className={`w-[25px] hover:scale-[1.08] delay-100 duration-300 ${isTurkish ? '' : 'brightness-50'}`}
                  src={turkey}
                />
                <img
                  onClick={() => {
                    setIsTurkish(false)
                  }}
                  className={`w-[25px] hover:scale-[1.08] delay-100 duration-300 ${isTurkish ? 'brightness-50' : ''}`}
                  src={unitedKingdom}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mr-4 lg:hidden">
            <div className="w-[45px] sm:w-[55px] h-[21px] sm:h-[26px] mr-[15px] flex items-center justify-between bg-black/50 rounded-[12px] hover:scale-[1.1] delay-100 duration-300">
              <img
                onClick={() => {
                  setIsTurkish(true)
                }}
                className={`w-[20px] sm:w-[25px] hover:scale-[1.08] delay-100 duration-300 ${isTurkish ? '' : 'brightness-50'}`}
                src={turkey}
              />
              <img
                onClick={() => {
                  setIsTurkish(false)
                }}
                className={`w-[20px] sm:w-[25px] hover:scale-[1.08] delay-100 duration-300 ${isTurkish ? 'brightness-50' : ''}`}
                src={unitedKingdom}
              />
            </div>
            <div className="block  " onClick={() => setIsNavOpen(true)}>
              <img src={menu} className="h-6 sm:h-7" />
            </div>
          </div>
          <div className="absolute  top-0 right-0 ">
            {isNavOpen === true ? (
              <div className=" h-screen w-screen bg-[#000033]/90 backdrop-blur sm:hidden" onClick={() => setIsNavOpen(false)}>
                <div className="flex h-screen flex-col items-center justify-center text-xl text-white">
                  {Options.map((opt, index) => {
                    return (
                      <>
                        <NavLink className="p-5  drop-shadow-xl duration-200 hover:text-white/100">{opt}</NavLink>
                        {index == 7 ? '' : <hr class=" border-1   white:bg-white w-52"></hr>}
                      </>
                    )
                  })}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}
