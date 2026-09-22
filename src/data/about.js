// src/data/about.js

/* ============================================================
   ПРОФИЛЬ — только технические поля
   Тексты (name/role/tagline/city/...) в locales/{ru,en}.js под data.about.profile
   ============================================================ */
export const profile = {
  age: 22,
  born: '2004-04-06',
  photo: '/photos/main.png',
};

/* ============================================================
   КОНТАКТЫ — label в локалях под data.contactLabels.<id>
   ============================================================ */
export const contacts = [
  { id: 'email',     value: 'muzafarovfazliddin468@gmail.com', href: 'mailto:muzafarovfazliddin468@gmail.com', icon: '✉' },
  { id: 'telegram',  value: '@muzafon_06',                     href: 'https://t.me/muzafon_06',                icon: '→' },
  { id: 'phone',     value: '+7 (964) 690-08-81',              href: 'tel:+79646900881',                       icon: '☏' },
  { id: 'vk',        value: 'zachem__ja__tebe',                href: 'https://vk.ru/zachem__ja__tebe',         icon: '◊' },
  { id: 'instagram', value: '@nuzachemyatebe',                 href: 'https://www.instagram.com/nuzachemyatebe', icon: '◉' },
];