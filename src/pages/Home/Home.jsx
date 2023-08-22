import { MotionAnimate } from 'react-motion-animate'
import Baner from '../../sections/Baner/Baner'
import ServiceDental from '../../sections/ServiceDental/ServiceDental'
import './Home.css'

const Home = () => {
 
  return (
    <div className='home'>
       <MotionAnimate animation='fadeInUp' reset={true} distance={150} delay={0.5} speed={1}>
       <Baner/>
       </MotionAnimate>
       <MotionAnimate animation='fadeInUp' reset={true} distance={150} delay={0.5} speed={1}>
       <ServiceDental/> 
       </MotionAnimate>
    </div>
  )
}

export default Home
