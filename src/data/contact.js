// src/data/contact.js
import qrTelegram from '@/assets/qr/telegram.png';
import qrChannel from '@/assets/qr/telegram-channel.png';

/* ============================================================
   ПРЯМАЯ СВЯЗЬ — 2 карточки с QR
   Тексты (kicker/title/note/cta) в locales под data.contactPage.featured.<id>
   ============================================================ */
export const FEATURED = [
  {
    id: 'tg-personal',
    qr: qrTelegram,
    value: '@muzafon_06',
    href: 'https://t.me/muzafon_06',
  },
  {
    id: 'tg-channel',
    qr: qrChannel,
    value: '@fedos_design',
    href: 'https://t.me/fedos_design',
  },
];

/* ============================================================
   КАНАЛЫ И СЕРВИСЫ — 8 строк
   label/note в locales под data.contactPage.channels.<id>
   ============================================================ */
export const CHANNELS = [
  { id: 'phone',     value: '+7 (964) 690-08-81',     href: 'tel:+79646900881',      copyable: true },
  { id: 'email',     value: 'muzafon0604@gmail.com',  href: 'mailto:muzafon0604@gmail.com', copyable: true },
  { id: 'vk',        value: 'zachem_ja_tebe',         href: 'https://vk.ru/zachem_ja_tebe' },
  { id: 'instagram', value: '@nuzachemyatebe',        href: 'https://www.instagram.com/nuzachemyatebe' },
  { id: 'pinterest', value: 'fedosdesign',            href: 'https://pin.it/3AdVkmaYG.com/fedosdesign' },
  { id: 'behance',   value: 'fedosdesign',            href: 'https://www.behance.net/2e3e8ae9' },
  { id: 'kwork',     value: 'fedosdesign',            href: 'https://kwork.ru/user/fedosdesign_off' },
  { id: 'avito',     value: 'fedosdesign',            href: 'https://www.avito.ru/user/98f0caa72e7e0423f4aeefa3b51e5bbb/profile?src=sharing' },
];