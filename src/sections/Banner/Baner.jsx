import { MdPhoneInTalk } from 'react-icons/md';
import Button from '../../components/Button/Button'
import './Baner.css'
import bannerImg from '/images/baner.png'
import bannerUser from '/images/baner-user.png'
const Baner = () => {
  return (
    <div className='baner'>
      <div className='baner-info'>
        <h1>Powierz swój uśmiech ekspertom</h1>
        <p>
          Zajmujemy się diagnostyką, profilaktyką i leczeniem uzębienia.
          Przeprowadzamy zabiegi chirurgiczne oraz świadczymy usługi z zakresu
          stomatologii estetycznej. Nasz zespół lekarzy dentystów składa się z
          profesjonalistów , którzy nieustannie poszerzają swoją wiedzę o
          najnowsze rozwiązania i technologie.
        </p>
        <div className="baner-contact">
        <Button w={208} h={62} layout={'Umów Wizytę'}/>
        <div className="phone">
        <MdPhoneInTalk size={30} color={'#8a2be2'} />
        <a href='tel:+48573230297' className="phone-wrapper">
          <div><strong>Pogotowie 24H</strong></div>
          <div><b>573 230 297</b></div>
        </a>
        </div>
        
      </div>
      </div>
      <div className='baner-img'>
        <img
          src={bannerImg}
          alt='baner-image'
        />
         <div className="baner-modal">
        <img src={bannerUser} alt="" />
        <div className="baner-modal-wrapper">
          <div><b>Dr Anna Nowak</b></div>
          <div>Konsultant</div>
        </div>
      </div>
      </div>
     
      
    </div>
  )
}

export default Baner
