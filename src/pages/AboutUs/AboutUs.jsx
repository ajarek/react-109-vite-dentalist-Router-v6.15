import AboutLogo from '../../sections/AboutLogo/AboutLogo'
import Faq from '../../sections/Faq/Faq'
import Priority from '../../sections/Priority/Priority'
import Team from '../../sections/Team/Team'
import { MotionAnimate } from 'react-motion-animate'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <MotionAnimate
        animation='fadeInUp'
        reset={true}
        distance={150}
        delay={0.5}
        speed={1}
      >
        <AboutLogo />
      </MotionAnimate>
      <MotionAnimate
        animation='fadeInUp'
        reset={true}
        distance={150}
        delay={0.5}
        speed={1}
      >
        <Priority />
      </MotionAnimate>
      <MotionAnimate
        animation='fadeInUp'
        reset={true}
        distance={150}
        delay={0.5}
        speed={1}
      >
        <Team />
      </MotionAnimate>
      <MotionAnimate
        animation='fadeInUp'
        reset={true}
        distance={150}
        delay={0.5}
        speed={1}
      >
        <Faq />
      </MotionAnimate>
    </div>
  )
}

export default AboutUs
