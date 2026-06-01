import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const LIGHT_ROUTES = ['/privacy', '/contacts', '/configurator', '/catalog']

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isLight = LIGHT_ROUTES.includes(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cls = [
    'header',
    !isLight && scrolled ? 'header--scrolled' : '',
    isLight ? 'header--light' : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={cls}>
      <Link to="/" className="header-logo">
        <span className="logo-berg">Berg</span>
        <div className="logo-divider">
          <span className="divider-long"></span>
          <span className="divider-short"></span>
        </div>
        <span className="logo-group">Group</span>
      </Link>

      <nav className="header-nav">
        <Link to="/configurator">Конфигуратор</Link>
        <Link to="/about">О компании</Link>
        <Link to="/catalog">Авто в наличии</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>

      <div className="header-contact">
        <span className="contact-phone">+7 777 123 34 56</span>
        <span className="contact-hours">Пн-Вс 10:00–21:00</span>
      </div>
    </header>
  )
}

export default Header
