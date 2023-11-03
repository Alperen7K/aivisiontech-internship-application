import React, { createContext, useState } from 'react'
export const UiContext = createContext({
  temp: false,
  temp: {},
  setTemp: () => {},
  setText: () => {}
})

export const UiContextProvider = ({ children }) => {
  const [temp, setTemp] = useState(false)
  const [text, setText] = useState({
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
  })

  return (
    <UiContext.Provider
      value={{
        temp,
        setTemp,
        text,
        setText
      }}
    >
      {children}
    </UiContext.Provider>
  )
}
