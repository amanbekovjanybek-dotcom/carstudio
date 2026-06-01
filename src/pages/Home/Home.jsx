import './Home.css'
import WorkProcess from './WorkProcess'
import HongqiSelector from './HongqiSelector'
import ComfortSection from './ComfortSection'
import ColorSelector from './ColorSelector'
import DeliverySection from './DeliverySection'
import PerformanceSection from './PerformanceSection'
import LuxurySection from './LuxurySection'
import ReviewsSection from './ReviewsSection'
import MapSection from './MapSection'
import ContactSection from './ContactSection'

function Home() {
  return (
    <>
      <section className="hero" id="home">
        {/* Video background */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/abstract-green-futuristic-background-2023-11-27-04-58-09-utc.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />

        {/* Main content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Berg Group</span>
            <span>Авто из Китая</span>
          </h1>
          <p className="hero-desc">
            Благодаря тесной взаимосвязи с нашими партнерами, вы получите авто по самой<br />
            лучшей цене, в кратчайшие сроки и верно растаможенным для постановки на учет в РФ.<br />
            С нами вы можете быть спокойны за технические и юридические аспекты доставки.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Конфигуратор авто</button>
            <button className="btn-outline">Обратный звонок</button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="#00ff41" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Social sidebar — inside hero, absolute */}
        <aside className="social-sidebar">
          <a href="#" className="social-icon" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Telegram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </aside>
      </section>

      <WorkProcess />
      <HongqiSelector />
      <ComfortSection />
      <ColorSelector />
      <DeliverySection />
      <PerformanceSection />
      <LuxurySection />
      <ReviewsSection />
      <ContactSection />
      <MapSection />
    </>
  )
}

export default Home
