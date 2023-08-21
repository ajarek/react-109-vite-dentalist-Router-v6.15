import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'

import './Nav.css'
import Button from '../Button/Button'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='nav'>
      <Link
        className='link link-logo'
        to={'/'}
      >
        <div className='img'>
         <img src="images/favicon.png" alt="logo" />
        </div>
        <h1>Twój Dentysta</h1>
      </Link>

      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        <Link
          className='link link-text'
          to={'/o-nas'}
        >
          O Nas
        </Link>
        <Link
          className='link link-text'
          to={'/nasze-uslugi'}
        >
          Nasze Usługi
        </Link>
        <Button w={160} h={40} layout={'Kontakt'}/>
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
