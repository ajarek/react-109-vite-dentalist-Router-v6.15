import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({w,h,fs,layout}) => {
  return (
    <Link className='btn-link' style={{width:w,height:h,fontSize:fs}}>{layout}</Link>
  )
}

export default Button