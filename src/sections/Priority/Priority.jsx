import './Priority.css'
import Button from './../../components/Button/Button';
const Priority = () => {
  return (
    <div className='priority'>
      <div className="priority-wrapper">
        <div className="img-priority">
          <img src="/images/about3.png" alt="gentle" />
        </div>
      <div className='info-wrapper'>
        <h4>NASZ PRIORYTET</h4>
        <div className='title'>
          <h2>Naszym priorytetem są nasi klienci</h2>
        </div>
        <div className='text'>
          Dla wygody naszych pacjentów wykorzystujemy nowoczesną oraz przyjazną
          aparaturę stomatologiczną i diagnostyczną .{' '}
        </div>
        <div className="btn-priority">
        <Button link={'/kontakt'} w={218} h={62} layout={'Zarezerwuj Termin'} bc='#bad7f9' col='#0062b2' fs={'1.2rem'}/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Priority