import './AboutLogo.css'
import Button from './../../components/Button/Button'
const AboutLogo = () => {
  return (
    <div className='about-logo'>
      
      <div className='about-logo-wrapper'>
      
        <div className='info-wrapper'>
          <div className='title'>
            <h2>About Us</h2>
          </div>
          <div className='text'>
          Chcemy, abyś czuł się niesamowicie, dbając o zdrowie jamy ustnej. Nie tylko dwa razy w roku, ale za każdym razem, gdy ugryziesz, opowiesz dowcip, pośmiejesz się lub pocałujesz.
          </div>
          <div className='btn-about-logo'>
            <Button
              link={'/kontakt'}
              w={220}
              h={62}
              layout={'Skontaktuj się z nami '}
              bc='#bad7f9'
              col='#0062b2'
              fs={'1.2rem'}
            />
          </div>
          
        </div>
        <div className='img-about-logo'>
          <img
            src='/images/about1.png'
            alt='gentle'
          />
          <img
            src='/images/about2.png'
            alt='gentle'
            className='about2'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutLogo
