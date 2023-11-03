import React from 'react'
import termal from '../assets/termal-1.png'

export const FirstStack = () => {
  let yazı = 'Farkli görüntüleme modalitelerinden (termal, hiperspektral, 3D vb.) elde edilen verileri yapay zeka ile analiz eden bir teknoloji firmasidir.'

  let yazi = ['Farkli görüntüleme modalitelerinden', '(termal, hiperspektral, 3D vb.)', 'elde edilen verileri yapay zeka ile', 'analiz eden bir teknoloji firmasidir.']

  return (
    <div className="leftToRight flex flex-col items-center lg:flex-row-reverse lg:justify-between bg-contain bg-no-repeat bg-center ">
      <img className=" bg-center bg-no-repeat bg-cover h-[370px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[850px]" src={termal} />
      <div className=" max-w-[640px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] lg:h-[550px] w-[100vw] text-white flex flex-col items-center lg:items-start justify-end lg:justify-center bg-[#0036a1] py-3  rounded-none sm:rounded-tr-[350px] sm:rounded-l-[350px] lg:rounded-l-[0px] lg:rounded-tr-[350px] sm:rounded-br-[350px]">
        {yazi.map((yaz) => {
          return <label className="block font-bold text-left sm:text-[18px] lg:text-[25px] lg:ml-5 xl:text-[28px] lg:my-[10px]">{yaz}</label>
        })}
      </div>
    </div>
  )
}
// 053dab
