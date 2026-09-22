import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

/* --- минималистичные иконки --- */
function SunIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/* ✅ Единый список ссылок — теперь с i18n-ключами */
const NAV_ITEMS = [
  { to: '/',             i18nKey: 'nav.home' },
  { to: '/about',        i18nKey: 'nav.about' },
  { to: '/programming',  i18nKey: 'nav.programming' },
  { to: '/design',       i18nKey: 'nav.design' },
  { to: '/experience',   i18nKey: 'nav.experience' },
  { to: '/contact',      i18nKey: 'nav.contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t, lang, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/10 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl md:text-2xl font-heading font-bold tracking-tighter hover:opacity-60 transition-opacity"
        >
          MY<span className="text-gray-400 dark:text-gray-600">.</span>PORTFOLIO
        </Link>

        {/* ✅ Десктоп-навигация */}
        <nav className="hidden lg:flex gap-6 items-center text-xs font-semibold uppercase tracking-[0.18em]">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className="relative group whitespace-nowrap">
              <span>{t(item.i18nKey)}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <div className="flex gap-4 ml-3 pl-3 border-l border-black/15 dark:border-white/15 items-center">
            <button
              onClick={toggleLang}
              className="hover:opacity-60 transition-opacity text-[11px] tracking-[0.2em]"
              aria-label={t('common.toggleLang')}
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="w-7 h-7 flex items-center justify-center rounded-full
                         border border-transparent hover:border-black/15 dark:hover:border-white/20
                         hover:bg-black/5 dark:hover:bg-white/5
                         transition-all duration-300"
              aria-label={t('common.toggleTheme')}
            >
              {theme === 'light' ? (
                <MoonIcon className="w-4 h-4" />
              ) : (
                <SunIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>

        {/* ✅ Бургер для планшета и мобилы */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-black/20 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t('common.menu')}
        >
          {isOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur-2xl backdrop-saturate-150">
          <div className="flex flex-col px-6 py-6 gap-5 text-sm font-semibold uppercase tracking-[0.2em]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="hover:opacity-60 transition-opacity"
              >
                {t(item.i18nKey)}
              </Link>
            ))}

            <div className="flex gap-5 pt-4 border-t border-black/10 dark:border-white/10 items-center">
              <button
                onClick={toggleLang}
                className="text-xs tracking-[0.2em] hover:opacity-60 transition-opacity"
              >
                {lang.toUpperCase()}
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs tracking-[0.2em] hover:opacity-60 transition-opacity"
              >
                {theme === 'light' ? (
                  <>
                    <MoonIcon className="w-4 h-4" />
                    {t('common.darkTheme')}
                  </>
                ) : (
                  <>
                    <SunIcon className="w-4 h-4" />
                    {t('common.lightTheme')}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}