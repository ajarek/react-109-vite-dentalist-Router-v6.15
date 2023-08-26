import './UserTeam.css'

const UserTeam = ({foto,title}) => {
  return (
    <div className='user-team'>
      <div className='img-user-team-icon'>
        <img
          src={foto}
          alt='foto'
        />
      </div>
      <div className='info-user-team-wrapper'>
        <h4 className='title-user-team'>dr {title}</h4>
      </div>
    </div>
  )
}

export default UserTeam
