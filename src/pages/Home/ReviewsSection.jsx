import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './ReviewsSection.css'

const reviews = [
  {
    name: 'Ольга Петрова',
    role: 'Менеджер по работе с клиентами',
    avatar: 'https://i.pravatar.cc/80?img=47',
    text: '«Отличный сервис! Команда Berg Group помогла нам с выбором автомобиля, подобрав оптимальный вариант по нашему бюджету. Доставка прошла точно в срок, все документы оформлены безупречно.»',
  },
  {
    name: 'Александр Иванов',
    role: 'Главный инженер',
    avatar: 'https://i.pravatar.cc/80?img=12',
    text: '«Долго искал надёжного партнёра для закупки корпоративного автопарка из Китая. Berg Group решили все вопросы — от выбора до таможни. Теперь только к ним.»',
  },
  {
    name: 'Дмитрий Смирнов',
    role: 'Директор по маркетингу',
    avatar: 'https://i.pravatar.cc/80?img=33',
    text: '«Приятно удивлён профессионализмом. Менеджеры всегда на связи, объяснили каждый шаг растаможки. Автомобиль пришёл в идеальном состоянии. Рекомендую!»',
  },
  {
    name: 'Наталья Кузнецова',
    role: 'Финансовый директор',
    avatar: 'https://i.pravatar.cc/80?img=56',
    text: '«Работаем с Berg Group уже второй год. Каждый раз — чёткость, прозрачность и никаких скрытых платежей. Лучшее предложение по соотношению цена/качество на рынке.»',
  },
  {
    name: 'Михаил Соколов',
    role: 'Генеральный директор',
    avatar: 'https://i.pravatar.cc/80?img=68',
    text: '«Брали Hongqi H9 для представительских нужд. Процесс от заявки до получения занял три недели. Всё чисто, без сюрпризов. Очень доволен результатом.»',
  },
  {
    name: 'Екатерина Волкова',
    role: 'Руководитель отдела закупок',
    avatar: 'https://i.pravatar.cc/80?img=44',
    text: '«Искала электромобиль с хорошим запасом хода. Berg Group подобрали несколько вариантов, объяснили разницу и не давили на выбор. Купила Hongqi EH7 — в восторге!»',
  },
  {
    name: 'Роман Беляев',
    role: 'IT-предприниматель',
    avatar: 'https://i.pravatar.cc/80?img=15',
    text: '«Сравнивал несколько компаний по доставке авто из Китая. Berg Group выиграли по прозрачности ценообразования и скорости ответа. Сделка прошла гладко.»',
  },
]

function ReviewsSection() {
  const [current, setCurrent] = useState(0)
  const swiperRef = useRef(null)

  const goTo = (i) => swiperRef.current?.slideToLoop(i)

  return (
    <section className="rv-section">
      {/* Left vertical label */}
      <div className="rv-left">
        <span className="rv-label">ОТЗЫВЫ</span>
        <div className="rv-line" />
      </div>

      {/* Main content */}
      <div className="rv-content">
        <h2 className="rv-title">Наши клиенты</h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.15}
          spaceBetween={24}
          loop={true}
          speed={700}
          grabCursor={true}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(s) => { swiperRef.current = s }}
          onSlideChange={(s) => setCurrent(s.realIndex)}
          breakpoints={{
            640:  { slidesPerView: 1.6, spaceBetween: 28 },
            900:  { slidesPerView: 2.2, spaceBetween: 32 },
            1200: { slidesPerView: 2.6, spaceBetween: 36 },
          }}
          className="rv-swiper"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="rv-card">
                <img src={r.avatar} alt={r.name} className="rv-avatar" />
                <p className="rv-name">{r.name}</p>
                <p className="rv-role">{r.role}</p>
                <p className="rv-text">{r.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Indicators — centered, like block 3 */}
        <div className="rv-indicators">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`rv-indicator${i === current ? ' rv-indicator--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
