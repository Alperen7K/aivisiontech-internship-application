import React, { useContext } from 'react'
import termal from '../assets/termal-1.png'
import { UiContext } from '../context'

export const FirstStack = () => {
  const { text, setText } = useContext(UiContext)

  let yazı = 'Farkli görüntüleme modalitelerinden (termal, hiperspektral, 3D vb.) elde edilen verileri yapay zeka ile analiz eden bir teknoloji firmasidir.'

  let yazi = ['Farkli görüntüleme modalitelerinden', '(termal, hiperspektral, 3D vb.)', 'elde edilen verileri yapay zeka ile', 'analiz eden bir teknoloji firmasidir.']

  return (
    <div className=" flex flex-col items-center lg:flex-row-reverse lg:justify-between my-3 lg:my-10 ">
      <div className="w-full flex items-center justify-center">
        <img className=" bg-center bg-no-repeat bg-cover h-[370px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[850px]" src={termal} />
      </div>
      <div className="radial-gradient leftToRight max-w-[640px] lg:max-w-[50vw] bg-gradient-to-r from-[#0036a1] to-[#0756c5ac] xl:max-w-[50vw] 2xl:max-w-[700px] lg:h-[550px] w-[100vw] text-white flex flex-col items-center lg:items-start justify-end lg:justify-center py-3  rounded-none sm:rounded-tr-[350px] sm:rounded-l-[350px] lg:rounded-l-[0px] lg:rounded-tr-[350px] sm:rounded-br-[350px]">
        {text.section1.map((yaz) => {
          return <label className="block font-bold text-left sm:text-[18px] lg:text-[25px] lg:ml-10 xl:ml-16 2xl:ml-24 xl:text-[28px] lg:my-[10px]">{yaz}</label>
        })}
      </div>
    </div>
  )
}
// 053dab
