import Gallery from '../../sections/Gallery/Gallery'
import RootCanals from '../../sections/RootCanals/RootCanals'
import { MotionAnimate } from 'react-motion-animate'
import './ServiceSingle.css'

const ServiceSingle = () => {
  return (
    <div className='service-single'>
      <MotionAnimate
        animation='fadeInUp'
        reset={true}
        distance={150}
        delay={0.5}
        speed={1}
      >
        <RootCanals />
      </MotionAnimate>
      <MotionAnimate
        animation='fadeInUp'
        reset={true}
        distance={150}
        delay={0.5}
        speed={1}
      >
        <Gallery />
      </MotionAnimate>
    </div>
  )
}

export default ServiceSingle
