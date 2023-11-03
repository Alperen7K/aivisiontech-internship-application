import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import x from '../assets/x.svg'
import turkey from '../assets/turkey.png'
import unitedKingdom from '../assets/united-kingdom.png'
import { Link, NavLink } from 'react-router-dom'
import { UiContext } from '../context'

export const NavBar = () => {
  const [isTurkish, setIsTurkish] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { text, setText } = useContext(UiContext)

  const Options = ['ANASAYFA', 'HAKKIMIZDA', 'ÜRÜN', 'FOTOĞRAFLAR VE VİDEOLAR', 'HABERLER', 'İLETİŞİM', 'BLOG', 'TAKIM']
  const OptionsEn = ['HOME', 'ABOUT US', 'PRODUCT', 'PHOTOS AND VIDEOS', 'NEWS', 'CONTACT', 'BLOG', 'TEAM']

  let tempTR = {
    navbarOptions: ['ANASAYFA', 'HAKKIMIZDA', 'ÜRÜN', 'FOTOĞRAFLAR VE VİDEOLAR', 'HABERLER', 'İLETİŞİM', 'BLOG', 'TAKIM'],
    section1: ['Farkli görüntüleme modalitelerinden', '(termal, hiperspektral, 3D vb.)', 'elde edilen verileri yapay zeka ile', 'analiz eden bir teknoloji firmasidir.'],
    companyDescription: 'Farkli görüntüleme modalitelerinden (termal, hiperspektral, 3D vb.) elde edilen verileri yapay zeka ile analiz eden bir teknoloji firmasidir.',
    machineLearning: {
      name: 'MAKİNE ÖĞRENMESİ',
      description:
        'Gerçek dünya problemlerinin çözümü için denetimli, denetimsiz, yarı denetimli algoritmalar ve istatistiki modellerin geliştirilmesi, makine öğrenimi modelleri için gerekli verinin elde edilmesi, analizi ve yönetimi ile sistem entegrasyonunun sağlanması...'
    },
    artificialIntelligence: {
      name: 'YAPAY ZEKA',
      description:
        'Geliştirilen yapay zeka modellerinin çıktı açıklamalarının öğrenilmesi, hangi kararı neye dayanarak verdiğinin belirlenmesi ve buna uygun olarak iş uzmanlarının modeli kontrol etmesi sağlanarak spesifik uygulamalarında değerlendirme, geliştirme ve keşfetme çalışmalarının desteklenmesi...'
    },
    thermalImage: {
      name: 'TERMAL GÖRÜNTÜLEME',
      description:
        'Spor, sağlık ve endüstriyel uygulamalar alanlarında kızılötesi termografi görüntülerinin işlenmesi, analiz edilmesi ve sonuçların raporlanması. Termografi verilerinin yapay zeka algoritmaları ile değerlendirilmesi ve geleceğe yönelik olası durum tahminlerinin gerçekleştirilmesi... Geliştirilen algoritmaların kullanıcılara günlük klinik uygulamalarda daha hızlı ve daha iyi kararlara katkıda bulunabilecek yeni tanı destekleyici olanaklar sağlaması ve hastalar, klinisyenler ve tüm sağlık sistemi için sonuçların iyileştirilmesi...'
    },
    hyperspectralImage: {
      name: 'HİPERSPEKTRAL GÖRÜNTÜLEME',
      description:
        'Hiperspektral verilerin/görüntülerin elde edilmesi, gelişmiş görüntü işleme ve veri analizi algoritmaları ile modellenmesi ve bunların gerçek zamanlı olarak yorumlanması... Sağlık başta olmak üzere farklı alanlarda, hiperspektral verilerin sağlamış olduğu yeteneklerin yapay zeka modelleri ile birleştirilmesi...'
    },
    pressName: 'BASINDA BİZ',
    workingHours: 'ÇALIŞMA SAATLERİ',
    workingDays: 'Pazartesi – Cumartesi',
    emailDescription: 'Sorularınız için 7/24 e-posta adresimiz üzerinden bizimle iletişim kurabilirsiniz.',
    alpiDescription: "Bu websitesi AIVISIONTECH'in açtığı stajyerlik başvurusu için Mehmet Alperen Yedik tarafından yaklaşık 1 gün içinde yapılmıştır."
  }

  let tempEN = {
    navbarOptions: ['HOME', 'ABOUT US', 'PRODUCT', 'PHOTOS AND VIDEOS', 'NEWS', 'CONTACT', 'BLOG', 'TEAM'],
    section1: ['It is a technology company that analyzes', 'data obtained from different imaging', 'modalities (thermal, hyperspectral,', '3D, etc.) with artificial intelligence.'],
    companyDescription: 'It is a technology company that analyzes data obtained from different imaging modalities (thermal, hyperspectral, 3D, etc.) with artificial intelligence.',
    machineLearning: {
      name: 'MACHINE LEARNING',
      description:
        'Development of supervised, unsupervised, semi-supervised algorithms and statistical models for solving real-world problems, acquisition, analysis and management of data required for machine learning models and system integration'
    },
    artificialIntelligence: {
      name: 'ARTIFICIAL INTELLIGENCE',
      description:
        'Learning the output descriptions of the artificial intelligence models developed, determining which decision is based on what, and supporting the evaluation, development and discovery studies in specific applications by enabling business experts to check the model accordingly'
    },
    thermalImage: {
      name: 'THERMAL IMAGING',
      description:
        'Processing, analyzing and reporting the results of infrared thermography images in sports, health and industrial applications. Evaluation of thermography data with artificial intelligence algorithms and realization of possible future situation predictions... The developed algorithms provide users with new diagnostic supportive possibilities that can contribute to faster and better decisions in daily clinical practice and improve outcomes for patients, clinicians and the entire healthcare system...'
    },
    hyperspectralImage: {
      name: 'HYPERSPECTRAL IMAGING',
      description:
        'Acquisition of hyperspectral data/images, modeling them with advanced image processing and data analysis algorithms and interpreting them in real time...Combining the capabilities provided by hyperspectral data with artificial intelligence models in different fields, especially in health...'
    },
    pressName: 'PRESS',
    workingHours: 'WORKING HOURS',
    workingDays: 'Monday - Saturday',
    emailDescription: 'For your questions you can contact us 24/7 via our e-mail address.',
    alpiDescription: 'This website was created by Mehmet Alperen Yedik in approximately 1 day for the internship application opened by AIVISIONTECH.'
  }

  useEffect(() => {
    if (isTurkish) setText(tempTR)
  }, [])

  useEffect(() => {
    if (isTurkish) setText(tempTR)
    if (!isTurkish) setText(tempEN)
  }, [isTurkish])

  return (
    <>
      <div className="sticky top-0 z-30 backdrop-blur-sm h-[100px] lg:h-[125px] w-full bg-[#0036a1] flex items-center justify-center  font-bold border-solid border-b-2 border-white">
        <div className="h-full sm:w-[98vw] w-full flex  items-center justify-around xl:justify-between">
          <img src={logo} alt="Logo" className="w-[150px] lg:mt-10 xl:mt-0 sm:w-[180px] lg:w-[200px] 2xl:w-[250px] hover:scale-[1.1] delay-100 duration-300" />

          <div className="hidden lg:flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between">
            <div className=" lg:block text-white">
              {text.navbarOptions.map((opt) => {
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
                  {text.navbarOptions.map((opt, index) => {
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
