import './Treatment.css'
import Button from './../../components/Button/Button'

const Treatment = () => {
  return (
    <div className='treatment'>
      <h4>Pogotowie Stomatologiczne 24h</h4>
      <div className='treatment-wrapper'>
        <div className='img-treatment'>
          <img
            src='/images/gentle.png'
            alt='gentle'
          />
        </div>
        <div className='info-wrapper'>
          <div className='title'>
            <h2>Delikatne, przyjazne leczenie w naszej praktyce</h2>
          </div>
          <div className='text'>
            Dla wygody naszych pacjentów wykorzystujemy nowoczesną oraz
            przyjazną aparaturę stomatologiczną i diagnostyczną .{' '}
          </div>
          <div className='btn-treatment'>
            <Button
              link={'/kontakt'}
              w={218}
              h={62}
              layout={'Zarezerwuj Termin ➡️'}
              bc='#bad7f9'
              col='#0062b2'
              fs={'1.2rem'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Treatment
