import './IconFooter.css'

const IconFooter = ({ icon, title, text }) => {
  return (
    <div className='icon-footer'>
      <div className='wrapper-icon-footer'>
        <div className='img-footer-icon'>{icon}</div>
      </div>
      <div className='info-footer-wrapper'>
        <h4 className='title-footer'>{title}</h4>
        <div className='text-footer'>{text}</div>
      </div>
    </div>
  )
}

export default IconFooter
