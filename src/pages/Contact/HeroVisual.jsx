// src/pages/Contact/HeroVisual.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

function useMoscowTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Moscow',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now);
}

export default function HeroVisual() {
  const { t } = useLanguage();
  const time = useMoscowTime();

  return (
    <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] xl:w-[360px] xl:h-[360px] shrink-0 select-none">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-black/[0.05] via-transparent to-black/[0.05] dark:from-white/[0.08] dark:to-white/[0.02] blur-3xl" />

      {/* вращающийся круговой текст */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="heroCircle"
              d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
            />
          </defs>
          <text
            className="fill-black dark:fill-white"
            fontSize="9"
            letterSpacing="4.2"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            style={{ textTransform: 'uppercase' }}
          >
            <textPath href="#heroCircle" startOffset="0">
              {t('contact.rotatingText')}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* пунктирное кольцо */}
      <div className="absolute inset-[40px] sm:inset-[46px] rounded-full border border-dashed border-black/20 dark:border-white/20" />

      {/* пульсирующие кольца */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.12, 0.55] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-[58px] sm:inset-[68px] rounded-full border border-black/30 dark:border-white/30"
      />
      <motion.div
        animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0.05, 0.35] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute inset-[58px] sm:inset-[68px] rounded-full border border-black/30 dark:border-white/30"
      />

      {/* центр — часы */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400 dark:text-gray-500">
            {t('contact.moscowLabel')}
          </span>
          <span className="font-mono text-xl sm:text-2xl xl:text-3xl tabular-nums tracking-tight text-black dark:text-white">
            {time}
          </span>
          <span className="text-[9px] uppercase tracking-[0.45em] text-gray-400 dark:text-gray-500">
            GMT+3
          </span>
        </div>
      </div>

      {/* декоративные точки */}
      <motion.span
        animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 right-16 w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60"
      />
      <motion.span
        animate={{ y: [0, 6, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-6 left-8 w-1 h-1 rounded-full bg-black/50 dark:bg-white/50"
      />
      <motion.span
        animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        className="absolute top-1/2 -left-2 w-1 h-1 rounded-full bg-black/40 dark:bg-white/40"
      />
    </div>
  );
}