import React, { useContext } from 'react'
import machineLearning from '../assets/machineLearning.svg'
import artificle from '../assets/artificle.svg'
import termal from '../assets/termal.svg'
import hiperspektral from '../assets/hiperspektral.svg'
import { UiContext } from '../context'

export const Section3 = () => {
  const { text, setText } = useContext(UiContext)

  return (
    <div className="flex items-center justify-center my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-[25px] lg:gap-[50px] xl:gap-[100px] 2xl:gap-[150px]">
        {/* makine */}
        <div className="group h-[270px] w-[250px] lg:h-[370px] lg:w-[350px] [perspective:1000px] ">
          <div className="relative bg-[#0036a1] h-full w-full shadow-xl transition-all duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* ön yüz */}
            <div className="absolute inset-0 flex flex-col justify-between items-center shadow-xl shadow-black/70">
              <img src={machineLearning} className="my-3 w-[200px] lg:w-[300px]     " />
              <div className="my-2 text-center ">
                <label className="text-[15px] lg:text-[20px] font-bold text-white ">{text.machineLearning.name}</label>
              </div>
            </div>
            {/* arka yüz */}
            <div className="absolute inset-0 h-full w-full bg-[#0036a1] p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] sm:h-full sm:w-full sm:p-3 md:p-5 lg:px-5">
              <div className="flex min-h-full flex-col items-center justify-center">
                <label className="mb-1 text-[10px] lg:text-[20px] font-bold sm:mb-4  md:mb-5 md:text-[13px]  ">{text.machineLearning.description}</label>
              </div>
            </div>
          </div>
        </div>
        {/* yapay zeka */}
        <div className="group h-[270px] w-[250px] lg:h-[370px] lg:w-[350px] [perspective:1000px] ">
          <div className="relative bg-[#0036a1] h-full w-full shadow-xl transition-all duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* ön yüz */}
            <div className="absolute inset-0 flex flex-col justify-between items-center shadow-xl shadow-black/70">
              <img src={artificle} className="my-3 w-[200px] lg:w-[300px]    " />
              <div className="my-2 text-center ">
                <label className="text-[15px] lg:text-[20px] font-bold text-white ">{text.artificialIntelligence.name}</label>
              </div>
            </div>
            {/* arka yüz */}
            <div className="absolute inset-0 h-full w-full bg-[#0036a1] p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] sm:h-full sm:w-full sm:p-3 md:p-5 lg:px-5">
              <div className="flex min-h-full flex-col items-center justify-center">
                <label className="mb-1 text-[10px] lg:text-[20px] font-bold sm:mb-4 md:mb-5 md:text-[13px]">{text.artificialIntelligence.description}</label>
              </div>
            </div>
          </div>
        </div>
        {/* termal */}
        <div className="group h-[270px] w-[250px] lg:h-[370px] lg:w-[350px] [perspective:1000px] ">
          <div className="relative bg-[#0036a1] h-full w-full shadow-xl transition-all duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* ön yüz */}
            <div className="absolute inset-0 flex flex-col justify-between items-center shadow-xl shadow-black/70">
              <img src={termal} className="my-3 w-[200px] lg:w-[300px]     " />
              <div className="my-2 text-center ">
                <label className="text-[15px] lg:text-[20px] font-bold text-white ">{text.thermalImage.name}</label>
              </div>
            </div>
            {/* arka yüz */}
            <div className="absolute inset-0 h-full w-full bg-[#0036a1] p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] sm:h-full sm:w-full sm:p-3 md:p-5 lg:px-5">
              <div className="flex min-h-full flex-col items-center justify-center">
                <label className="mb-1 text-[10px] lg:text-[15px] font-bold sm:mb-4 md:mb-5 md:text-[10px]">{text.thermalImage.description}</label>
              </div>
            </div>
          </div>
        </div>
        {/* GÖRÜNTÜLEME */}
        <div className="group h-[270px] w-[250px] lg:h-[370px] lg:w-[350px] [perspective:1000px]">
          <div className="relative bg-[#0036a1] h-full w-full shadow-xl transition-all duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* ön yüz */}
            <div className="absolute inset-0 flex flex-col justify-between items-center shadow-xl shadow-black/70">
              <img src={hiperspektral} className="my-3 w-[200px] lg:w-[300px]    " />
              <div className="my-2 text-center ">
                <label className="text-[15px] lg:text-[20px] font-bold text-white ">{text.hyperspectralImage.name}</label>
              </div>
            </div>
            {/* arka yüz */}
            <div className="absolute inset-0 h-full w-full bg-[#0036a1] p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] sm:h-full sm:w-full sm:p-3 md:p-5 lg:px-5">
              <div className="flex min-h-full flex-col items-center justify-center">
                <label className="mb-1 text-[10px] lg:text-[20px] font-bold sm:mb-4 md:mb-5 md:text-[13px]">{text.hyperspectralImage.description}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
