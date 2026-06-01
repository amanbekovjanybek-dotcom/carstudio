import './AboutBrands.css'

const brands = [
  {
    name: 'Li Auto',
    logo: (
      <span className="brand-liauto">
        <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
          <rect x="0" y="8" width="12" height="14" rx="1" fill="#999"/>
          <rect x="8" y="0" width="12" height="14" rx="1" fill="#bbb"/>
        </svg>
        <span>理想</span>
      </span>
    ),
  },
  {
    name: 'AVATR',
    logo: (
      <span className="brand-avatr">
        <span className="brand-avatr__cn">阿维塔</span>
        <span className="brand-avatr__en">AVATR</span>
      </span>
    ),
  },
  {
    name: 'GEELY',
    logo: (
      <span className="brand-geely">
        <svg width="48" height="30" viewBox="0 0 48 30" fill="none">
          <ellipse cx="24" cy="15" rx="23" ry="8" stroke="#999" strokeWidth="2" fill="none"/>
          <ellipse cx="24" cy="15" rx="16" ry="5.5" stroke="#999" strokeWidth="1.5" fill="none"/>
          <ellipse cx="24" cy="15" rx="9" ry="3" stroke="#999" strokeWidth="1.5" fill="none"/>
          <line x1="1" y1="15" x2="47" y2="15" stroke="#999" strokeWidth="1.5"/>
        </svg>
        <span>GEELY</span>
      </span>
    ),
  },
  {
    name: 'Lotus',
    logo: (
      <span className="brand-lotus">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <circle cx="19" cy="19" r="17" stroke="#999" strokeWidth="1.8" fill="none"/>
          <circle cx="19" cy="19" r="11" stroke="#999" strokeWidth="1.2" fill="none"/>
          <text x="19" y="23" textAnchor="middle" fontSize="9" fill="#999" fontFamily="serif" fontStyle="italic">Lotus</text>
        </svg>
      </span>
    ),
  },
  {
    name: 'ZEEKR',
    logo: (
      <span className="brand-zeekr">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="1" width="20" height="20" rx="3" stroke="#999" strokeWidth="1.8" fill="none"/>
          <path d="M6 7 L6 15 L16 15" stroke="#999" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <span>ZEEKR</span>
      </span>
    ),
  },
]

function AboutBrands() {
  return (
    <section className="ab-brands">
      <h2 className="ab-brands__title">Мы привозим</h2>

      <div className="ab-brands__list">
        {brands.map((b) => (
          <div className="ab-brands__item" key={b.name}>
            {b.logo}
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutBrands
