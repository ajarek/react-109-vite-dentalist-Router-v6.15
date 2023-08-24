import { Outlet } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import './Main.css'
import Footer from '../../components/Footer/Footer'

const Main = () => {
  return (
    <div className='main-layout'>
      <Nav />

      <Outlet />
      <Footer/>
    </div>
  )
}

export default Main
