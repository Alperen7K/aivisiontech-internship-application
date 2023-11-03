import React from 'react'
import machineLearning from '../assets/machineLearning.svg'
import artificle from '../assets/artificle.svg'
import termal from '../assets/termal.svg'
import hiperspektral from '../assets/hiperspektral.svg'

export const Section3 = () => {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-[25px] lg:gap-[50px] xl:gap-[100px] 2xl:gap-[150px]">
        {/* makine */}
        <div className="group h-[270px] w-[250px] lg:h-[370px] lg:w-[350px] [perspective:1000px] ">
          <div className="relative bg-[#0036a1] h-full w-full shadow-xl transition-all duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* ön yüz */}
            <div className="absolute inset-0 flex flex-col justify-between items-center shadow-xl shadow-black/70">
              <img src={machineLearning} className="my-3 w-[200px] lg:w-[300px]     " />
              <div className="my-2 text-center ">
                <label className="text-[15px] lg:text-[20px] font-bold text-white ">MAKİNE ÖĞRENMESİ</label>
              </div>
            </div>
            {/* arka yüz */}
            <div className="absolute inset-0 h-full w-full bg-[#0036a1] p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] sm:h-full sm:w-full sm:p-3 md:p-5 lg:px-5">
              <div className="flex min-h-full flex-col items-center justify-center">
                <label className="mb-1 text-[10px] lg:text-[20px] font-bold sm:mb-4  md:mb-5 md:text-[13px]  ">
                  Gerçek dünya problemlerinin çözümü için denetimli, denetimsiz, yarı denetimli algoritmalar ve istatistiki modellerin geliştirilmesi, makine öğrenimi modelleri için gerekli verinin
                  elde edilmesi, analizi ve yönetimi ile sistem entegrasyonunun sağlanması...
                </label>
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
                <label className="text-[15px] lg:text-[20px] font-bold text-white ">YAPAY ZEKA</label>
              </div>
            </div>
            {/* arka yüz */}
            <div className="absolute inset-0 h-full w-full bg-[#0036a1] p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] sm:h-full sm:w-full sm:p-3 md:p-5 lg:px-5">
              <div className="flex min-h-full flex-col items-center justify-center">
                <label className="mb-1 text-[10px] lg:text-[20px] font-bold sm:mb-4 md:mb-5 md:text-[13px]">
                  Geliştirilen yapay zeka modellerinin çıktı açıklamalarının öğrenilmesi, hangi kararı neye dayanarak verdiğinin belirlenmesi ve buna uygun olarak iş uzmanlarının modeli kontrol etmesi
                  sağlanarak spesifik uygulamalarında değerlendirme, geliştirme ve keşfetme çalışmalarının desteklenmesi...
                </label>
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
                <label className="text-[15px] lg:text-[20px] font-bold text-white ">TERMAL GÖRÜNTÜLEME</label>
              </div>
            </div>
            {/* arka yüz */}
            <div className="absolute inset-0 h-full w-full bg-[#0036a1] p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] sm:h-full sm:w-full sm:p-3 md:p-5 lg:px-5">
              <div className="flex min-h-full flex-col items-center justify-center">
                <label className="mb-1 text-[10px] lg:text-[15px] font-bold sm:mb-4 md:mb-5 md:text-[10px]">
                  Spor, sağlık ve endüstriyel uygulamalar alanlarında kızılötesi termografi görüntülerinin işlenmesi, analiz edilmesi ve sonuçların raporlanması. Termografi verilerinin yapay zeka
                  algoritmaları ile değerlendirilmesi ve geleceğe yönelik olası durum tahminlerinin gerçekleştirilmesi... Geliştirilen algoritmaların kullanıcılara günlük klinik uygulamalarda daha
                  hızlı ve daha iyi kararlara katkıda bulunabilecek yeni tanı destekleyici olanaklar sağlaması ve hastalar, klinisyenler ve tüm sağlık sistemi için sonuçların iyileştirilmesi...
                </label>
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
                <label className="text-[15px] lg:text-[20px] font-bold text-white ">HİPERSPEKTRAL GÖRÜNTÜLEME</label>
              </div>
            </div>
            {/* arka yüz */}
            <div className="absolute inset-0 h-full w-full bg-[#0036a1] p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] sm:h-full sm:w-full sm:p-3 md:p-5 lg:px-5">
              <div className="flex min-h-full flex-col items-center justify-center">
                <label className="mb-1 text-[10px] lg:text-[20px] font-bold sm:mb-4 md:mb-5 md:text-[13px]">
                  Hiperspektral verilerin/görüntülerin elde edilmesi, gelişmiş görüntü işleme ve veri analizi algoritmaları ile modellenmesi ve bunların gerçek zamanlı olarak yorumlanması... Sağlık
                  başta olmak üzere farklı alanlarda, hiperspektral verilerin sağlamış olduğu yeteneklerin yapay zeka modelleri ile birleştirilmesi...
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
