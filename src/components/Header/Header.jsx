import { Link } from 'wouter'
import { useState, useEffect } from 'react'
import { FaGripLines } from 'react-icons/fa'
import './styles.js'
import {
  AppHeader,
  AppLogo,
  Logo,
  AppNav,
  AppNavList,
  AppNavItem,
  AppNavButton
} from './styles'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
  }, [])

  const toggleNav = () => setToggleMenu(!toggleMenu)

  return (
    <AppHeader>
      <Link to='/'>
        <AppLogo>
          <Logo src='/logo.png' alt='Giffy logo' />
        </AppLogo>
      </Link>
      <AppNav>
        {toggleMenu || screenWidth >= 600 ? (
          <AppNavList>
            <AppNavItem>Reactions</AppNavItem>
            <AppNavItem>Stickers</AppNavItem>
            <AppNavItem>Entertainment</AppNavItem>
            <AppNavItem>Login</AppNavItem>
            <AppNavItem>Register</AppNavItem>
          </AppNavList>
        ) : null}
        <AppNavButton onClick={toggleNav}>
          <FaGripLines />
        </AppNavButton>
      </AppNav>
    </AppHeader>
  )
}

export default Header
