import { MotionAnimate } from 'react-motion-animate'
import Baner from '../../sections/Banner/Baner'
import './Home.css'

const Home = () => {
 
  return (
    <div className='home'>
       <MotionAnimate animation='fadeInUp' reset={true} distance={100} delay={0.5} speed={1}>
       <Baner/>
       </MotionAnimate>
    
    </div>
  )
}

export default Home
