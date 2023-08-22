import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({w,h,fs,layout,bc='#8a2be2',col='#fff'}) => {
  return (
    <Link className='btn-link' style={{width:w,height:h,fontSize:fs,background:bc,color:col}}>{layout}</Link>
  )
}

export default Button