import './WorkProcess.css'

const brands = [
  {
    name: 'Li Auto',
    svg: (
      <svg viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="34" fontFamily="serif" fontSize="32" fontWeight="700" fill="currentColor" letterSpacing="2">理想</text>
        <text x="78" y="34" fontFamily="sans-serif" fontSize="11" fontWeight="400" fill="currentColor" letterSpacing="1">AUTO</text>
      </svg>
    ),
  },
  {
    name: 'AVATR',
    svg: (
      <svg viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="60" y="26" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="currentColor" letterSpacing="3" textAnchor="middle">AVATR</text>
        <text x="60" y="42" fontFamily="serif" fontSize="11" fontWeight="400" fill="currentColor" letterSpacing="2" textAnchor="middle">阿维塔</text>
      </svg>
    ),
  },
  {
    name: 'GEELY',
    svg: (
      <svg viewBox="0 0 130 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="25" cy="25" r="13" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="5" x2="25" y2="45" stroke="currentColor" strokeWidth="1" />
        <line x1="5" y1="25" x2="45" y2="25" stroke="currentColor" strokeWidth="1" />
        <text x="55" y="30" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="2">GEELY</text>
      </svg>
    ),
  },
  {
    name: 'Lotus',
    svg: (
      <svg viewBox="0 0 100 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="27" rx="46" ry="23" stroke="currentColor" strokeWidth="1.5" />
        <text x="50" y="22" fontFamily="serif" fontSize="11" fontWeight="700" fill="currentColor" letterSpacing="2" textAnchor="middle">LOTUS</text>
        <path d="M30 30 Q50 42 70 30" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M36 34 Q50 44 64 34" stroke="currentColor" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
  {
    name: 'ZEEKR',
    svg: (
      <svg viewBox="0 0 130 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="30" height="30" stroke="currentColor" strokeWidth="1.8" rx="2" />
        <line x1="4" y1="25" x2="34" y2="25" stroke="currentColor" strokeWidth="1.2" />
        <line x1="19" y1="10" x2="19" y2="40" stroke="currentColor" strokeWidth="1.2" />
        <text x="48" y="31" fontFamily="sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="2">ZEEKR</text>
      </svg>
    ),
  },
]

const cards = [
  {
    title: 'Машина мечты',
    desc: 'Выберите свою машину мечты и свяжитесь с нами или оставьте свой номер телефона или почту и мы свяжемся.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 38h44M12 38l5-12h26l5 12" />
        <path d="M17 26l3-8h20l3 8" />
        <circle cx="18" cy="42" r="4" />
        <circle cx="42" cy="42" r="4" />
        <circle cx="44" cy="16" r="9" />
        <line x1="51" y1="23" x2="56" y2="28" />
        <line x1="40" y1="16" x2="48" y2="16" />
        <line x1="44" y1="12" x2="44" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Заказ авто',
    desc: 'По вашему запросу обращаемся напрямую к компаниям авто. Не сотрудничаем с импортерами и дилерскими центрами.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="8" width="28" height="36" rx="3" />
        <line x1="18" y1="18" x2="34" y2="18" />
        <line x1="18" y1="24" x2="34" y2="24" />
        <line x1="18" y1="30" x2="28" y2="30" />
        <path d="M38 34 L44 28 L50 40 L32 40 L38 34Z" fill="currentColor" stroke="none" opacity="0.15" />
        <path d="M38 34 L44 28 L50 40 L32 40 Z" />
      </svg>
    ),
  },
  {
    title: 'Доставка авто',
    desc: 'Берём на себя доставку, растаможку и подготавливаем полный пакет документов для постановки на учёт в РФ.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="30" r="5" />
        <circle cx="48" cy="30" r="5" />
        <circle cx="30" cy="14" r="5" />
        <path d="M17 30 Q24 30 25 14" />
        <path d="M35 14 Q36 30 43 30" />
        <path d="M17 30 Q30 44 43 30" strokeDasharray="4 3" />
        <polyline points="44,24 48,30 44,36" />
      </svg>
    ),
  },
  {
    title: 'Получение авто',
    desc: 'Доставим ваш автомобиль мечты в любой из городов РФ и оповестим вас с такой радостной новостью.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 36h44M12 36l5-11h26l5 11" />
        <path d="M17 25l3-8h20l3 8" />
        <circle cx="18" cy="40" r="4" />
        <circle cx="42" cy="40" r="4" />
        <circle cx="44" cy="12" r="10" />
        <polyline points="38,12 42,16 51,8" />
      </svg>
    ),
  },
]

function WorkProcess() {
  return (
    <section className="work-process">
      {/* Brands bar */}
      <div className="brands-bar">
        <div className="brands-inner">
          {brands.map((b) => (
            <div key={b.name} className="brand-logo" title={b.name}>
              {b.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="work-container">
        <h2 className="work-title">Вашему вниманию<br />наш процесс работы</h2>

        <div className="process-cards">
          {cards.map((card) => (
            <div key={card.title} className="process-card">
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
