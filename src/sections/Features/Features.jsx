import IconFeatures from '../../components/IconFeatures/IconFeatures'
import './Features.css'

const Features = () => {
  return (
    <div className='features'>
        <h4>Co nas wyróżnia?</h4>
      <div className="info-wrapper">
        <div className="title">
          <h2>Specjalistyczna opieka poprzez doświadczenia</h2>
          </div>
          <div className='text'>Posiadamy specjalistyczną kadrę lekarzy, specjalistów w swojej dziedzinie, którzy stale podnoszą swoje kwalifikacje i stosują najnowsze metody leczenia </div>
        
      </div>
      <div className="icon-features-wrapper">
        <IconFeatures icon={'images/safety.png'} title={'Bezpieczeństwo przede wszystkim'} text={'Bezpieczeństwo traktujemy priorytetowo, przeprowadzając kontrole stanu zdrowia i nie tylko'}/>
        <IconFeatures icon={'images/insurance.png'} title={'Akceptujemy ubezpieczenie'} text={'Współpracujemy z głównymi ubezpieczycielami w tym Narodowym Funduszem Zdrowia.'}/>
        <IconFeatures icon={'images/full-service.png'} title={'Pełen zakres usług stomatologicznych'} text={'W naszej klinice oferujemy pełen zakres usług stomatologicznych począwszy od badań po implanty i licówki.'}/>
        <IconFeatures icon={'images/judgment.png'} title={'Nigdy żadnego wyroku'} text={'Od nici dentystycznych po słodycze – każde usta są mile widziane.'}/>
      </div>
    </div>
  )
}

export default Features