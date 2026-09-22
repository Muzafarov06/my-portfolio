import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useTilt } from '@/hooks/useTilt';
import { useLanguage } from '@/context/LanguageContext';

/* ============================================================
   ДАННЫЕ — только структура, тексты из t()
   ============================================================ */
const NAV_LINKS = [
  { to: '/',            num: '01', i18nKey: 'footer.navHome' },
  { to: '/programming', num: '02', i18nKey: 'footer.navProgramming' },
  { to: '/design',      num: '03', i18nKey: 'footer.navDesign' },
];

const SOCIAL_LINKS = [
  { label: 'Telegram',  short: 'TG', href: '#' },
  { label: 'GitHub',    short: 'GH', href: '#' },
  { label: 'Email',     short: 'EM', href: '#' },
  { label: 'VK',        short: 'VK', href: '#' },
  { label: 'Pinterest', short: 'PT', href: '#' },
  { label: 'Instagram', short: 'IG', href: '#' },
];

const PROCESS_STEP_KEYS = [
  'footer.processIdea',
  'footer.processDesign',
  'footer.processCode',
  'footer.processLaunch',
  'footer.processGrowth',
];

/* ============================================================
   КОМПОНЕНТ
   ============================================================ */
export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const { ref: revealRef, shown } = useReveal();
  const ctaRef = useMagnetic(0.15);
  const stampRef = useTilt(10);

  return (
    <footer
      ref={revealRef}
      className={[
        'relative mt-32 overflow-hidden',
        'border-t border-black/10 dark:border-white/10',
        'bg-white dark:bg-[#0a0a0a] text-black dark:text-white',
        'transition-opacity duration-700 ease-out',
        shown ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      {/* Верхняя градиентная линия */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/40 dark:via-white/40 to-transparent" />

      {/* Фоновая сетка-«чертёж» */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)',
        }}
      />

      {/* Координатные метки */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        <span className="absolute left-4 bottom-4 text-[9px] tracking-[0.3em] text-black/30 dark:text-white/30">
          W:1440
        </span>
        <span className="absolute right-4 bottom-4 text-[9px] tracking-[0.3em] text-black/30 dark:text-white/30">
          H:∞
        </span>
      </div>

      {/* Гигантский штамп PORTFOLIO — это бренд, не переводим */}
      <div
        ref={stampRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-16 right-[-2vw] whitespace-nowrap
                   font-heading font-bold leading-none
                   text-[26vw] md:text-[16vw]
                   text-black/[0.04] dark:text-white/[0.05]
                   transition-transform duration-500 ease-out will-change-transform"
      >
        PORTFOLIO
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-10">

        {/* ===== ВЕРХ: CTA + навигация + соцсети ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">

          {/* CTA */}
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
              <span className="w-6 h-px bg-black/40 dark:bg-white/40" />
              {t('footer.letsWork')}
            </span>

            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95] mt-6">
              {t('footer.haveIdea')}
              <br />
              <a
                ref={ctaRef}
                href="#contact"
                className="group inline-flex items-baseline gap-4 mt-2 transition-transform duration-500 ease-out will-change-transform"
              >
                <span className="relative">
                  {t('footer.write')}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] md:h-[3px] bg-black dark:bg-white origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0" />
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] md:h-[3px] bg-black dark:bg-white origin-right scale-x-0 transition-transform duration-500 delay-150 group-hover:scale-x-100" />
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 md:w-12 md:h-12 translate-y-[-0.1em] transition-transform duration-500 group-hover:translate-x-2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </h2>
          </div>

          {/* Навигация */}
          <nav className="md:col-span-3 flex flex-col gap-4 text-xs uppercase tracking-[0.25em]">
            <span className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
              <span className="w-1 h-1 rounded-full bg-current" />
              {t('footer.nav')}
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-center gap-2 w-fit font-semibold"
              >
                <span className="text-[9px] text-gray-400 dark:text-gray-600 tabular-nums">
                  {link.num}
                </span>
                <span className="relative">
                  {t(link.i18nKey)}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Соцсети */}
          <div className="md:col-span-3 flex flex-col gap-4 text-xs uppercase tracking-[0.25em]">
            <span className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
              <span className="w-1 h-1 rounded-full bg-current" />
              {t('footer.social')}
            </span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="group flex items-center gap-2 w-fit font-semibold"
                >
                  <span className="text-[9px] text-gray-400 dark:text-gray-600 tabular-nums">
                    {link.short}
                  </span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== ШКАЛА ПРОЦЕССА ===== */}
        <div className="relative mt-20">
          <div className="relative h-px bg-black/10 dark:bg-white/10">
            {PROCESS_STEP_KEYS.map((_, i) => (
              <span
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-px h-2 bg-black/20 dark:bg-white/20"
                style={{ left: `${(i / (PROCESS_STEP_KEYS.length - 1)) * 100}%` }}
              />
            ))}
            <span
              className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-black dark:bg-white"
              style={{ animation: 'footer-slide 8s linear infinite' }}
            />
          </div>

          <div className="flex justify-between mt-3 text-[9px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600">
            {PROCESS_STEP_KEYS.map((key, i) => (
              <span key={key} className={i % 2 === 1 ? 'hidden sm:inline' : ''}>
                {t(key)}
              </span>
            ))}
          </div>

          <style>{`
            @keyframes footer-slide {
              0%   { left: 0%;   opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 1; }
              100% { left: 100%; opacity: 0; }
            }
          `}</style>
        </div>

        {/* ===== НИЗ ===== */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-500 dark:text-gray-500">
            {t('footer.copyright', { year })}
          </p>

          <div className="flex items-center gap-5 text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-500">
            <span className="hidden md:inline">{t('footer.allRights')}</span>
            <span className="hidden md:inline w-6 h-px bg-black/30 dark:bg-white/30" />
            <span className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black dark:bg-white" />
              </span>
              {t('footer.openToProjects')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}