// src/pages/NotFound.jsx
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const EASE = [0.22, 1, 0.36, 1];

export default function NotFound() {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  // Мигающий курсор
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 700);
    return () => clearInterval(id);
  }, []);

  // Параллакс от курсора
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.4 });

  const tiltX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const floatX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const floatY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  // Живое время — обновляем раз в секунду
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const timeString = time.toLocaleTimeString('ru-RU', { hour12: false });

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="relative min-h-[calc(100svh-80px)] overflow-hidden
                 bg-white dark:bg-[#0a0a0a]
                 text-black dark:text-white
                 flex items-center justify-center
                 px-5 sm:px-6"
    >

      {/* ============================================================
          УГЛОВЫЕ МЕТА-ДАННЫЕ (monospace, технический стиль)
          ============================================================ */}

      {/* Верх слева */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        className="absolute top-5 md:top-8 left-5 md:left-8
                   text-[9px] md:text-[10px] uppercase tracking-[0.4em]
                   text-gray-400 dark:text-gray-600 font-mono tabular-nums
                   flex items-center gap-2 md:gap-3"
      >
        <span className="w-5 md:w-8 h-px bg-current" />
        {t('notFound.error')}
      </motion.div>

      {/* Верх справа — текущий маршрут */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="absolute top-5 md:top-8 right-5 md:right-8
                   text-[9px] md:text-[10px] uppercase tracking-[0.3em]
                   text-gray-400 dark:text-gray-600 font-mono
                   max-w-[45vw] truncate"
      >
        <span className="opacity-60">route:</span>{' '}
        <span className="normal-case tracking-normal">{pathname}</span>
      </motion.div>

      {/* Низ слева — время */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
        className="absolute bottom-5 md:bottom-8 left-5 md:left-8
                   text-[9px] md:text-[10px] uppercase tracking-[0.4em]
                   text-gray-400 dark:text-gray-600 font-mono tabular-nums"
      >
        {timeString} · MSK
      </motion.div>

      {/* Низ справа — координаты */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
        className="absolute bottom-5 md:bottom-8 right-5 md:right-8
                   text-[9px] md:text-[10px] uppercase tracking-[0.3em]
                   text-gray-400 dark:text-gray-600 font-mono tabular-nums
                   hidden sm:block"
      >
        58.5213° N · 31.2710° E
      </motion.div>

      {/* ============================================================
          ЦЕНТР — вся композиция
          ============================================================ */}
      <div className="relative flex flex-col items-center text-center">

        {/* ============================================================
            ГИГАНТСКОЕ «404» с параллаксом
            ============================================================ */}
        <motion.div
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            x: floatX,
            y: floatY,
            transformPerspective: 1200,
          }}
          className="relative select-none will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="flex items-baseline justify-center leading-[0.8]"
          >
            {/* 4 */}
            <span
              className="text-[34vw] sm:text-[26vw] md:text-[16rem] lg:text-[20rem] xl:text-[23rem]
                         tracking-tighter text-black dark:text-white leading-[0.8]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 900 }}
            >
              4
            </span>

            {/* Ø — рукописный, свисает ниже */}
            <span
              className="text-[42vw] sm:text-[32vw] md:text-[20rem] lg:text-[24rem] xl:text-[28rem]
                         leading-[0.8] text-gray-300 dark:text-gray-700
                         -mx-[3vw] md:-mx-6 -mt-[6vw] md:-mt-10"
              style={{ fontFamily: '"Great Vibes", cursive', fontWeight: 400 }}
              aria-hidden="true"
            >
              Ø
            </span>

            {/* 4 */}
            <span
              className="text-[34vw] sm:text-[26vw] md:text-[16rem] lg:text-[20rem] xl:text-[23rem]
                         tracking-tighter text-black dark:text-white leading-[0.8]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 900 }}
            >
              4
            </span>
          </motion.div>

          {/* Мягкое свечение под цифрами */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-4 md:-bottom-8 h-20 md:h-32
                       bg-gradient-to-t from-black/[0.06] dark:from-white/[0.06] to-transparent
                       blur-2xl"
          />
        </motion.div>

        {/* ============================================================
            Строка в терминале — «маршрут не найден»
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className="mt-8 md:mt-12
                     flex items-center gap-2 md:gap-3
                     font-mono text-[11px] md:text-sm
                     text-gray-500 dark:text-gray-400"
        >
          <span className="text-black dark:text-white">›</span>
          <span>{t('notFound.notFoundLine')}</span>
          <span className="font-sans text-xs opacity-60">
            <span className="hidden md:inline">— {t('notFound.titleLower')}</span>
          </span>
          <span
            aria-hidden="true"
            className={`inline-block w-[6px] md:w-2 h-[1em] bg-black dark:bg-white align-middle
                       transition-opacity duration-100
                       ${blink ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>

        {/* ============================================================
            CTA — одна чёткая кнопка
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-4 md:gap-6"
        >
          <Link
            to="/"
            className="group relative inline-flex items-center gap-3
                       px-7 md:px-9 py-3.5 md:py-4
                       bg-black text-white dark:bg-white dark:text-black
                       text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold
                       overflow-hidden"
          >
            <span className="relative z-10">← {t('notFound.backHome')}</span>

            {/* Подложка для «перелистывания» при hover */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-white dark:bg-black
                         origin-left scale-x-0 group-hover:scale-x-100
                         transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            {/* Меняем цвет текста при hover через второй слой */}
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center gap-3
                         text-black dark:text-white
                         text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
            >
              ← {t('notFound.backHome')}
            </span>
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2
                       text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold
                       text-gray-500 dark:text-gray-500
                       hover:text-black dark:hover:text-white transition-colors"
          >
            {t('notFound.orWrite')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}