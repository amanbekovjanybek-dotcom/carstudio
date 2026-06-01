const LOTUS_SPECS = [
  {
    group: 'Основные',
    items: [
      { label: 'Батарея',                      value: '112 кВт·ч' },
      { label: 'Разгон от 0 до 100 км/ч',      value: '4.5 сек' },
      { label: 'Максимальная скорость',          value: '258 км/ч' },
      { label: 'Запас хода',                    value: '580 км (по циклу WLTP)' },
      { label: 'Мощность двигателя',            value: '603 л.с.' },
      { label: 'Крутящий момент',               value: '— Н·м' },
      { label: 'Привод',                        value: 'Полный (AWD)' },
      { label: 'Количество мест',               value: '5 взрослых' },
      { label: 'Вес',                           value: '— кг' },
      { label: 'Длина',                         value: '5 103 мм' },
      { label: 'Ширина',                        value: '2 019 мм' },
      { label: 'Высота',                        value: '1 630 мм' },
      { label: 'Объем грузового пространства',  value: '611 л' },
    ],
  },
  {
    group: 'Дополнительно',
    items: [
      { label: 'Мощность зарядки (AC)',         value: '22 кВт' },
      { label: 'Мощность зарядки (DC)',         value: '350 кВт' },
      { label: 'Зарядка 10–80% (DC)',           value: '20 мин' },
      { label: 'Колёсная база',                 value: '2 780 мм' },
      { label: 'Клиренс',                       value: '136–206 мм' },
      { label: 'Объём переднего багажника',     value: '46 л' },
      { label: 'Тип подвески',                 value: 'Активная многорычажная' },
      { label: 'Гарантия на батарею',          value: '8 лет / 160 000 км' },
    ],
  },
]

const ROLLS_SPECS = [
  {
    group: 'Основные',
    items: [
      { label: 'Двигатель',             value: 'Электро, 2 мотора' },
      { label: 'Мощность',              value: '584 л.с.' },
      { label: 'Крутящий момент',       value: '900 Н·м' },
      { label: 'Разгон 0–100 км/ч',    value: '4.5 сек' },
      { label: 'Максимальная скорость', value: '250 км/ч' },
      { label: 'Батарея',               value: '102 кВт·ч' },
      { label: 'Запас хода (WLTP)',     value: '520 км' },
      { label: 'Привод',                value: 'Полный (AWD)' },
      { label: 'Количество мест',       value: '4' },
      { label: 'Длина',                 value: '5 453 мм' },
      { label: 'Ширина',                value: '2 144 мм' },
      { label: 'Высота',                value: '1 573 мм' },
      { label: 'Снаряжённая масса',     value: '2 890 кг' },
    ],
  },
  {
    group: 'Дополнительно',
    items: [
      { label: 'Мощность зарядки (DC)', value: '195 кВт' },
      { label: 'Зарядка 10–80%',        value: '34 мин' },
      { label: 'Подвеска',              value: 'Пневматическая' },
      { label: 'Колёсная база',         value: '3 552 мм' },
      { label: 'Объём багажника',       value: '517 л' },
    ],
  },
]

const BENTLEY_SPECS = [
  {
    group: 'Основные',
    items: [
      { label: 'Двигатель',             value: 'W12, 6.0л Twin Turbo' },
      { label: 'Мощность',              value: '635 л.с.' },
      { label: 'Крутящий момент',       value: '900 Н·м' },
      { label: 'Разгон 0–100 км/ч',    value: '3.9 сек' },
      { label: 'Максимальная скорость', value: '306 км/ч' },
      { label: 'Коробка передач',       value: 'ZF 8-ступ. авт.' },
      { label: 'Привод',                value: 'Полный (AWD)' },
      { label: 'Количество мест',       value: '5' },
      { label: 'Длина',                 value: '5 141 мм' },
      { label: 'Ширина',                value: '1 998 мм' },
      { label: 'Высота',                value: '1 742 мм' },
      { label: 'Снаряжённая масса',     value: '2 468 кг' },
    ],
  },
  {
    group: 'Дополнительно',
    items: [
      { label: 'Расход топлива',        value: '14.7 л/100 км' },
      { label: 'Подвеска',              value: 'Пневматическая' },
      { label: 'Тормоза передние',      value: '420 мм, керамика' },
      { label: 'Колёсная база',         value: '2 995 мм' },
      { label: 'Объём багажника',       value: '608 л' },
    ],
  },
]

