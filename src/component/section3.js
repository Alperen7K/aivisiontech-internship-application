import React from 'react'
import machineLearning from '../assets/machineLearning.png'

export const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[10px] ">
      <div className="h-[50px] w-[150px]    flex flex-col justify-center items-center my-[20px]">
        <label className="text-[#0036a1cf] font-bold text-[18px]">YETENEKLERİMİZ</label>
        <div className="flex flex-col">
          <label className="text-black/70 font-bold text-[15px]">YAPAY ZEKA &</label>
          <label className="text-black/70 font-bold text-[15px]">GÖRÜNTÜ İŞLEME</label>
        </div>
      </div>
      {/* <div className="text-white">
        <div className="spinY select-none h-[300px] w-[250px] bg-[#0036a1] bg-gradient-to-tl from-[#0036a1] to-[#0000338a]  flex flex-col items-center justify-evenly rounded-[25px]">
          <img className="h-[100px]" src={machineLearning} />
          <label className="font-bold text-[20px]">MAKİNE ÖĞRENMESİ</label>
        </div>
      </div> */}
      <div className="flip-card bg-transparent w-[250px] h-[300px] rounded-[25px]">
        <div className="flip-card-inner">
          <div className="-front text-white bg-[#0036a1] bg-gradient-to-tl from-[#0036a1] to-[#0000338a]">
            <img src={machineLearning} className="" />
            <label className="font-bold text-[20px]">MAKİNE ÖĞRENMESİ</label>
          </div>
          <div className="flip-card-back h-[300px] w-[250px] bg-gradient-to-tl from-[#0036a1] to-[#0000338a]">
            <label>
              Gerçek dünya problemlerinin çözümü için denetimli, denetimsiz, yarı denetimli algoritmalar ve istatistiki modellerin geliştirilmesi, makine öğrenimi modelleri için gerekli verinin elde
              edilmesi, analizi ve yönetimi ile sistem entegrasyonunun sağlanması...
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
