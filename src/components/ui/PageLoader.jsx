import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const EASE = [0.22, 1, 0.36, 1];

export default function PageLoader() {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [viewport, setViewport] = useState({ w: 1440 });

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') setViewport({ w: window.innerWidth });

    let raf;
    const start = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const t2 = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t2, 3);
      setProgress(Math.min(Math.floor(eased * 99), 99));
      if (t2 < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Подпись статуса по прогрессу
  const statusKey =
    progress < 30 ? 'loader.connecting'
    : progress < 70 ? 'loader.assets'
    : 'loader.almostReady';

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden bg-white text-black dark:bg-[#0a0a0a] dark:text-white">

      {/* Сетка-чертёж */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.09]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 90%)',
        }}
      />

      {/* Верхняя техническая строка */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="absolute inset-x-0 top-0 flex items-center justify-between px-5 md:px-8 py-5
                   text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400"
      >
        <span className="flex items-center gap-3">
          <span className="inline-block w-6 md:w-10 h-px bg-current" />
          {t('loader.loading')}
        </span>
        <span className="hidden md:block tabular-nums">
          58.5213° N · 31.2710° E · В. Новгород
        </span>
        <span className="tabular-nums hidden sm:block">
          Фазлиддин · Музафаров
        </span>
      </motion.div>

      {/* Вращающийся круговой текст */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden md:block
                   w-[540px] h-[540px] -translate-x-1/2 -translate-y-1/2"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="loaderCircle"
              d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
            />
          </defs>
          <text fill="currentColor" fontSize="5.4" letterSpacing="5"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            className="fill-current opacity-30" style={{ textTransform: 'uppercase' }}>
            <textPath href="#loaderCircle" startOffset="0">
              loading · загрузка · chargement · 読み込み · laden · κάρφωμα ·
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Уголки-акценты */}
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden md:block
                   w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <span className="absolute -top-3 -left-3 w-4 h-4 border-t border-l border-black/40 dark:border-white/40" />
        <span className="absolute -top-3 -right-3 w-4 h-4 border-t border-r border-black/40 dark:border-white/40" />
        <span className="absolute -bottom-3 -left-3 w-4 h-4 border-b border-l border-black/40 dark:border-white/40" />
        <span className="absolute -bottom-3 -right-3 w-4 h-4 border-b border-r border-black/40 dark:border-white/40" />
      </motion.span>

      {/* Центр — счётчик */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative w-full max-w-[420px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-baseline justify-center"
          >
            <span className="font-heading leading-none tracking-tighter tabular-nums
                             text-[26vw] md:text-[13rem] lg:text-[15rem] select-none">
              {String(progress).padStart(2, '0')}
            </span>
            <span className="font-heading leading-none text-[6vw] md:text-5xl lg:text-6xl
                             text-gray-400 dark:text-gray-600 ml-1 md:ml-2 select-none">
              %
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-4 md:mt-6 h-px w-full bg-black/15 dark:bg-white/15 overflow-hidden"
          >
            <motion.div
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="absolute inset-y-0 left-0 w-full origin-left bg-black dark:bg-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 flex items-center justify-between
                       text-[9px] md:text-[10px] uppercase tracking-[0.4em]
                       text-gray-500 dark:text-gray-500"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse" />
              {t('loader.initializing')}
            </span>
            <span className="tabular-nums">
              {t(statusKey)}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Нижний гигантский штамп */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 md:-bottom-10 inset-x-0 flex justify-center"
      >
        <span className="font-heading font-black leading-none tracking-tighter
                         text-[22vw] md:text-[14rem] select-none
                         text-black/[0.05] dark:text-white/[0.06] whitespace-nowrap">
          LOADING
        </span>
      </motion.div>

      {/* Нижние координаты */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 md:bottom-5
                      flex items-center justify-between px-5 md:px-8
                      text-[9px] tracking-[0.3em] text-gray-400 dark:text-gray-600 tabular-nums">
        <span>W:{viewport.w} · H:∞</span>
        <span className="hidden md:inline">⏤ 60 FPS</span>
        <span>{mounted ? 'v2.0' : '...'}</span>
      </div>

      {/* ✦ декор */}
      <motion.span
        animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.25, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[18%] left-[14%] hidden md:block
                   text-lg text-black/40 dark:text-white/40 select-none"
      >
        ✦
      </motion.span>
      <motion.span
        animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.25, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        className="pointer-events-none absolute bottom-[22%] right-[16%] hidden md:block
                   text-lg text-black/40 dark:text-white/40 select-none"
      >
        ✦
      </motion.span>
      <motion.span
        animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.25, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
        className="pointer-events-none absolute top-[68%] left-[8%] hidden lg:block
                   text-sm text-black/40 dark:text-white/40 select-none"
      >
        ✦
      </motion.span>
    </div>
  );
}