const PORSCHE_SPECS = [
  {
    group: 'Основные',
    items: [
      { label: 'Двигатель',             value: 'Электро, 2 мотора' },
      { label: 'Мощность',              value: '761 л.с. (Turbo GT)' },
      { label: 'Крутящий момент',       value: '1 000 Н·м' },
      { label: 'Разгон 0–100 км/ч',    value: '2.4 сек' },
      { label: 'Максимальная скорость', value: '260 км/ч' },
      { label: 'Батарея',               value: '105 кВт·ч' },
      { label: 'Запас хода (WLTP)',     value: '630 км' },
      { label: 'Привод',                value: 'Полный (AWD)' },
      { label: 'Количество мест',       value: '5' },
      { label: 'Длина',                 value: '4 963 мм' },
      { label: 'Ширина',                value: '1 966 мм' },
      { label: 'Высота',                value: '1 395 мм' },
    ],
  },
  {
    group: 'Дополнительно',
    items: [
      { label: 'Мощность зарядки (DC)', value: '270 кВт' },
      { label: 'Зарядка 10–80%',        value: '18 мин' },
      { label: 'Подвеска',              value: 'Активная PDCC' },
      { label: 'Колёсная база',         value: '2 900 мм' },
      { label: 'Объём багажника',       value: '407 л' },
    ],
  },
]

const LAMBORGHINI_SPECS = [
  {
    group: 'Основные',
    items: [
      { label: 'Двигатель',             value: 'V8 4.0л + 2 эл. мотора' },
      { label: 'Мощность',              value: '790 л.с.' },
      { label: 'Крутящий момент',       value: '950 Н·м' },
      { label: 'Разгон 0–100 км/ч',    value: '3.3 сек' },
      { label: 'Максимальная скорость', value: '305 км/ч' },
      { label: 'Коробка передач',       value: '8-ступ. авт.' },
      { label: 'Привод',                value: 'Полный (AWD)' },
      { label: 'Количество мест',       value: '5' },
      { label: 'Длина',                 value: '4 973 мм' },
      { label: 'Ширина',                value: '2 038 мм' },
      { label: 'Высота',                value: '1 638 мм' },
      { label: 'Снаряжённая масса',     value: '2 150 кг' },
    ],
  },
  {
    group: 'Дополнительно',
    items: [
      { label: 'Тип',                   value: 'Гибрид (PHEV)' },
      { label: 'Батарея',               value: '25.9 кВт·ч' },
      { label: 'Запас хода (эл.)',      value: '60 км' },
      { label: 'Тормоза',               value: 'Карбон-керамика' },
      { label: 'Объём багажника',       value: '616 л' },
    ],
  },
]

const MCLAREN_SPECS = [
  {
    group: 'Основные',
    items: [
      { label: 'Двигатель',             value: 'V8 4.0л Twin Turbo' },
      { label: 'Мощность',              value: '720 л.с.' },
      { label: 'Крутящий момент',       value: '770 Н·м' },
      { label: 'Разгон 0–100 км/ч',    value: '2.9 сек' },
      { label: 'Разгон 0–200 км/ч',    value: '7.8 сек' },
      { label: 'Максимальная скорость', value: '341 км/ч' },
      { label: 'Коробка передач',       value: '7-ступ. SSG' },
      { label: 'Привод',                value: 'Задний (RWD)' },
      { label: 'Количество мест',       value: '2' },
      { label: 'Длина',                 value: '4 543 мм' },
      { label: 'Ширина',                value: '1 930 мм' },
      { label: 'Высота',                value: '1 196 мм' },
      { label: 'Снаряжённая масса',     value: '1 419 кг' },
    ],
  },
  {
    group: 'Дополнительно',
    items: [
      { label: 'Кузов',                 value: 'Карбоновый монокок' },
      { label: 'Тормоза',               value: 'Карбон-керамика' },
      { label: 'Подвеска',              value: 'Активная (RacActive)' },
      { label: 'Аэродинамика',          value: 'Активный диффузор' },
      { label: 'Колёсная база',         value: '2 670 мм' },
    ],
  },
]

const FERRARI_SPECS = [
  {
    group: 'Основные',
    items: [
      { label: 'Двигатель',             value: 'V12 6.5л N/A' },
      { label: 'Мощность',              value: '725 л.с.' },
      { label: 'Крутящий момент',       value: '716 Н·м' },
      { label: 'Разгон 0–100 км/ч',    value: '3.3 сек' },
      { label: 'Максимальная скорость', value: '310 км/ч' },
      { label: 'Коробка передач',       value: '8-ступ. DCT' },
      { label: 'Привод',                value: 'Полный (AWD)' },
      { label: 'Количество мест',       value: '4' },
      { label: 'Длина',                 value: '4 973 мм' },
      { label: 'Ширина',                value: '2 028 мм' },
      { label: 'Высота',                value: '1 589 мм' },
      { label: 'Снаряжённая масса',     value: '2 033 кг' },
    ],
  },
  {
    group: 'Дополнительно',
    items: [
      { label: 'Тормоза',               value: 'Карбон-керамика' },
      { label: 'Подвеска',              value: 'Активная магнитная' },
      { label: 'Объём багажника',       value: '473 л' },
      { label: 'Колёсная база',         value: '3 018 мм' },
      { label: 'Аэродинамика',          value: 'Активный диффузор + S-duct' },
    ],
  },
]

