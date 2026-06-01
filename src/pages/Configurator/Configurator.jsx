import { useState, useEffect, useRef } from 'react'
import { CARS, RATES } from './carData'
import './Configurator.css'

/* ─── Lighting presets ─── */
const LIGHTING = [
  { id: 'daylight',  label: 'Daylight',    bg: 'linear-gradient(160deg,#c8d8e4 0%,#8fafc0 100%)', carFilter: '' },
  { id: 'sunset',    label: 'Sunset',      bg: 'linear-gradient(160deg,#ff6b35 0%,#c0392b 100%)', carFilter: 'sepia(20%) saturate(1.2)' },
  { id: 'night',     label: 'Night',       bg: 'linear-gradient(160deg,#060b14 0%,#111c2e 100%)', carFilter: 'brightness(0.82) contrast(1.1)' },
  { id: 'cyberpunk', label: 'Cyberpunk',   bg: 'linear-gradient(160deg,#0d0a2e 0%,#1a053a 100%)', carFilter: 'hue-rotate(220deg) saturate(0.65)' },
  { id: 'golden',    label: 'Golden Hour', bg: 'linear-gradient(160deg,#f9c74f 0%,#e05c1a 100%)', carFilter: 'sepia(35%) saturate(1.15) brightness(1.05)' },
  { id: 'studio',    label: 'Studio',      bg: 'linear-gradient(160deg,#f5f5f5 0%,#dde2e6 100%)', carFilter: '' },
]

/* ─── Wheel SVG ─── */
function WheelSVG({ spokes, rimColor, spokeColor }) {
  const cx = 28, cy = 28, outerR = 24, hubR = 5
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx={cx} cy={cy} r={outerR} fill={rimColor} />
      {Array.from({ length: spokes }, (_, i) => {
        const a = (i * 360 / spokes) * Math.PI / 180
        return <line key={i}
          x1={cx + (hubR+1)*Math.cos(a)} y1={cy + (hubR+1)*Math.sin(a)}
          x2={cx + (outerR-2)*Math.cos(a)} y2={cy + (outerR-2)*Math.sin(a)}
          stroke={spokeColor} strokeWidth="2.5" strokeLinecap="round" />
      })}
      <circle cx={cx} cy={cy} r={hubR+1} fill="#222" />
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="#666" strokeWidth="2" />
    </svg>
  )
}

/* ─── Caliper SVG ─── */
function CaliperSVG({ hex }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="none" stroke={hex} strokeWidth="5" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * 45) * Math.PI / 180
        return <line key={i}
          x1={24 + 12*Math.cos(a)} y1={24 + 12*Math.sin(a)}
          x2={24 + 18*Math.cos(a)} y2={24 + 18*Math.sin(a)}
          stroke={hex} strokeWidth="1.5" />
      })}
      <circle cx="24" cy="24" r="11" fill="none" stroke={hex} strokeWidth="2" />
    </svg>
  )
}

function fmt(n) { return n.toLocaleString('ru-RU') }

