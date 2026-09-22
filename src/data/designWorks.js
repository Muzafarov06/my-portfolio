// ============================================================
// ✅ РАБОТЫ ПО КАТЕГОРИЯМ
// Фото подтягиваются АВТОМАТИЧЕСКИ из папок через import.meta.glob.
// Просто кидай файлы в папку — они появятся в работе.
// ============================================================

/* ============================================================
   📷 АВТОИМПОРТ ВСЕХ ФОТО ИЗ ../assets/design/**
   ============================================================ */
const modules = import.meta.glob(
  '../assets/design/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

const getImages = (folderPath) => {
  const marker = `/design/${folderPath.replace(/^\/+|\/+$/g, '')}/`;

  return Object.entries(modules)
    .filter(([key]) => key.includes(marker))
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map(([, src], i) => ({
      src,
      title: `Слайд ${String(i + 1).padStart(2, '0')}`,
    }));
};

/* ============================================================
   HERO
   ============================================================ */
const heroMazanka = getImages('infographics/mazanka/v1');

import threeDScene from '../assets/design/3d/scene.png';
import webDevices from '../assets/design/web/devices.png';
import socialDevices from '../assets/design/social/devices.png';

export { heroMazanka, threeDScene, webDevices, socialDevices };

// ============================================================
// СПИСОК РАБОТ
// ============================================================

export const designWorks = [
  /* ============================================================
     📦 HANDMADE — Рукоделие и хобби
     ============================================================ */

  /* ─── Алмазная мозайка (6 вариаций) ─── */
  {
    id: 'mazanka-v1',
    categoryId: 'infographics',
    subcategory: 'handmade',
    title: 'Алмазная мозайка — классическая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Проверенная структура: УТП → преимущества → характеристики → размеры → CTA.',
    description: `Классическая вариация инфографики для алмазной мозайки: понятная 
    структура от первого до последнего слайда.`,
    tasks: [
      'Анализ конкурентов в категории рукоделия и хобби',
      'Разработка универсальной структуры из 5 слайдов',
      'Подбор сетки и типографики под WB и OZON',
      'Проверка читаемости с мобильного превью',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Проверенная структура, которая работает на холодном трафике.',
    images: getImages('infographics/mazanka/v1'),
  },
  {
    id: 'mazanka-v2',
    categoryId: 'infographics',
    subcategory: 'handmade',
    title: 'Алмазная мозайка — минимализм',
    year: '2026',
    layout: 'large',
    shortDescription: 'Белый фон, крупная типографика, минимум декора.',
    description: `Минималистичная вариация: белый фон, крупная типографика, 
    тонкие разделительные линии.`,
    tasks: [
      'Разработка минималистичной сетки',
      'Подбор шрифтовой пары и палитры',
      'Дизайн 5 слайдов без декора',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Чистая подача — товар говорит сам за себя.',
    images: getImages('infographics/mazanka/v2'),
  },
  {
    id: 'mazanka-v3',
    categoryId: 'infographics',
    subcategory: 'handmade',
    title: 'Алмазная мозайка — акцент на текстуре',
    year: '2026',
    layout: 'large',
    shortDescription: 'Макро-съёмка: покупатель видит фактуру и блеск стразов.',
    description: `Вариация с акцентом на текстуру: крупные макро-планы 
    показывают блеск, глубину и качество стразов.`,
    tasks: [
      'Подбор и ретушь макро-фотографий',
      'Дизайн слайдов с крупными планами',
      'Схема комплектации набора',
    ],
    stack: ['Photoshop', 'Figma', 'Lightroom'],
    result: 'Покупатель видит товар в деталях до покупки.',
    images: getImages('infographics/mazanka/v3'),
  },
  {
    id: 'mazanka-v4',
    categoryId: 'infographics',
    subcategory: 'handmade',
    title: 'Алмазная мозайка — сценарии применения',
    year: '2026',
    layout: 'large',
    shortDescription: 'Готовые работы в интерьере: гостиная, спальня, подарок.',
    description: `Инфографика со сценариями: как готовая картина смотрится 
    в интерьере, кому подойдёт как подарок.`,
    tasks: [
      'Подбор интерьерных референсов',
      'Мокапы и композитинг в Photoshop',
      'Дизайн 5 слайдов со сценариями',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Покупатель видит готовый результат — проще решиться на покупку.',
    images: getImages('infographics/mazanka/v4'),
  },
  {
    id: 'mazanka-v5',
    categoryId: 'infographics',
    subcategory: 'handmade',
    title: 'Алмазная мозайка — сравнительная подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Цифры и таблицы: размеры, состав, сравнение с аналогами.',
    description: `Рациональная вариация: слайды построены на цифрах и таблицах — 
    размер холста, количество стразов, комплектация.`,
    tasks: [
      'Сбор данных по характеристикам набора',
      'Сравнение с аналогами',
      'Дизайн таблиц и схем',
    ],
    stack: ['Photoshop', 'Figma', 'Excel'],
    result: 'Рациональная подача — покупатель сравнивает осознанно.',
    images: getImages('infographics/mazanka/v5'),
  },
  {
    id: 'mazanka-v6',
    categoryId: 'infographics',
    subcategory: 'handmade',
    title: 'Алмазная мозайка — премиум-подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Тёмный фон, золотые акценты, типографика с засечками.',
    description: `Премиальная вариация: тёмный фон, золотые акценты, 
    крупная типографика с засечками.`,
    tasks: [
      'Разработка премиальной палитры',
      'Подбор шрифтов с засечками',
      'Дизайн 5 слайдов в тёмном стиле',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Статусная подача, подчёркивающая премиум-класс товара.',
    images: getImages('infographics/mazanka/v6'),
  },

  /* ─── Румбокс ─── */
  {
    id: 'rumboks-v1',
    categoryId: 'infographics',
    subcategory: 'handmade',
    title: 'Румбокс — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Миниатюрная сцена: что внутри, как собирается, размеры.',
    description: `Инфографика для набора-румбокса: что внутри коробки, 
    из чего сделаны детали, как собирается сцена, габариты готового.`,
    tasks: [
      'Анализ конкурентов в нише румбоксов',
      'Съёмка деталей и собранной сцены',
      'Дизайн 5 слайдов под WB и OZON',
      'Схема сборки и размеров',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятная подача набора — покупатель видит, что получит.',
    images: getImages('infographics/rumboks/v1'),
  },

  /* ============================================================
     🍽 KITCHEN — Кухня
     ============================================================ */

  /* ─── Кухонный лоток (3 вариации) ─── */
  {
    id: 'tray-v1',
    categoryId: 'infographics',
    subcategory: 'kitchen',
    title: 'Кухонный лоток — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Стандартная структура для органайзера.',
    description: `Базовая вариация инфографики для кухонного лотка: главный слайд 
    с УТП, блок преимуществ, характеристики, размеры и CTA.`,
    tasks: [
      'Анализ конкурентов в категории кухонных органайзеров',
      'Подбор УТП и ключевых болей покупателя',
      'Дизайн 5 слайдов под OZON и Wildberries',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Карточка с высоким CTR — товар понятен с первого слайда.',
    images: getImages('infographics/tray/v1'),
  },
  {
    id: 'tray-v2',
    categoryId: 'infographics',
    subcategory: 'kitchen',
    title: 'Кухонный лоток — акцент на размерах',
    year: '2026',
    layout: 'large',
    shortDescription: 'Размеры, совместимость с ящиками и материал.',
    description: `Вариация с акцентом на размерах: точные габариты, схемы 
    совместимости со стандартными ящиками, материал.`,
    tasks: [
      'Снятие точных размеров товара',
      'Схемы совместимости со стандартными ящиками',
      'Дизайн 5 слайдов с акцентом на цифры',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Меньше возвратов — покупатель точно знает, что подойдёт.',
    images: getImages('infographics/tray/v2'),
  },
  {
    id: 'tray-v3',
    categoryId: 'infographics',
    subcategory: 'kitchen',
    title: 'Кухонный лоток — сценарии использования',
    year: '2026',
    layout: 'large',
    shortDescription: 'Органайзер в деле: как преображает ящик.',
    description: `Вариация со сценариями: показано, как лоток преображает 
    кухонный ящик и упрощает быт.`,
    tasks: [
      'Съёмка лотка с разными наборами приборов',
      'Слайд «до и после»',
      'Дизайн 5 слайдов с акцентом на пользу',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Эмоциональная подача — покупатель видит решение проблемы.',
    images: getImages('infographics/tray/v3'),
  },

  /* ─── Сушилка для посуды ─── */
  {
    id: 'sushilka-v1',
    categoryId: 'infographics',
    subcategory: 'kitchen',
    title: 'Сушилка для посуды — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Вместимость, материал, устойчивость, размеры.',
    description: `Инфографика для сушилки: сколько тарелок и чашек вмещает, 
    из чего сделана, устойчива ли к влаге, габариты.`,
    tasks: [
      'Анализ конкурентов',
      'Съёмка сушилки с полной загрузкой',
      'Дизайн 5 слайдов под WB и OZON',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятная подача — покупатель видит вместимость и качество.',
    images: getImages('infographics/sushilka/v1'),
  },

  /* ============================================================
     🧸 KIDS — Детские товары
     ============================================================ */

  /* ─── Доска пеленальная складная ─── */
  {
    id: 'doska-pelenalnaya-v1',
    categoryId: 'infographics',
    subcategory: 'kids',
    title: 'Пеленальная доска — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Безопасность, размеры, механизм складывания.',
    description: `Инфографика для складной пеленальной доски: материал, 
    безопасность, габариты в разложенном и сложенном виде, 
    крепление к кроватке.`,
    tasks: [
      'Анализ конкурентов в категории детских товаров',
      'Схемы размеров и сложения',
      'Дизайн 5 слайдов под WB и OZON',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Родитель видит безопасность и удобство — доверие к товару.',
    images: getImages('infographics/doska-pelenalnaya/v1'),
  },

  /* ─── Лабубу ─── */
  {
    id: 'labubu-v1',
    categoryId: 'infographics',
    subcategory: 'kids',
    title: 'Игрушка Лабубу — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Мягкая игрушка: размер, материал, варианты.',
    description: `Инфографика для мягкой игрушки Лабубу: размер, материал, 
    варианты расцветок, безопасность для детей.`,
    tasks: [
      'Анализ конкурентов',
      'Съёмка игрушки в разных ракурсах',
      'Дизайн 5 слайдов с акцентом на тактильность',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Эмоциональная подача — покупатель влюбляется в игрушку.',
    images: getImages('infographics/labubu/v1'),
  },

  /* ============================================================
     👕 CLOTHING — Одежда
     ============================================================ */

  /* ─── Носки ─── */
  {
    id: 'noski-v1',
    categoryId: 'infographics',
    subcategory: 'clothing',
    title: 'Носки — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Состав, размерная сетка, посадка, цветовая линейка.',
    description: `Инфографика для носков: состав (хлопок/эластан), 
    размерная сетка, посадка, цветовая линейка, комплектация.`,
    tasks: [
      'Анализ конкурентов в категории одежды',
      'Съёмка носков на модели и flat-lay',
      'Дизайн 5 слайдов с размерной сеткой',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятная подача — покупатель точно знает размер и состав.',
    images: getImages('infographics/noski/v1'),
  },

  /* ─── Платье лапша ─── */
  {
    id: 'plate-lapsha-v1',
    categoryId: 'infographics',
    subcategory: 'clothing',
    title: 'Платье «лапша» — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Посадка, материал, размерная сетка, образы.',
    description: `Инфографика для платья в рубчик: посадка, состав, 
    размерная сетка, как сидит на разных фигурах.`,
    tasks: [
      'Съёмка на модели',
      'Разработка размерной сетки',
      'Дизайн 5 слайдов с образами',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Покупатель видит посадку — меньше возвратов по размеру.',
    images: getImages('infographics/plate-lapsha/v1'),
  },

  /* ─── Тренч плащ ─── */
  {
    id: 'trench-v1',
    categoryId: 'infographics',
    subcategory: 'clothing',
    title: 'Тренч-плащ — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Материал, посадка, детали, размерная сетка.',
    description: `Инфографика для тренча: состав, посадка, длина, 
    детали кроя, размерная сетка.`,
    tasks: [
      'Съёмка на модели и flat-lay',
      'Дизайн 5 слайдов с деталями кроя',
      'Размерная сетка',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Покупатель видит качество и посадку — увереннее покупает.',
    images: getImages('infographics/trench/v1'),
  },

  /* ─── Футболка NOYOGA NOHUGS ─── */
  {
    id: 'futbolka-noyoga-v1',
    categoryId: 'infographics',
    subcategory: 'clothing',
    title: 'Футболка NOYOGA NOHUGS — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Принт, состав, посадка, размерная сетка.',
    description: `Инфографика для оверсайз-футболки с принтом: качество 
    печати, состав, посадка, размерная сетка.`,
    tasks: [
      'Съёмка принта крупным планом',
      'Съёмка на модели',
      'Дизайн 5 слайдов под WB',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Яркий принт + понятные размеры — высокий CTR.',
    images: getImages('infographics/futbolka-noyoga/v1'),
  },

  /* ============================================================
     🔧 TOOLS — Инструменты
     ============================================================ */

  /* ─── Гравер ─── */
  {
    id: 'graver-v1',
    categoryId: 'infographics',
    subcategory: 'tools',
    title: 'Гравер — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Мощность, комплектация, насадки, сферы применения.',
    description: `Инфографика для гравера: технические характеристики, 
    комплектация, насадки, сферы применения.`,
    tasks: [
      'Сбор технических характеристик',
      'Съёмка насадок и комплекта',
      'Дизайн 5 слайдов с ТТХ',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Понятные ТТХ — покупатель выбирает осознанно.',
    images: getImages('infographics/graver/v1'),
  },

  /* ─── Завертка сантехническая ─── */
  {
    id: 'zavertka-v1',
    categoryId: 'infographics',
    subcategory: 'tools',
    title: 'Завертка сантехническая — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Размеры, материал, применение.',
    description: `Инфографика для сантехнической завертки: размеры, 
    материал, применение в быту.`,
    tasks: [
      'Снятие размеров',
      'Съёмка инструмента',
      'Дизайн 5 слайдов с ТТХ',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятная подача — покупатель видит сферу применения.',
    images: getImages('infographics/zavertka/v1'),
  },

  /* ─── Клей универсальный ─── */
  {
    id: 'klei-v1',
    categoryId: 'infographics',
    subcategory: 'tools',
    title: 'Клей универсальный — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Состав, склеиваемые материалы, время схватывания.',
    description: `Инфографика для универсального клея: состав, для каких 
    материалов подходит, время схватывания, объём.`,
    tasks: [
      'Анализ конкурентов в категории клеёв',
      'Схемы склеиваемых материалов',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятно, для чего клей — проще выбрать.',
    images: getImages('infographics/klei/v1'),
  },

  /* ============================================================
     💄 BEAUTY — Красота и уход
     ============================================================ */

  /* ─── Полоски для депиляции ─── */
  {
    id: 'poloski-depilyaciya-v1',
    categoryId: 'infographics',
    subcategory: 'beauty',
    title: 'Полоски для депиляции — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Состав, применение, результат, зоны.',
    description: `Инфографика для восковых полосок: состав, как применять, 
    для каких зон подходит, результат.`,
    tasks: [
      'Съёмка полосок и упаковки',
      'Дизайн слайда «до и после»',
      'Дизайн 5 слайдов с инструкцией',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятная инструкция — покупатель уверен в результате.',
    images: getImages('infographics/poloski-depilyaciya/v1'),
  },

  /* ─── Терка для пяток ─── */
  {
    id: 'terka-pyatki-v1',
    categoryId: 'infographics',
    subcategory: 'beauty',
    title: 'Терка для пяток — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Материал, абразивность, применение, уход.',
    description: `Инфографика для терки для пяток: материал, абразивность, 
    как пользоваться, уход за инструментом.`,
    tasks: [
      'Съёмка терки',
      'Дизайн слайдов с применением',
      'Инструкция по уходу',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятно, как и зачем — товар покупают с уверенностью.',
    images: getImages('infographics/terka-pyatki/v1'),
  },

  /* ─── Органайзер для косметики ─── */
  {
    id: 'organizer-kosmetika-v1',
    categoryId: 'infographics',
    subcategory: 'beauty',
    title: 'Органайзер для косметики — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Вместимость, размеры, материал, сценарии.',
    description: `Инфографика для универсального органайзера под косметику: 
    вместимость, габариты, материал, где использовать.`,
    tasks: [
      'Анализ конкурентов',
      'Съёмка органайзера с косметикой',
      'Дизайн 5 слайдов с размерами',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Покупатель видит вместимость — понимает, влезет ли его косметика.',
    images: getImages('infographics/organizer-kosmetika/v1'),
  },

  /* ============================================================
     🏠 HOME — Дом и уют
     ============================================================ */

  /* ─── Набор для хранения вещей ─── */
  {
    id: 'nabor-hraneniya-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Набор для хранения вещей — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Состав набора, размеры, материал, сценарии.',
    description: `Инфографика для набора для хранения: что входит, размеры, 
    материал, где использовать.`,
    tasks: [
      'Анализ конкурентов',
      'Съёмка набора',
      'Дизайн 5 слайдов с составом набора',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятная комплектация — покупатель видит, что получит.',
    images: getImages('infographics/nabor-hraneniya/v1'),
  },

  /* ─── Набор корзин пластмассовых ─── */
  {
    id: 'korziny-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Набор корзин — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Размеры, количество, материал, сценарии.',
    description: `Инфографика для набора пластмассовых корзин: размеры, 
    количество, материал, где применить.`,
    tasks: [
      'Съёмка корзин',
      'Схема размеров',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Покупатель видит реальные размеры — меньше вопросов.',
    images: getImages('infographics/korziny/v1'),
  },

  /* ─── Органайзер для вещей ─── */
  {
    id: 'organizer-veshchei-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Органайзер для вещей — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Секции, размеры, материал, применение.',
    description: `Инфографика для органайзера: секции, размеры, материал, 
    где использовать (шкаф, комод, гардероб).`,
    tasks: [
      'Анализ конкурентов',
      'Съёмка органайзера в шкафу',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Покупатель видит, как это упростит жизнь.',
    images: getImages('infographics/organizer-veshchei/v1'),
  },

  /* ─── Перчатка для чистки ─── */
  {
    id: 'perchatka-chistka-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Перчатка для чистки — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Материал, эффективность, применение, уход.',
    description: `Инфографика для перчатки-щетки: материал, как работает, 
    для каких поверхностей подходит, уход.`,
    tasks: [
      'Съёмка перчатки и процесса чистки',
      'Дизайн слайда «до и после»',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Эффект «до и после» убеждает лучше слов.',
    images: getImages('infographics/perchatka-chistka/v1'),
  },

  /* ─── Полки настенные ─── */
  {
    id: 'polki-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Полки настенные — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Размеры, нагрузка, монтаж, сценарии.',
    description: `Инфографика для настенных полок: размеры, максимальная 
    нагрузка, способ монтажа, варианты использования.`,
    tasks: [
      'Съёмка полок',
      'Схемы размеров и монтажа',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Покупатель видит нагрузку и монтаж — уверен в покупке.',
    images: getImages('infographics/polki/v1'),
  },

  /* ─── Салфетки бамбуковые ─── */
  {
    id: 'salfetki-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Бамбуковые салфетки — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Материал, многоразовость, зоны применения.',
    description: `Инфографика для бамбуковых салфеток: материал, 
    многоразовость, для чего подходят.`,
    tasks: [
      'Съёмка салфеток и упаковки',
      'Дизайн слайдов с применением',
      'Инфографика состава',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятно, чем бамбук лучше бумажных салфеток.',
    images: getImages('infographics/salfetki/v1'),
  },

  /* ─── Стеновые панели ─── */
  {
    id: 'stenovye-paneli-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Стеновые панели — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Размеры, материал, монтаж, варианты расцветок.',
    description: `Инфографика для стеновых панелей: размеры, материал, 
    способ монтажа, варианты расцветок.`,
    tasks: [
      'Съёмка панелей в интерьере',
      'Схема размеров и монтажа',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Покупатель видит панели в интерьере — проще решиться.',
    images: getImages('infographics/stenovye-paneli/v1'),
  },

  /* ─── Жалюзи плиссе ─── */
  {
    id: 'zhalyuzi-plisse-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Жалюзи плиссе — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Размеры, ткань, монтаж, варианты.',
    description: `Инфографика для тканевых жалюзи плиссе: размеры, 
    ткань, способы монтажа, варианты расцветок.`,
    tasks: [
      'Съёмка жалюзи в интерьере',
      'Схема размеров',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Покупатель видит, как это смотрится в интерьере.',
    images: getImages('infographics/zhalyuzi-plisse/v1'),
  },

  /* ─── Чистящая паста ─── */
  {
    id: 'chistyashchaya-pasta-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Чистящая паста — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Состав, для каких поверхностей, эффект, объём.',
    description: `Инфографика для чистящей пасты: состав, для каких 
    поверхностей подходит, эффект «до и после».`,
    tasks: [
      'Съёмка «до и после»',
      'Дизайн слайдов с применением',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Эффект «до и после» — сильный триггер покупки.',
    images: getImages('infographics/chistyashchaya-pasta/v1'),
  },

  /* ─── Шторы блэкаут ─── */
  {
    id: 'shtory-blackout-v1',
    categoryId: 'infographics',
    subcategory: 'home',
    title: 'Шторы блэкаут — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Затемнение, ткань, размеры, крепление.',
    description: `Инфографика для штор блэкаут: степень затемнения, 
    ткань, размеры, способы крепления.`,
    tasks: [
      'Съёмка штор в интерьере',
      'Схемы размеров',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятно, насколько темно будет в комнате.',
    images: getImages('infographics/shtory-blackout/v1'),
  },

  /* ============================================================
     🚗 AUTO — Авто и мото
     ============================================================ */

  /* ─── Антидождь ─── */
  {
    id: 'antidogd-v1',
    categoryId: 'infographics',
    subcategory: 'auto',
    title: 'Антидождь — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Состав, эффект, применение, объём.',
    description: `Инфографика для средства «Антидождь»: состав, эффект 
    на стекле, как применять, объём флакона.`,
    tasks: [
      'Съёмка эффекта на стекле',
      'Дизайн слайда «до и после»',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Виден эффект отталкивания воды — сильный аргумент.',
    images: getImages('infographics/antidogd/v1'),
  },

  /* ─── Органайзер для багажника ─── */
  {
    id: 'organizer-bagazhnik-v1',
    categoryId: 'infographics',
    subcategory: 'auto',
    title: 'Органайзер для багажника — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Размеры, крепление, вместимость, материал.',
    description: `Инфографика для органайзера в багажник: размеры, 
    крепление, вместимость, материал.`,
    tasks: [
      'Съёмка органайзера в багажнике',
      'Схемы размеров',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Покупатель видит, как это упорядочит багажник.',
    images: getImages('infographics/organizer-bagazhnik/v1'),
  },

  /* ─── Органайзер на сиденье ─── */
  {
    id: 'organizer-sidenie-v1',
    categoryId: 'infographics',
    subcategory: 'auto',
    title: 'Органайзер на сиденье — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Размеры, крепление, секции, материал.',
    description: `Инфографика для органайзера на сиденье: размеры, 
    крепление, секции, материал.`,
    tasks: [
      'Съёмка в салоне авто',
      'Схемы секций',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Покупатель видит, как это удобно в дороге.',
    images: getImages('infographics/organizer-sidenie/v1'),
  },

  /* ============================================================
     🌱 GARDEN — Сад и огород
     ============================================================ */

  /* ─── Газонокосилка ─── */
  {
    id: 'gazokosilka-v1',
    categoryId: 'infographics',
    subcategory: 'garden',
    title: 'Газонокосилка — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Мощность, ширина кошения, объём травосборника.',
    description: `Инфографика для газонокосилки: мощность, ширина 
    кошения, объём травосборника, регулировка высоты.`,
    tasks: [
      'Сбор технических характеристик',
      'Схемы ширины кошения',
      'Дизайн 5 слайдов с ТТХ',
    ],
    stack: ['Photoshop', 'Figma', 'Illustrator'],
    result: 'Понятные ТТХ — покупатель выбирает осознанно.',
    images: getImages('infographics/gazokosilka/v1'),
  },

  /* ============================================================
     ⚡ ELECTRONICS — Электроника
     ============================================================ */

  /* ─── Вентилятор с лабубу ─── */
  {
    id: 'ventilator-labubu-v1',
    categoryId: 'infographics',
    subcategory: 'electronics',
    title: 'Вентилятор с Лабубу — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Питание, режимы, габариты, применение.',
    description: `Инфографика для настольного вентилятора с фигуркой Лабубу: 
    питание, режимы, габариты, где использовать.`,
    tasks: [
      'Съёмка вентилятора',
      'Схемы режимов',
      'Дизайн 5 слайдов',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Милая подача + понятные ТТХ — высокий CTR.',
    images: getImages('infographics/ventilator-labubu/v1'),
  },

  /* ─── Отпариватель ручной ─── */
  {
    id: 'otparivatel-v1',
    categoryId: 'infographics',
    subcategory: 'electronics',
    title: 'Отпариватель ручной — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Мощность, объём, время нагрева, применение.',
    description: `Инфографика для ручного отпаривателя: мощность, 
    объём резервуара, время нагрева, для каких тканей.`,
    tasks: [
      'Сбор технических характеристик',
      'Съёмка процесса отпаривания',
      'Дизайн 5 слайдов с ТТХ',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятные ТТХ — покупатель выбирает уверенно.',
    images: getImages('infographics/otparivatel/v1'),
  },

  /* ============================================================
     🔒 ADULT — Интим-товары
     ============================================================ */

  /* ─── БДСМ набор электрический ─── */
  {
    id: 'bdsm-v1',
    categoryId: 'infographics',
    subcategory: 'adult',
    title: 'БДСМ-набор — базовая подача',
    year: '2026',
    layout: 'large',
    shortDescription: 'Состав набора, материал, характеристики, применение.',
    description: `Инфографика для электрического БДСМ-набора: состав, 
    материал, характеристики, способы применения. Тактичная и 
    сдержанная подача.`,
    tasks: [
      'Анализ конкурентов в категории',
      'Съёмка набора в сдержанном стиле',
      'Дизайн 5 слайдов с ТТХ',
    ],
    stack: ['Photoshop', 'Figma'],
    result: 'Понятная комплектация при деликатной подаче.',
    images: getImages('infographics/bdsm/v1'),
  },

  /* ============================================================
     02 — 3D-МОДЕЛИРОВАНИЕ
     ============================================================ */
  {
    id: 'product-visual',
    categoryId: '3d',
    title: '3D-визуализация продукта для маркетплейса',
    year: '2026',
    layout: 'large',
    shortDescription: 'Фотореалистичный рендер упаковки без фотосессии.',
    description: `3D-модель и рендер упаковки продукта для карточек на маркетплейсах.`,
    tasks: [
      'Моделирование упаковки в Blender',
      'Настройка PBR-материалов',
      'Постановка студийного света',
      'Рендер 5 ракурсов в Cycles',
      'Постобработка в Photoshop',
    ],
    stack: ['Blender', 'Substance Painter', 'Cycles', 'Photoshop'],
    result: 'Фотореалистичные изображения без затрат на фотосессию.',
    images: [{ src: threeDScene, title: 'Финальный рендер сцены' }],
  },

  /* ============================================================
     03 — ВЕБ-ДИЗАЙН
     ============================================================ */
  {
    id: 'portfolio-redesign',
    categoryId: 'web',
    title: 'Редизайн личного портфолио',
    year: '2026',
    layout: 'large',
    shortDescription: 'Минималистичный сайт-портфолио с 3D-каруселью.',
    description: `Полный редизайн личного сайта-портфолио.`,
    tasks: [
      'Анализ референсов и ЦА',
      'Прототипирование и wireframes',
      'UI-дизайн всех страниц в Figma',
      'Анимации и микровзаимодействия',
      'Вёрстка и адаптив',
    ],
    stack: ['Figma', 'Photoshop', 'After Effects', 'React'],
    result: 'Готовый сайт с адаптивом, тёмной темой и 3D-каруселью.',
    images: [{ src: webDevices, title: 'Hero-секция с устройствами' }],
  },

  /* ============================================================
     04 — СОЦСЕТИ
     ============================================================ */
  {
    id: 'instagram-branding',
    categoryId: 'social',
    title: 'Оформление Instagram-профиля для бренда',
    year: '2026',
    layout: 'large',
    shortDescription: 'Единый визуальный стиль: аватар, обложки, шаблоны постов.',
    description: `Полное оформление профиля Instagram для бренда одежды.`,
    tasks: [
      'Анализ ЦА и конкурентов',
      'Разработка визуальной концепции',
      'Дизайн аватара и обложек highlights',
      'Шаблоны постов: промо, новинки, отзывы',
      'Шаблоны каруселей и сторис',
      'Гайдлайн по использованию',
    ],
    stack: ['Figma', 'Photoshop', 'Illustrator', 'After Effects'],
    result: 'Узнаваемый стиль, рост охватов и вовлечённости на 35%.',
    images: [{ src: socialDevices, title: 'Оформление профиля на устройствах' }],
  },
];

// ============================================================
// УТИЛИТЫ
// ============================================================

export const getWorksByCategory = (categoryId) =>
  designWorks.filter((w) => w.categoryId === categoryId);

export const getWorksBySubcategory = (categoryId, subcategoryId) =>
  designWorks.filter(
    (w) => w.categoryId === categoryId && w.subcategory === subcategoryId
  );

export const getWork = (categoryId, workId) =>
  designWorks.find((w) => w.categoryId === categoryId && w.id === workId);