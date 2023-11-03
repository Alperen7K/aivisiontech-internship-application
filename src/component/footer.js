import React, { useContext } from 'react'
import logo from '../assets/logo.svg'
import { UiContext } from '../context'

export const Footer = () => {
  const { text, setText } = useContext(UiContext)

  let labelCss = 'text-center'
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#0036a1] to-[#0756c5ac] text-white">
      <img className="w-[200px] lg:w-[400px] my-6" src={logo} />
      <div className="flex flex-col lg:flex-row items-center justify-around w-full px-10">
        <div className="flex flex-col items-center justify-center">
          <label className="text-center my-4 mx-2 lg:w-[400px]">{text.companyDescription}</label>
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className={labelCss + 'font-bold'}>{text.workingHours}</label>
          <label className={labelCss}>10.00 – 18.00</label>
          <label className={labelCss}>{text.workingDays}</label>
          <label className={labelCss}>{text.emailDescription}</label>
        </div>
      </div>
      <div className="flex flex-col w-full items-center my-10 border-solid border-t-2 border-white">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-around w-full p-5 border-solid border-b-2 border-white">
          <h1 className="text-center my-2 font-bold mx-2 lg:w-[380px]">{text.alpiDescription} </h1>
          <div>
            <h1 className="text-center my-2 font-bold mx-2">mehmetalperenyedik@gmail.com</h1>
            <a target="_blank" href="https://github.com/Alperen7K">
              <h1 className="text-center my-2 font-bold mx-2">github.com/Alperen7K</h1>
            </a>
          </div>
        </div>
        <h1 className="text-center mt-5 m-0 p-0 font-bold">©Copyrights 2021 AIVISION</h1>
      </div>
    </div>
  )
}
