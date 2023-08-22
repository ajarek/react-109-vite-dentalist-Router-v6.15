import IconArea from '../../components/IconArea/IconArea'
import './ServiceDental.css'
import Button from './../../components/Button/Button';

const ServiceDental = () => {
  return (
    <div className='services'>
      <h4>Usługi</h4>
      <div className="info-wrapper">
        <div className="title">
          <h2>Poczuj się wspaniale, dbając o zdrowie jamy ustnej</h2>
          </div>
          <div className='text'>Dla wygody naszych Pacjentów do diagnostyki radiologicznej wykorzystujemy nowoczesną cyfrową aparaturę rentgenowską na miejscu. </div>
        
      </div>
      <div className="icon-area-wrapper">
        <IconArea icon={'/images/denture.png'} title={'Protezy'} text={' Nowoczesna protetyka ma do zaoferowania naprawdę estetyczne uzupełnienia.'}/>
        <IconArea icon={'/images/implant.png'} title={'Implanty'} text={'Implantologia  uzupełniania braki zębowe za pomocą wszczepianych implantów.'}/>
        <IconArea icon={'/images/whitening.png'} title={'Wybielanie'} text={'Nakładanie na zęby żelu i aktywacja za pomocą  lampy Beyond'}/>
        <IconArea icon={'/images/root.png'} title={'Leczenie Kanałowe'} text={'Opróżnieniu zęba z chorej  miazgi,  wypełnieniu go i odtworzeniu powierzchni korony.'}/>
      </div>
      <div className="btn-services">
        <Button w={208} h={62} layout={'Wszystkie Usługi ➡️'} bc='#bad7f9' col='#0062b2' fs={'1.2rem'}/>
      </div>
    </div>
  )
}

export default ServiceDental