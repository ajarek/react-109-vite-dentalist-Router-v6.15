import AboutLogo from '../../sections/AboutLogo/AboutLogo'
import Priority from '../../sections/Priority/Priority'
import Team from '../../sections/Team/Team'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <AboutLogo/>
      <Priority/>
      <Team/>
    </div>
  )
}

export default AboutUs