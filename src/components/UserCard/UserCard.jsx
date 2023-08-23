import './UserCard.css'
import { BsStarFill,BsStar } from 'react-icons/bs';
const UserCard = ({icon, title, text}) => {
  return (
    <div className='user-card'>
       <div className='img-user-card-icon'>
        <img
          src={icon}
          alt='icon'
        />
      </div>
      <div className='info-user-card-wrapper'>
        <h4 className='title-user-card'>{title}</h4>
        <div className='text-user-card'>{text}</div>
        <div className="stars">
           <BsStarFill size={25} color='gold'/>
           <BsStarFill size={25} color='gold'/>
           <BsStarFill size={25} color='gold'/>
           <BsStarFill size={25} color='gold'/>
           <BsStarFill size={25} color='grey'/>
        </div>
      </div>
    </div>
  )
}

export default UserCard