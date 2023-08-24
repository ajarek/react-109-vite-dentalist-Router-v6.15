import './Team.css'
import UserTeam from './../../components/UserTeam/UserTeam';

const Team = () => {
  return (
    <div className='team'>
      <h4>POZNAJ NASZĄ DRUŻYNĘ</h4>
      <div className="info-wrapper">
        <div className="title">
          <h2>Poznaj zespół naszej Kliniki</h2>
          </div>
          <div className='text'>To osoby ,które otoczą Cię fachową opieką i wsparciem </div>
        
      </div>
      <div className="team-wrapper">
        <UserTeam foto={'images/about-user1.png'} title={'Janina Konic'}/>
        <UserTeam foto={'images/about-user2.png'} title={'Bolesław Muszyński'}/>
        <UserTeam foto={'images/about-user3.png'} title={'Leszek Czaporowski'}/>
        <UserTeam foto={'images/about-user4.png'} title={'Monika Jasińska'}/>
      </div>
      </div>
  )
}

export default Team