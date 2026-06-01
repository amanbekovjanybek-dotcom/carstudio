import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CARS } from './catalogData'
import './Catalog.css'

function fmt(n) {
  return n.toLocaleString('ru-RU') + ' ₽'
}

/* ── Форма заказа звонка ── */
function OrderModal({ carName, onClose }) {
  const [name, setName]       = useState('')
  const [phone, setPhone]     = useState('')
  const [comment, setComment] = useState('')
  const [sent, setSent]       = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setSent(true)
  }

  return (
    <div className="om-overlay" onClick={onClose}>
      <div className="om-modal" onClick={e => e.stopPropagation()}>
        <div className="om-head">
          <h3 className="om-title">Заказать звонок</h3>
          <button className="om-close" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {sent ? (
          <div className="om-success">
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="#1A9141" strokeWidth="2.5"/>
              <path d="M14 24l7 7 13-14" stroke="#1A9141" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Заявка принята! Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form className="om-form" onSubmit={handleSubmit} noValidate>
            <div className="om-row">
              <div className="om-field">
                <label>Имя*</label>
                <input
                  type="text"
                  placeholder="Напишите имя"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className="om-field">
                <label>Телефон*</label>
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="om-field">
              <label>Комментарий</label>
              <textarea
                placeholder="Напишите комментарий по желанию"
                value={comment}
                onChange={e => setComment(e.target.value)}
                rows={4}
              />
            </div>
            <p className="om-disclaimer">
              Нажимая на кнопку "Заказать звонок", вы даете согласие на обработку персональных
              данных и соглашаетесь с условиями политики конфиденциальности.
            </p>
            <button type="submit" className="om-btn">Заказать звонок</button>
          </form>
        )}
      </div>
    </div>
  )
}

/* ── Модальное окно ── */
function CarModal({ car, onClose }) {
  const [imgIdx, setImgIdx]     = useState(0)
  const [showOrder, setShowOrder] = useState(false)
  const images = car.images
  const THUMB_MAX = 6
  const hidden = Math.max(0, images.length - THUMB_MAX)

  function prev() { setImgIdx(i => (i - 1 + images.length) % images.length) }
  function next() { setImgIdx(i => (i + 1) % images.length) }

  return (
    <div className="cm-overlay" onClick={onClose}>
      <div className="cm-modal" onClick={e => e.stopPropagation()}>

        {/* Крестик */}
        <button className="cm-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Левая часть */}
        <div className="cm-left">
          <h2 className="cm-title">{car.name}</h2>

          {/* Главное фото */}
          <div className="cm-main-img">
            <img src={images[imgIdx]} alt={car.name} />
            <div className="cm-img-nav">
              <button className="cm-nav-btn" onClick={prev}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <polyline points="15,18 9,12 15,6" />
                </svg>
              </button>
              <button className="cm-nav-btn" onClick={next}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <polyline points="9,6 15,12 9,18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Миниатюры */}
          <div className="cm-thumbs">
            {images.slice(0, THUMB_MAX).map((src, i) => (
              <button
                key={i}
                className={`cm-thumb${imgIdx === i ? ' cm-thumb--active' : ''}`}
                onClick={() => setImgIdx(i)}
              >
                <img src={src} alt="" />
                {i === THUMB_MAX - 1 && hidden > 0 && (
                  <span className="cm-thumb-badge">+{hidden}</span>
                )}
              </button>
            ))}
          </div>

          {/* Цена */}
          <div className="cm-price-block">
            <p className="cm-price-label">
              {car.status === 'В пути' ? 'Цена в пути' : 'Цена'}
            </p>
            <p className="cm-price">{car.price.toLocaleString('ru-RU')} RUB</p>
          </div>

          {/* Кнопки */}
          <div className="cm-actions">
            <button className="cm-btn-primary" onClick={() => setShowOrder(true)}>Оставить заявку</button>
            <button className="cm-btn-phone">+7 777 123 34 56</button>
          </div>
        </div>

        {/* Правая часть — характеристики */}
        <div className="cm-right">
          <h3 className="cm-specs-title">Характеристики {car.name}</h3>
          <div className="cm-specs-body">
            {car.specs?.map((group, gi) => (
              <div key={gi} className="cm-specs-group">
                <p className="cm-specs-group-title">{group.group}</p>
                {group.items.map((s, i) => (
                  <div key={i} className="cm-specs-row">
                    <span className="cm-specs-label">{s.label}</span>
                    <span className="cm-specs-value">{s.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>

      {showOrder && (
        <OrderModal carName={car.name} onClose={() => setShowOrder(false)} />
      )}
    </div>
  )
}

/* ── Карточка ── */
function CarCard({ car, onOpen }) {
  return (
    <div className="car-card">
      <div className="car-card__img-wrap">
        <img src={car.images[0]} alt={car.name} />
        {car.status && (
          <span className={`car-card__badge car-card__badge--${car.status === 'В наличии' ? 'green' : 'gray'}`}>
            {car.status}
          </span>
        )}
      </div>
      <div className="car-card__body">
        <p className="car-card__type">{car.type}</p>
        <p className="car-card__name">{car.name}</p>
        <p className="car-card__price">{fmt(car.price)}</p>
        <button className="car-card__btn" onClick={() => onOpen(car)}>
          Подробнее
          {car.featured && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

/* ── Страница ── */
export default function Catalog() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="catalog-page">
      <div className="catalog-container">
        <div className="catalog-header">
          <h1 className="catalog-title">Авто в наличии</h1>
          <Link to="/configurator" className="catalog-cfg-btn">
            Конфигуратор авто
          </Link>
        </div>

        <div className="catalog-grid">
          {CARS.map(car => (
            <CarCard key={car.id} car={car} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <CarModal car={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
