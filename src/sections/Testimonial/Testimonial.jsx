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
        <UserCard icon={'/images/user1.png'} title={'Jan Bukowski'} text={'Profesjonalne podejście, bezbolesne zabiegi i piękny uśmiech to efekt współpracy z tą Kliniką.'}/>
        <UserCard icon={'/images/user2.png'} title={'Adam Zieliński'} text={'Ta Klinika to pewność zdrowia jamy ustnej, polecam wszystkim dbającym o higienę.'}/>
        <UserCard icon={'/images/user3.png'} title={'Ewa Kamińska'} text={'Zaufanie, komfort i nowoczesne technologie - Ci lekarze dbają o nasze uśmiechy na najwyższym poziomie.'}/>
      </div>
    </div>
  )
}

export default Testimonial