import { useState } from 'react'
import './ContactSection.css'

/* Hongqi brand mark — three-pillar gate with flag tips */
const HongqiMark = () => (
  <svg
    className="ct-mark"
    width="80"
    height="44"
    viewBox="0 0 80 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Base horizontal bar */}
    <rect x="2" y="38" width="76" height="2.5" rx="1.25" fill="white" />

    {/* Left outer pillar */}
    <rect x="6"  y="24" width="5" height="14" rx="1" fill="white" />
    {/* Left flag tip */}
    <path d="M6 24 L8.5 18 L11 24Z" fill="white" />

    {/* Left inner pillar */}
    <rect x="17" y="18" width="5" height="20" rx="1" fill="white" />
    {/* Left inner flag tip */}
    <path d="M17 18 L19.5 12 L22 18Z" fill="white" />

    {/* Center pillar — tallest */}
    <rect x="37.5" y="8" width="5" height="30" rx="1" fill="white" />
    {/* Center flag tip */}
    <path d="M37.5 8 L40 2 L42.5 8Z" fill="white" />

    {/* Right inner pillar */}
    <rect x="58" y="18" width="5" height="20" rx="1" fill="white" />
    {/* Right inner flag tip */}
    <path d="M58 18 L60.5 12 L63 18Z" fill="white" />

    {/* Right outer pillar */}
    <rect x="69" y="24" width="5" height="14" rx="1" fill="white" />
    {/* Right flag tip */}
    <path d="M69 24 L71.5 18 L74 24Z" fill="white" />
  </svg>
)

function ContactSection() {
  const [value, setValue] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    setSent(true)
  }

  return (
    <section className="ct-section" id="contacts">

      {/* Left car */}
      <img
        src="/car/21.jpg"
        alt=""
        aria-hidden="true"
        className="ct-car ct-car--left"
        draggable={false}
      />

      {/* Right car */}
      <img
        src="/car/21.jpg"
        alt=""
        aria-hidden="true"
        className="ct-car ct-car--right"
        draggable={false}
      />

      {/* Center content */}
      <div className="ct-body">
        <HongqiMark />

        <h2 className="ct-title">
          ЗАИНТЕРЕСОВАЛИСЬ<br />ПОКУПКОЙ?
        </h2>

        <p className="ct-desc">
          Оставьте свою эл. почту и наши сотрудники свяжутся с вами и проведут<br />
          подробную консультацию по всем вашим требованиям и вопросам.
        </p>

        {!sent ? (
          <form className="ct-form" onSubmit={handleSubmit} noValidate>
            <input
              className="ct-input"
              type="text"
              placeholder="Эл.почта/Номер телефона"
              value={value}
              onChange={e => setValue(e.target.value)}
              required
            />
            <button type="submit" className="ct-btn">
              Оставить заявку
            </button>
          </form>
        ) : (
          <div className="ct-success">
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2.5" />
              <path d="M14 24l7 7 13-14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Заявка принята! Скоро свяжемся с вами.</span>
          </div>
        )}
      </div>

    </section>
  )
}

export default ContactSection
