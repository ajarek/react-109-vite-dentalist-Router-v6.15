import './IconArea.css'

const IconArea = ({icon,title,text}) => {
  return (
    <div className='card-area'>
    <div className='icon-area'>
      <div className="blue-area">
        <div className="blue-light-area">
          <div className="white-area">
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
    <h4 className='title'>{title}</h4>
    <div className='text'>{text}</div>
    </div>
  )
}

export default IconArea