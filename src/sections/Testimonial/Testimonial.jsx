import UserCard from '../../components/UserCard/UserCard'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial'>
       <h4>Opinie</h4>
      <div className="info-wrapper">
        <div className="title">
          <h2>Co sądzą o nas klienci</h2>
          </div>
          <div className='text'>Opinie naszych pacjentów są dla nas motywacją do jeszcze lepszej pracy i reorganizacji. </div>
        
      </div>
      <div className="testimonial-user-wrapper">
        <UserCard icon={'/images/user1.png'} title={'Jan Bukowski'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, veritatis.'}/>
        <UserCard icon={'/images/user2.png'} title={'Adam Zieliński'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, veritatis.'}/>
        <UserCard icon={'/images/user3.png'} title={'Ewa Kamińska'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, veritatis.'}/>
      </div>
    </div>
  )
}

export default Testimonial