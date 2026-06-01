import './AboutHero.css'

const BergMark = () => (
  <svg className="ab-mark" width="72" height="40" viewBox="0 0 80 44" fill="none" aria-hidden="true">
    <rect x="2"    y="38" width="76" height="2.5" rx="1.25" fill="white" />
    <rect x="6"    y="24" width="5"  height="14"  rx="1"    fill="white" />
    <path d="M6 24 L8.5 18 L11 24Z"             fill="white" />
    <rect x="17"   y="18" width="5"  height="20"  rx="1"    fill="white" />
    <path d="M17 18 L19.5 12 L22 18Z"           fill="white" />
    <rect x="37.5" y="8"  width="5"  height="30"  rx="1"    fill="white" />
    <path d="M37.5 8 L40 2 L42.5 8Z"            fill="white" />
    <rect x="58"   y="18" width="5"  height="20"  rx="1"    fill="white" />
    <path d="M58 18 L60.5 12 L63 18Z"           fill="white" />
    <rect x="69"   y="24" width="5"  height="14"  rx="1"    fill="white" />
    <path d="M69 24 L71.5 18 L74 24Z"           fill="white" />
  </svg>
)

function AboutHero() {
  return (
    <section className="ab-hero">
      <img
        src="/car/d8f0827443b3a02a522baa39e1a6b7c7c7390b4b.png"
        alt=""
        aria-hidden="true"
        className="ab-hero__bg"
      />
      <div className="ab-hero__overlay" />

      <div className="ab-hero__content">
        <BergMark />
        <h1 className="ab-hero__title">
          ВАШ ИДЕАЛЬНЫЙ ПОМОЩНИК<br />
          В МИРЕ КИТАЙСКИХ АВТО
        </h1>
      </div>
    </section>
  )
}

export default AboutHero
