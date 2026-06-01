import { useState } from 'react'
import './PerformanceSection.css'

function PerformanceSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="ps-section">

      {/* Background video */}
      <video
        className="ps-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/abstract-green-futuristic-background-2023-11-27-04-58-09-utc.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="ps-overlay" />

      {/* Vertical brand label */}
      <div className="ps-brand" aria-hidden="true">GEELY</div>

      {/* Title */}
      <div className="ps-text">
        <h2 className="ps-title">
          <span className="ps-title__main">ВЫСОКАЯ<br />ПРОИЗВОДИТЕЛЬНОСТЬ</span>
          <span className="ps-title__sub">И ДОЛГОВЕЧНОСТЬ</span>
        </h2>
      </div>

      {/* Play button */}
      <button
        className={`ps-play${playing ? ' ps-play--active' : ''}`}
        aria-label={playing ? 'Пауза' : 'Воспроизвести'}
        onClick={() => setPlaying(p => !p)}
      >
        {playing ? (
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <rect x="0" y="0" width="4" height="16" rx="1" fill="white"/>
            <rect x="10" y="0" width="4" height="16" rx="1" fill="white"/>
          </svg>
        ) : (
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M1 1l12 7L1 15V1z" fill="white"/>
          </svg>
        )}
      </button>

    </section>
  )
}

export default PerformanceSection
