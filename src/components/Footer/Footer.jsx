import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="ft">

      {/* ── Top row ── */}
      <div className="ft-top">

        {/* Logo */}
        <a href="#home" className="ft-logo">
          <svg width="36" height="20" viewBox="0 0 80 44" fill="none" aria-hidden="true">
            <rect x="2"    y="38" width="76" height="2.5" rx="1.25" fill="currentColor" />
            <rect x="6"    y="24" width="5"  height="14"  rx="1"    fill="currentColor" />
            <path d="M6 24 L8.5 18 L11 24Z"             fill="currentColor" />
            <rect x="17"   y="18" width="5"  height="20"  rx="1"    fill="currentColor" />
            <path d="M17 18 L19.5 12 L22 18Z"           fill="currentColor" />
            <rect x="37.5" y="8"  width="5"  height="30"  rx="1"    fill="currentColor" />
            <path d="M37.5 8 L40 2 L42.5 8Z"            fill="currentColor" />
            <rect x="58"   y="18" width="5"  height="20"  rx="1"    fill="currentColor" />
            <path d="M58 18 L60.5 12 L63 18Z"           fill="currentColor" />
            <rect x="69"   y="24" width="5"  height="14"  rx="1"    fill="currentColor" />
            <path d="M69 24 L71.5 18 L74 24Z"           fill="currentColor" />
          </svg>
          <span>Berg<br />Group</span>
        </a>

        {/* Nav */}
        <nav className="ft-nav">
          <a href="#configurator">Конфигуратор</a>
          <a href="#about">О компании</a>
          <a href="#catalog">Авто в наличии</a>
          <a href="#contacts">Контакты</a>
        </nav>

        {/* Socials */}
        <div className="ft-socials">
          <a href="#" className="ft-social" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
            </svg>
          </a>
          <a href="#" className="ft-social" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className="ft-social" aria-label="Telegram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="ft-divider" />

      {/* ── Bottom row ── */}
      <div className="ft-bottom">
        <span>Дизайн Студия "ITMAG" &copy; 2024 Все права защищены.</span>
        <Link to="/privacy" className="ft-policy">Политика конфиденциальности</Link>
      </div>

    </footer>
  )
}

export default Footer
