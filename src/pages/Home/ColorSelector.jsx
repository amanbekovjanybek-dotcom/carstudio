import { useState } from 'react'
import './ColorSelector.css'

const models = [
  {
    name: 'LiXiang L9',
    desc: 'Минималистичный дизайн. Мощное исполнение. LiXiang L9 переносит впечатления от вождения в постбензиновую эпоху.',
  },
  {
    name: 'Hongqi',
    desc: 'Роскошь и технологии будущего. Hongqi воплощает величие китайского автопрома на мировой арене.',
  },
  {
    name: 'Geely',
    desc: 'Яркий характер и передовые технологии. Geely задаёт новые стандарты доступного премиум-сегмента.',
  },
  {
    name: 'ZEEKR 001',
    desc: 'Спортивный характер и электрическая мощь. ZEEKR 001 создан для тех, кто не идёт на компромиссы.',
  },
]

const colors = [
  { name: 'Белый перламутр',   hex: '#F0F0F0', img: '/car1-5/Property 1=White.jpg' },
  { name: 'Серый металлик',    hex: '#9A9A9A', img: '/car1-5/Property 1=Grey.jpg'  },
  { name: 'Чёрный металлик',   hex: '#1A1A1A', img: '/car1-5/Property 1=Black.jpg' },
]

function ColorSelector() {
  const [modelIdx, setModelIdx]   = useState(0)
  const [colorIdx, setColorIdx]   = useState(0)
  const [fading,   setFading]     = useState(false)

  const model = models[modelIdx]
  const color = colors[colorIdx]

  const goModel = (dir) => {
    setFading(true)
    setTimeout(() => {
      setModelIdx((prev) => (prev + dir + models.length) % models.length)
      setFading(false)
    }, 350)
  }

  const changeColor = (i) => {
    setColorIdx(i)
  }

  return (
    <section className="cs2-section">

      {/* Vertical label */}
      <div className="cs2-vertical" aria-hidden="true">ЦВЕТ</div>

      {/* Top row: title + description */}
      <div className="cs2-top">
        <h2 className="cs2-title">Выбери<br />свой цвет</h2>
        <p className="cs2-desc">{model.desc}</p>
      </div>

      {/* Car image — all 3 stacked, active one visible */}
      <div className="cs2-car-wrap">
        {colors.map((c, i) => (
          <img
            key={i === colorIdx ? `active-${colorIdx}` : c.img}
            src={c.img}
            alt={c.name}
            className={`cs2-car${i === colorIdx ? ' cs2-car--active' : ''}`}
            draggable={false}
          />
        ))}
        <div className="cs2-car-shadow" />
      </div>

      {/* Bottom row */}
      <div className="cs2-bottom">

        {/* Left: arrows + model names (like block 4) */}
        <nav className="cs2-nav">
          <div className="cs2-nav__arrows">
            <button className="cs2-nav__arrow" onClick={() => goModel(-1)} aria-label="Предыдущая">
              <svg width="18" height="12" viewBox="0 0 22 12" fill="none">
                <path d="M6 1L1 6l5 5M1 6h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="cs2-nav__arrow" onClick={() => goModel(1)} aria-label="Следующая">
              <svg width="18" height="12" viewBox="0 0 22 12" fill="none">
                <path d="M16 1l5 5-5 5M21 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <ul className="cs2-nav__list">
            {models.map((m, i) => (
              <li key={m.name}>
                <button
                  className={`cs2-nav__item${i === modelIdx ? ' cs2-nav__item--active' : ''}`}
                  onClick={() => { setFading(true); setTimeout(() => { setModelIdx(i); setFading(false) }, 350) }}
                >
                  {m.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: 360° button + color picker */}
        <div className="cs2-right">
          <button className="cs2-btn360" aria-label="Просмотр 360°">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a10 10 0 0 1 7.39 16.74" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
              <path d="M12 22a10 10 0 0 1-7.39-16.74" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
              <polyline points="16 17 19.39 18.74 21 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="8 7 4.61 5.26 3 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>360°</span>
          </button>

          <div className="cs2-colors">
            {colors.map((c, i) => (
              <button
                key={c.name}
                className={`cs2-color-btn${i === colorIdx ? ' cs2-color-btn--active' : ''}`}
                style={{ background: c.hex }}
                onClick={() => changeColor(i)}
                title={c.name}
                aria-label={c.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Color name */}
      <p className="cs2-color-name" key={colorIdx}>{color.name}</p>

    </section>
  )
}

export default ColorSelector
