import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import IconFooter from '../IconFooter/IconFooter';

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footer-logo'>
        <div className='img'>
          <img
            src='images/favicon.png'
            alt='logo'
          />
          <h1>Twój Dentysta</h1>
        </div>
        <p> Klinika to najwyżej oceniana lokalna praktyka stomatologii kosmetycznej, zapobiegawczej i odtwórczej</p>
        <div className="social">
          <h3>Obserwuj nas na:</h3>
          <div className="social-wrapper">
          <a href=""><FaFacebookF/></a>
          <a href=""><FaTwitter/></a>
          <a href=""><FaInstagram/></a>
          </div>
        </div>
        <div className="copy-right">
        ©️ Klinika "Twój Dentysta" All Right Reserved
      </div>
      </div>
      <div className="footer-links">
        <h3>Ważne Linki</h3>
        <div className="footer-links-wrapper">
         <Link className='footer-link' to={'/'}>Głowna</Link>
         <Link className='footer-link' to={'/o-nas'}>O Nas</Link>
         <Link className='footer-link' to={'/nasze-uslugi'}>Nasze Usługi</Link>
         <Link className='footer-link' to={'/kontakt'}>Kontakt</Link>
         </div>
      </div>
      <div className="footer-info">
      <h3>Informacja</h3>
      <div className="footer-info-wrapper">
        <IconFooter icon={'📞'} title={'Numer telefonu'} text={'+48 573 230 297'}/>
        <IconFooter icon={'⏲️'} title={'Godziny otwarcia'} text={'09:00-18:00'}/>
        <IconFooter icon={'🚩'} title={'Adres Kliniki'} text={'78-100 Kołobrzeg ul.Rzeszowska 38'}/>
      </div>
      </div>
    </div>
  )
}

export default Footer
