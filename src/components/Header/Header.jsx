import { Link } from 'wouter'
import './header.css'

function Header() {
  return (
    <header className='App-header'>
      <Link to='/'>
        <figure className='App-logo'>
          <img alt='Giffy logo' src='/logo.png' />
        </figure>
      </Link>
    </header>
  )
}

export default Header
