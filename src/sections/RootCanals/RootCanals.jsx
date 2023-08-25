import './RootCanals.css'
import Button from '../../components/Button/Button'
const RootCanals = () => {
  return (
    <div className='root-canals'>
      <div className='root-canals-info'>
        <h1>Leczenie Kanałowe</h1>
        <p>
          Kanały korzeniowe cieszą się złą sławą, a my, dentyści, nie wiemy
          dlaczego! To właśnie te zabiegi naprawdę poprawiają samopoczucie!
        </p>
        <div className='root-canals-contact'>
          <Button
            link={'/kontakt'}
            w={208}
            h={62}
            layout={'Umów Wizytę'}
          />
        </div>
      </div>
      <div className='root-canals-img'>
        <img
          src='/images/root-canals.png'
          alt='image'
        />
      </div>
    </div>
  )
}

export default RootCanals
