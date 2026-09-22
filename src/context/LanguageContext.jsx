// src/context/LanguageContext.jsx
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/app/i18n';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'ru');

  // ⬇️ expose t из react-i18next — компоненты используют один хук useLanguage()
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang); // ← синхронизируем i18next с нашим state
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
  }, []);

  const value = useMemo(() => ({ lang, toggleLang, t }), [lang, toggleLang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}