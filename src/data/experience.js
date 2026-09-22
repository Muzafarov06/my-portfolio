// src/data/experience.js

/* ============================================================
   ОПЫТ — только технические поля.
   Все тексты (company/role/location/period/duration/description/
   tasks/stack) — в locales/{ru,en}.js под data.experience.<id>
   ============================================================ */
export const experience = [
  { id: 'vks',                 type: 'military',   date: '2024-09-01' },
  { id: 'rarus',               type: 'internship', date: '2023-08-01' },
  { id: 'mis',                 type: 'work',       date: '2023-06-01' },
  { id: 'eldis',               type: 'work',       date: '2023-01-01' },
  { id: 'uch-praktika-2021',   type: 'practice',   date: '2021-06-01' },
];

/* ============================================================
   ТИПЫ — только символы (label в локалях)
   ============================================================ */
export const EXPERIENCE_TYPES = {
  work:       { symbol: '▢' },
  internship: { symbol: '▲' },
  military:   { symbol: '★' },
  practice:   { symbol: '◆' },
};

/* ============================================================
   ФИЛЬТРЫ — только id (label в локалях)
   ============================================================ */
export const EXPERIENCE_FILTERS = [
  { id: 'all' },
  { id: 'work' },
  { id: 'internship' },
  { id: 'military' },
  { id: 'practice' },
];