import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './HongqiSelector.css'

const slides = [
  { img: '/car/Property 1=01.jpg', name: 'Hongqi EH7' },
  { img: '/car/Property 1=02.jpg', name: 'Hongqi H9' },
  { img: '/car/Property 1=03.jpg', name: 'Hongqi E-HS9' },
  { img: '/car/Property 1=04.jpg', name: 'Hongqi HQ9' },
]

const specs = [
  { value: '480',    unit: 'км',  label: 'Запас хода' },
  { value: '320',    unit: 'kW',  label: 'Мощность' },
  { value: '11 000', unit: 'LBS', label: 'Тяга' },
]

function HongqiSelector() {
  const [current, setCurrent] = useState(0)
  const swiperRef = useRef(null)

  const goPrev = () => swiperRef.current?.slidePrev()
  const goNext = () => swiperRef.current?.slideNext()
  const goTo   = (i) => swiperRef.current?.slideToLoop(i)

  return (
    <section className="hq-section">
      {/* Watermark */}
      <div className="hq-watermark" aria-hidden="true">ИДЕАЛ</div>

      {/* Vertical text */}
      <div className="hq-vertical-text" aria-hidden="true">ВЫБЕРИ СВОЙ АВТОМОБИЛЬ</div>

      {/* Header */}
      <div className="hq-header">
        <div className="hq-logo" aria-label="Hongqi">
          <svg width="72" height="48" viewBox="0 0 72 48" fill="none">
            <path d="M36 4 L10 24 L36 44 L62 24 Z" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
            <path d="M36 10 L16 24 L36 38 L56 24 Z" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
            <path d="M36 4 L36 44" stroke="#1A1A1A" strokeWidth="1.5"/>
            <path d="M10 24 L62 24" stroke="#1A1A1A" strokeWidth="1.5"/>
            <circle cx="36" cy="24" r="4" fill="#1A1A1A"/>
          </svg>
        </div>
        <h2 className="hq-title">
          Разумный выбор<br />для семейной поездки
        </h2>
        <p className="hq-brand">Hongqi</p>
      </div>

      {/* Slider */}
      <div className="hq-slider-outer">
        <Swiper
          modules={[Autoplay]}
          centeredSlides
          slidesPerView={1.5}
          spaceBetween={24}
          loop
          speed={700}
          autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(s) => { swiperRef.current = s }}
          onSlideChange={(s) => setCurrent(s.realIndex)}
          breakpoints={{
            0:    { slidesPerView: 1.1, spaceBetween: 12 },
            600:  { slidesPerView: 1.3, spaceBetween: 20 },
            1024: { slidesPerView: 1.5, spaceBetween: 24 },
          }}
          className="hq-swiper"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="hq-slide">
                <img
                  src={s.img}
                  alt={s.name}
                  className="hq-slide__img"
                  loading="lazy"
                  draggable={false}
                />
                <div className="hq-slide__shadow" />
                <p className="hq-slide__name">{s.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left arrow — green */}
        <button className="hq-arrow hq-arrow--left" onClick={goPrev} aria-label="Предыдущий">
          <svg width="20" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M8 1L1 8l7 7M1 8h20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Right arrow — white */}
        <button className="hq-arrow hq-arrow--right" onClick={goNext} aria-label="Следующий">
          <svg width="20" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M14 1l7 7-7 7M21 8H1" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Swipe circle */}
        <div className="hq-swipe-btn" aria-hidden="true">
          <span>Свайп</span>
        </div>
      </div>

      {/* Indicators */}
      <div className="hq-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hq-indicator${i === current ? ' hq-indicator--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>

      {/* Info section */}
      <div className="hq-info">
        <div className="hq-desc">
          <p>
            Электродвигатели производят мгновенный крутящий момент или
            силу вращения, а это означает, что электромобили могут быстро
            ускоряться после остановки.
          </p>
          <button className="hq-more-btn">УЗНАТЬ БОЛЬШЕ +</button>
        </div>

        <div className="hq-specs">
          {specs.map((sp) => (
            <div key={sp.label} className="hq-spec">
              <div className="hq-spec__value">
                {sp.value}<sup>{sp.unit}</sup>
              </div>
              <div className="hq-spec__label">{sp.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HongqiSelector
