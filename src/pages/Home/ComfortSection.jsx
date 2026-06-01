import { useState, useEffect, useRef } from 'react'
import './ComfortSection.css'

const models = [
  { name: 'LiXiang L9', img: '/car/Property 1=01.jpg' },
  { name: 'Hongqi',     img: '/car/Property 1=02.jpg' },
  { name: 'Geely',      img: '/car/Property 1=03.jpg' },
  { name: 'ZEEKR 001',  img: '/car/Property 1=04.jpg' },
]

function ComfortSection() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const autoRef = useRef(null)

  const stopAuto = () => clearInterval(autoRef.current)

  const goTo = (idx) => {
    setCurrent((idx + models.length) % models.length)
  }

  const goPrev = () => { stopAuto(); goTo(current - 1) }
  const goNext = () => { stopAuto(); goTo(current + 1) }

  useEffect(() => {
    if (!isPlaying) return
    autoRef.current = setInterval(() => goTo(current + 1), 7000)
    return () => clearInterval(autoRef.current)
  }, [current, isPlaying])

  return (
    <section className="cs-section">

      {/* Background images — crossfade via key */}
      {models.map((m, i) => (
        <img
          key={m.img}
          src={m.img}
          alt=""
          aria-hidden="true"
          className={`cs-bg${i === current ? ' cs-bg--active' : ''}`}
          draggable={false}
        />
      ))}

      {/* Dark overlay */}
      <div className="cs-overlay" />

      {/* Title */}
      <h2 className="cs-title">ПОЗНАЙ КОМФОРТ</h2>

      {/* Play / Pause button */}
      <button
        className="cs-play"
        aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
        onClick={() => {
          stopAuto()
          setIsPlaying((p) => !p)
        }}
      >
        {isPlaying ? (
          /* Pause icon */
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <rect x="1" y="1" width="6" height="20" rx="1.5" fill="#fff"/>
            <rect x="13" y="1" width="6" height="20" rx="1.5" fill="#fff"/>
          </svg>
        ) : (
          /* Play icon */
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <path d="M2 2l18 10L2 22V2z" fill="#fff"/>
          </svg>
        )}
      </button>

      {/* Bottom navigation capsule */}
      <nav className="cs-nav">
        {/* Both arrows on the left */}
        <div className="cs-nav__arrows">
          <button className="cs-nav__arrow" onClick={goPrev} aria-label="Предыдущая">
            <svg width="18" height="12" viewBox="0 0 22 12" fill="none">
              <path d="M6 1L1 6l5 5M1 6h20" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="cs-nav__arrow" onClick={goNext} aria-label="Следующая">
            <svg width="18" height="12" viewBox="0 0 22 12" fill="none">
              <path d="M16 1l5 5-5 5M21 6H1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <ul className="cs-nav__list">
          {models.map((m, i) => (
            <li key={m.name}>
              <button
                className={`cs-nav__item${i === current ? ' cs-nav__item--active' : ''}`}
                onClick={() => { stopAuto(); goTo(i) }}
              >
                {m.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

    </section>
  )
}

export default ComfortSection
