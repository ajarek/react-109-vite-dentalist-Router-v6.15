import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({w,h,layout}) => {
  return (
    <Link className='btn-link' style={{width:w,height:h}}>{layout}</Link>
  )
}

export default Button