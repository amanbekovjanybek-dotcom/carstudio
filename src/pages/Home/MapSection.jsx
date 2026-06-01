import './MapSection.css'

function MapSection() {
  return (
    <section className="map-section" id="contacts-map">
      <h2 className="map-title">Контакты</h2>

      <div className="map-wrap">
        <iframe
          className="map-frame"
          title="Карта"
          src="https://maps.google.com/maps?q=55.778400,37.545700&z=16&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="map-info">
        <div className="map-info__item">
          <span className="map-info__icon">⛩</span>
          <div className="map-info__text">
            г. Москва, ул.Спортивная, дом 14,<br />
            строение 5, офис 88 (м. ЦСКА)
          </div>
        </div>

        <div className="map-info__item map-info__item--center">
          <p className="map-info__phone">+7 777 123 34 56</p>
          <p className="map-info__hours">Пн-Вс 10:00–21:00</p>
        </div>

        <div className="map-info__item map-info__item--right">
          <a href="mailto:berggroup@email.ru" className="map-info__email">
            berggroup@email.ru
          </a>
        </div>
      </div>
    </section>
  )
}

export default MapSection
