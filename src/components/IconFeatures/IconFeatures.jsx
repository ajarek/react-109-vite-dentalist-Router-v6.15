import './IconFeatures.css'

const IconFeatures = ({icon, title, text}) => {
  return (
    <div className='icon-features'>
      <div className='img-features-icon'>
        <img
          src={icon}
          alt='icon'
        />
      </div>
      <div className='info-features-wrapper'>
        <h4 className='title-features'>{title}</h4>
        <div className='text-features'>{text}</div>
      </div>
    </div>
  )
}

export default IconFeatures