export const CARS = [
  {
    id: 1,
    type: 'Электромобиль',
    name: 'LOTUS S Electro AT',
    price: 14810000,
    status: null,
    images: [
      'https://plus.unsplash.com/premium_photo-1737559694560-1227c63d0885?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1676919296008-d74e423cb44e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1669273009036-b7543ec95047?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: LOTUS_SPECS,
  },
  {
    id: 3,
    type: 'Электромобиль',
    name: 'LOTUS S Electro AT',
    price: 9810000,
    status: 'В наличии',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1669273009036-b7543ec95047?auto=format&fit=crop&w=1200&q=85',
      'https://plus.unsplash.com/premium_photo-1737559694560-1227c63d0885?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1676919296008-d74e423cb44e?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: LOTUS_SPECS,
  },
  {
    id: 4,
    type: 'Гибрид',
    name: 'LiXiang L9',
    price: 7200000,
    status: 'В пути',
    images: [
      'https://images.unsplash.com/photo-1724723582371-3cae3a9fa32c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1656232755852-a2720b308f1b?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: [
      {
        group: 'Основные',
        items: [
          { label: 'Тип',                    value: 'Гибрид (EREV)' },
          { label: 'Батарея',                value: '44.5 кВт·ч' },
          { label: 'Запас хода (эл.)',       value: '215 км' },
          { label: 'Запас хода (полный)',    value: '1 315 км' },
          { label: 'Мощность',               value: '449 л.с.' },
          { label: 'Разгон 0–100 км/ч',     value: '5.3 сек' },
          { label: 'Привод',                 value: 'Полный (AWD)' },
          { label: 'Количество мест',        value: '6' },
          { label: 'Длина',                  value: '5 218 мм' },
        ],
      },
    ],
  },
  {
    id: 5,
    type: 'Электромобиль',
    name: 'Lotus Eletre',
    price: 18810000,
    status: 'В наличии',
    images: [
      'https://plus.unsplash.com/premium_photo-1694394360215-cf4a889db337?auto=format&fit=crop&w=1200&q=85',
      'https://plus.unsplash.com/premium_photo-1661369053909-52ea2080793c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1615908397724-6dc711db34a7?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: LOTUS_SPECS,
  },
  {
    id: 6,
    type: 'Электромобиль',
    name: 'LOTUS S Electro AT',
    price: 14810000,
    status: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1676919296008-d74e423cb44e?auto=format&fit=crop&w=1200&q=85',
      'https://plus.unsplash.com/premium_photo-1737559694560-1227c63d0885?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: LOTUS_SPECS,
  },
  {
    id: 7,
    type: 'Электромобиль',
    name: 'Lixiang L9',
    price: 14810000,
    status: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1724723554227-8cddaecb9a0e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1724723582371-3cae3a9fa32c?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: [
      {
        group: 'Основные',
        items: [
          { label: 'Батарея',                value: '100 кВт·ч' },
          { label: 'Запас хода',             value: '510 км (WLTP)' },
          { label: 'Мощность',               value: '544 л.с.' },
          { label: 'Разгон 0–100 км/ч',     value: '4.4 сек' },
          { label: 'Привод',                 value: 'Полный (AWD)' },
          { label: 'Количество мест',        value: '6' },
          { label: 'Длина',                  value: '5 218 мм' },
        ],
      },
    ],
  },
  {
    id: 8,
    type: 'Электромобиль',
    name: 'LOTUS S Electro AT',
    price: 14810000,
    status: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1669273009036-b7543ec95047?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1779813377620-7615c9e3796c?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: LOTUS_SPECS,
  },
  {
    id: 9,
    type: 'Электромобиль',
    name: 'Rolls-Royce Spectre',
    price: 62000000,
    status: 'В пути',
    images: [
      'https://images.unsplash.com/photo-1624804269473-828dcc30a210?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1696233016084-30c8345d85ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581966451257-a5c7c5afa833?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: ROLLS_SPECS,
  },
  {
    id: 10,
    type: 'Бензиновый',
    name: 'Bentley Bentayga Speed',
    price: 48500000,
    status: 'В пути',
    images: [
      'https://images.unsplash.com/photo-1618418721668-0d1f72aa4bab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1610908374865-dae3c6392a2f?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: BENTLEY_SPECS,
  },
  {
    id: 11,
    type: 'Электромобиль',
    name: 'Porsche Taycan Turbo GT',
    price: 28900000,
    status: 'В наличии',
    images: [
      'https://plus.unsplash.com/premium_photo-1736637312833-d62623ac4df4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1615125468484-088e3dfcabb6?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: PORSCHE_SPECS,
  },
  {
    id: 12,
    type: 'Гибрид',
    name: 'Lamborghini Urus SE',
    price: 35700000,
    status: 'В наличии',
    images: [
      'https://plus.unsplash.com/premium_photo-1736151102457-90a42cf54f49?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1696958363946-b58f40cda426?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: LAMBORGHINI_SPECS,
  },
  {
    id: 14,
    type: 'Бензиновый',
    name: 'Ferrari Purosangue',
    price: 44800000,
    status: 'В наличии',
    images: [
      'https://plus.unsplash.com/premium_photo-1736949344059-3c0c3a2d0edc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1623173103439-fd360deedad4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1646988681493-7f7c9ebde49f?auto=format&fit=crop&w=1200&q=85',
    ],
    specs: FERRARI_SPECS,
  },
]
