import { useState, useRef, useEffect } from 'react'
import './DeliverySection.css'

const pins = [
  { name: 'Нью-Йорк',  country: 'США',      left: 26, top: 38 },
  { name: 'Сан-Паулу', country: 'Бразилия',  left: 35, top: 56 },
  { name: 'Берлин',    country: 'Германия',   left: 47, top: 27 },
  { name: 'Москва',    country: 'Россия',     left: 63, top: 22 },
  { name: 'Сингапур',  country: 'Сингапур',  left: 80, top: 57 },
]

function DeliverySection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="ds-section">

      <h2 className="ds-title">Доставим в любую точку мира</h2>

      <div className="ds-map-container">
        <svg
          viewBox="-20 0 1260 580"
          className="ds-map-svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="dg" cx="35%" cy="32%" r="68%" fx="35%" fy="32%">
              <stop offset="0%"   stopColor="#DCDCDC" />
              <stop offset="100%" stopColor="#A0A0A0" />
            </radialGradient>
            <pattern id="dots" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse">
              <circle cx="5.5" cy="5.5" r="2.6" fill="url(#dg)" />
            </pattern>
          </defs>

          {/* Each continent gets a class + inView-driven opacity */}
          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0s' }} d="
            M 148,58  L 125,78  L 110,108 L 112,140 L 125,170
            L 140,198 L 158,225 L 175,252 L 195,268 L 218,272
            L 245,265 L 270,252 L 298,235 L 318,215 L 335,190
            L 345,162 L 340,132 L 325,105 L 302,84  L 275,68
            L 245,60  L 212,57  L 180,58 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.08s' }} d="
            M 272,18 L 255,32 L 258,52 L 276,62 L 300,60
            L 318,48 L 315,30 L 298,20 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.18s' }} d="
            M 215,292 L 198,312 L 190,345 L 192,380
            L 204,415 L 220,450 L 244,480 L 268,498
            L 292,492 L 312,472 L 325,442 L 328,408
            L 318,375 L 308,342 L 292,315 L 272,300 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.28s' }} d="
            M 460,78  L 445,95  L 450,112 L 465,126
            L 490,130 L 518,124 L 542,114 L 558,100
            L 568,115 L 560,132 L 544,146 L 522,156
            L 500,158 L 482,166 L 495,180 L 520,186
            L 548,180 L 572,164 L 586,146 L 592,126
            L 582,104 L 564,86  L 540,74  L 512,70  L 484,72 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.36s' }} d="
            M 462,225 L 448,252 L 448,288 L 454,326
            L 466,364 L 482,402 L 504,438 L 532,464
            L 562,478 L 592,470 L 616,450 L 630,418
            L 630,384 L 620,348 L 608,312 L 596,276
            L 588,240 L 574,220 L 554,210 L 528,208
            L 502,214 L 480,222 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.44s' }} d="
            M 575,68  L 555,85  L 560,108 L 580,122
            L 614,120 L 652,112 L 696,105 L 740,98
            L 784,92  L 828,86  L 870,80  L 912,76
            L 952,74  L 990,80  L 1025,92 L 1055,108
            L 1072,132 L 1068,160 L 1052,188 L 1028,210
            L 996,228 L 962,238 L 926,240 L 892,238
            L 864,248 L 844,268 L 826,288 L 806,300
            L 786,298 L 766,282 L 746,268 L 726,272
            L 706,285 L 682,292 L 658,285 L 636,268
            L 616,250 L 598,240 L 580,224 L 570,198
            L 570,170 L 574,142 L 572,116 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.52s' }} d="
            M 688,245 L 672,265 L 665,293 L 672,326
            L 686,354 L 706,370 L 724,360 L 737,336
            L 740,305 L 733,275 L 718,255 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.58s' }} d="
            M 828,300 L 814,318 L 812,340 L 824,358
            L 846,364 L 866,356 L 878,338 L 874,316
            L 858,302 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.62s' }} d="
            M 1005,145 L 998,160 L 1003,178 L 1017,183
            L 1028,172 L 1024,156 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.68s' }} d="
            M 870,388 L 853,414 L 854,448 L 866,478
            L 890,504 L 920,516 L 952,513 L 982,498
            L 1004,476 L 1014,450 L 1012,420 L 998,398
            L 974,386 L 948,380 L 920,380 L 894,384 Z
          " fill="url(#dots)" />

          <path className={`ds-continent${inView ? ' ds-continent--on' : ''}`} style={{ animationDelay: '0.74s' }} d="
            M 1046,453 L 1038,470 L 1043,488 L 1057,493
            L 1064,478 L 1059,460 Z
          " fill="url(#dots)" />

        </svg>

        {/* Pins appear after map */}
        {pins.map((p, i) => (
          <div
            key={p.name}
            className={`ds-pin${inView ? ' ds-pin--on' : ''}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${0.9 + i * 0.18}s`,
            }}
          >
            <div className="ds-pin__inner">
              <svg width="30" height="38" viewBox="0 0 32 40" fill="none">
                <path
                  d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 24 16 24s16-15.163 16-24C32 7.163 24.837 0 16 0Z"
                  fill="#2D7A4F"
                />
                <circle cx="16" cy="15" r="6" fill="#fff" />
              </svg>
              <div className="ds-pin__tooltip">
                <strong>{p.name}</strong>
                <span>{p.country}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default DeliverySection