export default function Configurator() {
  const [model,          setModel]          = useState('Lotus')
  const [submodel,       setSubmodel]       = useState('Eletre')
  const [trim,           setTrim]           = useState('S+')
  const [bodyColor,      setBodyColor]      = useState(0)
  const [interiorColor,  setInteriorColor]  = useState(0)
  const [wheel,          setWheel]          = useState(0)
  const [caliper,        setCaliper]        = useState(0)
  const [lightingIdx,    setLightingIdx]    = useState(0)
  const [viewMode,       setViewMode]       = useState('exterior')
  const [imgIdx,         setImgIdx]         = useState(0)
  const [currency,       setCurrency]       = useState('RUB')
  const [extras,         setExtras]         = useState([])
  const [showSpecs,      setShowSpecs]      = useState(false)

  const dragRef      = useRef(null)
  const autoRef      = useRef(null)

  const car       = CARS[model].submodels[submodel]
  const submodels = Object.keys(CARS[model].submodels)
  const light     = LIGHTING[lightingIdx]
  const aColor    = car.bodyColors[bodyColor]
  const aInt      = car.interiorColors[interiorColor]

  const images = viewMode === 'interior'
    ? (aInt.images?.length   ? aInt.images   : car.images)
    : (aColor.images?.length ? aColor.images : car.images)

  const safeIdx   = images.length ? imgIdx % images.length : 0
  const carFilter = viewMode === 'exterior' ? (aColor.filter || '') : ''

  const THUMB_MAX   = 5
  const hiddenCount = Math.max(0, images.length - THUMB_MAX)

  /* Auto-rotate */
  const startAuto = () => {
    clearInterval(autoRef.current)
    if (viewMode !== 'exterior' || images.length < 2) return
    autoRef.current = setInterval(() => setImgIdx(i => (i + 1) % images.length), 2200)
  }
  useEffect(() => { startAuto(); return () => clearInterval(autoRef.current) }, [viewMode, bodyColor, images.length])

  /* Drag */
  function onPointerDown(e) {
    clearInterval(autoRef.current)
    dragRef.current = { x: e.clientX, idx: safeIdx }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  function onPointerMove(e) {
    if (!dragRef.current) return
    const dx  = e.clientX - dragRef.current.x
    const ni  = ((dragRef.current.idx - Math.round(dx / 90)) % images.length + images.length) % images.length
    setImgIdx(ni)
  }
  function onPointerUp() {
    dragRef.current = null
    setTimeout(startAuto, 3000)
  }

  /* Prices */
  const usdTotal = car.customs + car.deliveryMoscow + car.commission + car.epts
  const totalRUB = Math.round(car.invoice.total * RATES.CNY + usdTotal * RATES.USD)
  const displayTotal =
    currency === 'RUB' ? `${fmt(totalRUB)} RUB` :
    currency === 'CNY' ? `${fmt(Math.round(totalRUB / RATES.CNY))} CNY` :
                         `${fmt(Math.round(totalRUB / RATES.USD))} USD`

  function selectBodyColor(i)    { setBodyColor(i);    setImgIdx(0); setViewMode('exterior') }
  function selectInteriorColor(i){ setInteriorColor(i); setImgIdx(0); setViewMode('interior') }
  function selectWheel(i)        { setWheel(i);         setViewMode('exterior') }
  function toggleExtra(i)        { setExtras(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i]) }

  function changeModel(m) {
    const firstSub = Object.keys(CARS[m].submodels)[0]
    setModel(m); setSubmodel(firstSub)
    setTrim(CARS[m].submodels[firstSub].trims[0])
    setBodyColor(0); setInteriorColor(0); setWheel(0); setCaliper(0); setImgIdx(0); setViewMode('exterior')
  }
  function changeSubmodel(s) {
    setSubmodel(s); setTrim(CARS[model].submodels[s].trims[0])
    setBodyColor(0); setInteriorColor(0); setWheel(0); setCaliper(0); setImgIdx(0); setViewMode('exterior')
  }

  return (
    <div className="cfg-page">
      <div className="cfg-container">

        {/* Header */}
        <div className="cfg-header">
          <h1 className="cfg-title">Конфигуратор {model} {submodel}</h1>
          <button className="cfg-specs-btn" onClick={() => setShowSpecs(v => !v)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            Характеристики авто
          </button>
        </div>

        {/* Body */}
        <div className="cfg-body">

          {/* ── Left column ── */}
          <div className="cfg-left">

            {/* View tabs */}
            <div className="cfg-view-tabs">
              <button className={`cfg-view-tab${viewMode==='exterior'?' cfg-view-tab--active':''}`}
                onClick={() => { setViewMode('exterior'); setImgIdx(0) }}>Экстерьер</button>
              <button className={`cfg-view-tab${viewMode==='interior'?' cfg-view-tab--active':''}`}
                onClick={() => { setViewMode('interior'); setImgIdx(0) }}>Интерьер</button>
            </div>

            {/* Gallery */}
            <div className="cfg-gallery">
              <div className="cfg-thumbs">
                {images.slice(0, THUMB_MAX).map((src, i) => (
                  <button key={i}
                    className={`cfg-thumb${safeIdx===i?' cfg-thumb--active':''}`}
                    onClick={() => setImgIdx(i)}>
                    <img src={src} alt="" style={{ filter: carFilter }} />
                    {i===THUMB_MAX-1 && hiddenCount>0 && (
                      <span className="cfg-thumb-badge">+{hiddenCount}</span>
                    )}
                  </button>
                ))}
              </div>

              <div className="cfg-main-img"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
                style={{ cursor: images.length > 1 ? 'grab' : 'default' }}>
                <img src={images[safeIdx]} alt={`${model} ${submodel}`}
                  style={{ filter: carFilter, transition: 'filter 0.3s ease' }}
                  draggable={false} />
                <div className="cfg-img-nav">
                  <button className="cfg-nav-btn"
                    onClick={() => setImgIdx(i => (i-1+images.length)%images.length)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <polyline points="15,18 9,12 15,6"/>
                    </svg>
                  </button>
                  <button className="cfg-nav-btn"
                    onClick={() => setImgIdx(i => (i+1)%images.length)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <polyline points="9,6 15,12 9,18"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Dropdowns */}
            <div className="cfg-selects">
              {[
                { label:'Модель',      val:model,   opts:Object.keys(CARS), onChange:e=>changeModel(e.target.value) },
                { label:'Подвид',      val:submodel, opts:submodels,          onChange:e=>changeSubmodel(e.target.value) },
                { label:'Комплектация',val:trim,     opts:car.trims,          onChange:e=>setTrim(e.target.value) },
              ].map(s => (
                <div key={s.label} className="cfg-select-group">
                  <label>{s.label}</label>
                  <div className="cfg-select-wrap">
                    <select value={s.val} onChange={s.onChange}>
                      {s.opts.map(o => <option key={o}>{o}</option>)}
                    </select>
                    <svg className="cfg-select-arrow" width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Colors */}
            <div className="cfg-options-row">
              <div className="cfg-option-group">
                <p className="cfg-option-label">Цвет кузова</p>
                <div className="cfg-swatches">
                  {car.bodyColors.map((c,i) => (
                    <button key={i}
                      className={`cfg-swatch${bodyColor===i?' cfg-swatch--active':''}`}
                      style={{ background:c.hex }}
                      onClick={() => selectBodyColor(i)} title={c.name} />
                  ))}
                </div>
                <p className="cfg-option-selected">
                  {aColor.name}<span className="cfg-option-price"> +{aColor.price} CNY</span>
                </p>
              </div>

              <div className="cfg-option-group">
                <p className="cfg-option-label">Цвет салона</p>
                <div className="cfg-swatches">
                  {car.interiorColors.map((c,i) => (
                    <button key={i}
                      className={`cfg-swatch${interiorColor===i?' cfg-swatch--active':''}`}
                      style={{ background:c.hex }}
                      onClick={() => selectInteriorColor(i)} title={c.name} />
                  ))}
                </div>
                <p className="cfg-option-selected">
                  {aInt.name}<span className="cfg-option-price"> +{aInt.price} CNY</span>
                </p>
              </div>
            </div>

            {/* Wheels + Calipers */}
            <div className="cfg-options-row">
              <div className="cfg-option-group">
                <p className="cfg-option-label">Колёса</p>
                <div className="cfg-wheels">
                  {car.wheels.map((w,i) => (
                    <button key={i}
                      className={`cfg-wheel-btn${wheel===i?' cfg-wheel-btn--active':''}`}
                      onClick={() => selectWheel(i)}>
                      <WheelSVG spokes={w.spokes} rimColor={w.rimColor} spokeColor={w.spokeColor} />
                    </button>
                  ))}
                </div>
                <p className="cfg-option-selected">
                  {car.wheels[wheel].name}<span className="cfg-option-price"> +{car.wheels[wheel].price} CNY</span>
                </p>
              </div>

              <div className="cfg-option-group">
                <p className="cfg-option-label">Цвет суппорта</p>
                <div className="cfg-calipers">
                  {car.caliperColors.map((c,i) => (
                    <button key={i}
                      className={`cfg-caliper-btn${caliper===i?' cfg-caliper-btn--active':''}`}
                      onClick={() => setCaliper(i)} title={c.name}>
                      <CaliperSVG hex={c.hex} />
                    </button>
                  ))}
                </div>
                <p className="cfg-option-selected">
                  <span className="cfg-option-price">+{car.caliperColors[caliper].price} CNY</span>
                </p>
              </div>
            </div>

            {/* Lighting */}
            <div className="cfg-option-group">
              <p className="cfg-option-label">Освещение</p>
              <div className="cfg-lighting-row">
                {LIGHTING.map((l,i) => (
                  <button key={l.id}
                    className={`cfg-light-btn${lightingIdx===i?' cfg-light-btn--active':''}`}
                    onClick={() => setLightingIdx(i)}>
                    <span className="cfg-light-dot" style={{ background:l.bg }} />
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="cfg-extras">
              <p className="cfg-option-label">Дополнительные опции</p>
              <div className="cfg-extras-list">
                {car.extras.map((ex,i) => (
                  <label key={i} className="cfg-extra-item">
                    <input type="checkbox" checked={extras.includes(i)} onChange={() => toggleExtra(i)} />
                    <span>{ex.name} <span className="cfg-option-price">+ {fmt(ex.price)} CNY</span></span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            {car.description && (
              <div className="cfg-desc">
                <h2 className="cfg-desc-title">{car.description.title}</h2>
                <p className="cfg-desc-text">{car.description.text}</p>
              </div>
            )}
          </div>

          {/* ── Right: price panel ── */}
          <div className="cfg-price-panel">
            <h3 className="cfg-price-title">Расчет суммы</h3>
            <div className="cfg-price-rows">
              <div className="cfg-price-row cfg-price-row--main">
                <span>Инвойс</span><span>{fmt(car.invoice.total)} CNY</span>
              </div>
              <div className="cfg-price-row cfg-price-row--sub">
                <span>Цена авто в Китае с документами</span><span>{fmt(car.invoice.carPrice)} CNY</span>
              </div>
              <div className="cfg-price-row cfg-price-row--sub">
                <span>Доставка до Сочи</span><span>{fmt(car.invoice.deliverySochi)} CNY</span>
              </div>
              <div className="cfg-price-row"><span>Таможня</span><span>{fmt(car.customs)} $</span></div>
              <div className="cfg-price-row"><span>Доставка до Москвы</span><span>{fmt(car.deliveryMoscow)} $</span></div>
              <div className="cfg-price-row"><span>Наша комиссия</span><span>{fmt(car.commission)} $</span></div>
              <div className="cfg-price-row"><span>ЭПТС</span><span>{fmt(car.epts)} $</span></div>
            </div>

            <div className="cfg-price-total-block">
              <p className="cfg-price-total-label">Итого</p>
              <p className="cfg-price-total">{displayTotal}</p>
              <p className="cfg-price-note">Включая {fmt(car.commission)}$ — комиссию Berg Group</p>
            </div>

            <div className="cfg-currency-tabs">
              {['RUB','CNY','USD'].map(c => (
                <button key={c}
                  className={`cfg-currency-tab${currency===c?' cfg-currency-tab--active':''}`}
                  onClick={() => setCurrency(c)}>{c}</button>
              ))}
            </div>

            <p className="cfg-rates">CNY = {RATES.CNY}₽ • USD = {RATES.USD}₽, {RATES.date}</p>
            <p className="cfg-disclaimer">Цена в рублях рассчитана по текущему курсу и может отличаться в момент заказа.</p>
            <button className="cfg-cta">Оставить заявку</button>
          </div>
        </div>

        {/* Media blocks */}
        {car.mediaBlocks?.map((block, i) => (
          <div key={i} className="cfg-media" style={{ marginTop:'48px' }}>
            <img src={block.src} alt={block.caption} />
            <div className="cfg-media-bottom">
              <p className="cfg-media-caption cfg-media-caption--static">{block.caption}</p>
              {block.stats && (
                <div className="cfg-tech-stats">
                  {block.stats.map((s,j) => (
                    <span key={j} className="cfg-tech-stat">
                      {j>0 && <span className="cfg-tech-divider">|</span>}
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

      </div>

      {/* Specs drawer */}
      {showSpecs && <div className="cfg-drawer-backdrop" onClick={() => setShowSpecs(false)} />}
      <div className={`cfg-drawer${showSpecs?' cfg-drawer--open':''}`}>
        <div className="cfg-drawer-head">
          <h3 className="cfg-drawer-title">Характеристики {model} {submodel}</h3>
          <button className="cfg-drawer-close" onClick={() => setShowSpecs(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="cfg-drawer-body">
          {car.specs?.map((group,gi) => (
            <div key={gi} className="cfg-drawer-group">
              <p className="cfg-drawer-group-title">{group.group}</p>
              {group.items.map((s,i) => (
                <div key={i} className="cfg-drawer-row">
                  <span className="cfg-drawer-label">{s.label}</span>
                  <span className="cfg-drawer-value">{s.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
