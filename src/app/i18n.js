// src/app/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from '@/locales/ru.js';
import en from '@/locales/en.js';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
    },
    lng: localStorage.getItem('lang') || 'ru',
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;