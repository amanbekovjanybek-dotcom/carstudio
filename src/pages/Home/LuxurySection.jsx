import { useState } from 'react'
import './LuxurySection.css'

const slides = [
  { img: '/car/Property 1=01.jpg' },
  { img: '/car/Property 1=02.jpg' },
  { img: '/car/Property 1=03.jpg' },
  { img: '/car/Property 1=04.jpg' },
]

function LuxurySection() {
  const [current, setCurrent] = useState(0)

  const goPrev = () => setCurrent(p => (p - 1 + slides.length) % slides.length)
  const goNext = () => setCurrent(p => (p + 1) % slides.length)

  return (
    <section className="ls-section">

      {/* Background images — crossfade */}
      {slides.map((s, i) => (
        <img
          key={s.img}
          src={s.img}
          alt=""
          aria-hidden="true"
          className={`ls-bg${i === current ? ' ls-bg--active' : ''}`}
          draggable={false}
        />
      ))}

      {/* Overlay */}
      <div className="ls-overlay" />

      {/* Vertical label */}
      <div className="ls-brand" aria-hidden="true">ПОЧУВСТВУЙ</div>

      {/* Title */}
      <div className="ls-text">
        <h2 className="ls-title">
          <span className="ls-title__main">ПОЧУВСТВУЙ</span>
          <span className="ls-title__sub">РОСКОШЬ</span>
        </h2>
      </div>

      {/* Left arrow — white */}
      <button className="ls-arrow ls-arrow--left" onClick={goPrev} aria-label="Предыдущий">
        <svg width="18" height="14" viewBox="0 0 22 14" fill="none">
          <path d="M8 1L1 7l7 6M1 7h20" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Right arrow — green */}
      <button className="ls-arrow ls-arrow--right" onClick={goNext} aria-label="Следующий">
        <svg width="18" height="14" viewBox="0 0 22 14" fill="none">
          <path d="M14 1l7 6-7 6M21 7H1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </section>
  )
}

export default LuxurySection
