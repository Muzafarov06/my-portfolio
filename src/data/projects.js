// src/data/projects.js

/* ============================================================
   АВТОИМПОРТ КАРТИНОК ПРОЕКТОВ
   ============================================================ */
const projectModules = import.meta.glob(
  '../assets/projects/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' }
);

const pickImages = (folder) => {
  const marker = `/projects/${folder.replace(/^\/+|\/+$/g, '')}/`;
  return Object.entries(projectModules)
    .filter(([key]) => key.includes(marker))
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map(([, src]) => src);
};

const radugaScreens     = pickImages('raduga/screens');
const radugaDiagrams    = pickImages('raduga/diagrams');
const avtoScreens       = pickImages('avtopredpriyatie/screens');
const avtoDiagrams      = pickImages('avtopredpriyatie/diagrams');
const skyScreens        = pickImages('sky-switch/screens');
const skyDiagrams       = pickImages('sky-switch/diagrams');
const artschoolScreens  = pickImages('artschool/screens');
const artschoolDiagrams = pickImages('artschool/diagrams');
const portfolioImages   = pickImages('portfolio');

/* ============================================================
   ПРОЕКТЫ — только технические данные
   Тексты (title/subtitle/description/tasks/result + подписи картинок)
   лежат в locales/ru.js и locales/en.js
   ============================================================ */
export const projects = [
  {
    id: 'raduga',
    year: '2021',
    date: '2021-06-01',
    stack: ['C#', 'WinForms', 'MS SQL', 'ADO.NET'],
    category: 'coursework',
    links: {},
    images: [
      { src: radugaScreens[0] },
      { src: radugaScreens[1] },
      { src: radugaScreens[2] },
      { src: radugaDiagrams[0] },
      { src: radugaDiagrams[1] },
      { src: radugaDiagrams[2] },
    ],
  },
  {
    id: 'avtopredpriyatie',
    year: '2022',
    date: '2022-06-01',
    stack: ['C#', 'WinForms', 'PostgreSQL', 'Npgsql', 'SHA-256'],
    category: 'coursework',
    links: {},
    images: [
      { src: avtoScreens[0] },
      { src: avtoScreens[1] },
      { src: avtoScreens[2] },
      { src: avtoScreens[3] },
      { src: avtoDiagrams[0] },
      { src: avtoDiagrams[1] },
      { src: avtoDiagrams[2] },
    ],
  },
  {
    id: 'sky-switch',
    year: '2025',
    date: '2025-05-01',
    stack: ['Python', 'PyQt5', 'Pillow', 'OpenWeatherMap API', 'ctypes'],
    category: 'coursework',
    links: {},
    images: [
      { src: skyScreens[0] },
      { src: skyScreens[1] },
      { src: skyScreens[2] },
      { src: skyDiagrams[0] },
      { src: skyDiagrams[1] },
      { src: skyDiagrams[2] },
    ],
  },
  {
    id: 'artschool',
    year: '2026',
    date: '2026-06-01',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Flyway', 'PostgreSQL', 'React', 'Yandex Cloud'],
    category: 'diploma',
    links: {},
    images: [
      { src: artschoolScreens[0] },
      { src: artschoolScreens[1] },
      { src: artschoolScreens[2] },
      { src: artschoolScreens[3] },
      { src: artschoolScreens[4] },
      { src: artschoolScreens[5] },
      { src: artschoolDiagrams[0] },
      { src: artschoolDiagrams[1] },
      { src: artschoolDiagrams[2] },
      { src: artschoolDiagrams[3] },
      { src: artschoolDiagrams[4] },
      { src: artschoolDiagrams[5] },
      { src: artschoolDiagrams[6] },
    ],
  },
  {
    id: 'portfolio',
    year: '2026',
    date: '2026-09-01',
    stack: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    category: 'personal',
    links: { github: 'https://github.com/username/portfolio' },
    images: [
      { src: portfolioImages[0] },
      { src: portfolioImages[1] },
      { src: portfolioImages[2] },
    ],
  },
];

projects.sort((a, b) => b.date.localeCompare(a.date));

/* ============================================================
   ТИПЫ ПРОЕКТОВ — только символы, label в локалях
   ============================================================ */
export const PROJECT_TYPES = {
  coursework: { symbol: '▢' },
  diploma:    { symbol: '★' },
  personal:   { symbol: '●' },
};