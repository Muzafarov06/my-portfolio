// src/pages/DesignCategory/heroes/InfographicsHero.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE } from '../constants';

import infog1 from '@/assets/design/infographics/1.jpg';
import infog2 from '@/assets/design/infographics/2.jpg';
import infog3 from '@/assets/design/infographics/3.jpg';
import infog4 from '@/assets/design/infographics/4.jpg';

export default function InfographicsHero({ category }) {
  const photos = [
    { src: infog1, rotate: 13, z: 10, shadow: true,
      className: `absolute object-contain pointer-events-none select-none
        w-[50px] sm:w-[80px] md:w-[150px] lg:w-[200px]
        left-[3%] md:left-[2%] top-0 sm:top-[-2%] md:top-[-3%]` },
    { src: infog2, rotate: -12, z: 11, shadow: true,
      className: `absolute object-contain pointer-events-none select-none
        w-[42px] sm:w-[65px] md:w-[90px] lg:w-[120px]
        right-[3%] sm:right-[4%] md:right-[7%] top-0 sm:top-[-2%] md:top-[-2%]` },
    { src: infog3, rotate: -6, z: 12, shadow: false,
      className: `absolute object-contain pointer-events-none select-none
        w-[70px] sm:w-[120px] md:w-[230px] lg:w-[310px]
        left-[2%] bottom-3 sm:bottom-4 md:bottom-auto md:top-[42%]` },
    { src: infog4, rotate: 8, z: 13, shadow: false,
      className: `absolute object-contain pointer-events-none select-none
        w-[76px] sm:w-[130px] md:w-[240px] lg:w-[330px]
        right-[-2%] bottom-3 sm:bottom-4 md:bottom-auto md:top-[38%]` },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-20 md:pb-32 md:min-h-[90vh]">
      {/* ВОЛНЫ — ВЕРХНИЙ ПРАВЫЙ */}
      <svg aria-hidden="true"
        className="absolute -top-80 -right-64 md:-top-98 md:-right-60 w-[22rem] md:w-[42rem] h-[22rem] md:h-[42rem] opacity-[0.22] md:opacity-[0.28] dark:opacity-[0.3] dark:md:opacity-[0.38] pointer-events-none"
        viewBox="0 0 700 700" fill="none" preserveAspectRatio="xMaxYMin meet">
        <g transform="rotate(30 350 350)">
          {Array.from({ length: 20 }).map((_, i) => (
            <path key={i}
              d={`M 700 ${-20 + i * 26} C 620 ${-20 + i * 26}, 560 ${180 + i * 26}, 460 ${60 + i * 26} C 360 ${-60 + i * 26}, 300 ${220 + i * 26}, 200 ${100 + i * 26} C 100 ${-20 + i * 26}, 40 ${180 + i * 26}, -20 ${80 + i * 26}`}
              stroke="currentColor" strokeWidth="1" />
          ))}
        </g>
      </svg>

      {/* ВОЛНЫ — НИЖНИЙ ЛЕВЫЙ */}
      <svg aria-hidden="true"
        className="absolute bottom-10 md:bottom-20 -left-14 md:-left-116 w-[22rem] md:w-[42rem] h-[22rem] md:h-[42rem] opacity-[0.22] md:opacity-[0.28] dark:opacity-[0.3] dark:md:opacity-[0.38] pointer-events-none origin-bottom-left"
        viewBox="0 0 700 700" fill="none" preserveAspectRatio="xMinYMax meet"
        style={{ transform: 'rotate(35deg) translate(10%, -10%)' }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <path key={i}
            d={`M -20 ${80 + i * 26} C 60 ${80 + i * 26}, 120 ${280 + i * 26}, 220 ${160 + i * 26} C 320 ${40 + i * 26}, 380 ${320 + i * 26}, 480 ${200 + i * 26} C 580 ${80 + i * 26}, 640 ${280 + i * 26}, 700 ${180 + i * 26}`}
            stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>

      {/* ИСКРЫ */}
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 top-[8%] md:left-[22%] md:translate-x-0 md:top-[15%] text-sm md:text-xl select-none z-20"
        aria-hidden="true">✦</motion.span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-[22%] md:left-auto md:right-[8%] md:translate-x-0 md:bottom-auto md:top-[30%] text-sm md:text-2xl select-none z-20"
        aria-hidden="true">✦</motion.span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className="hidden md:block absolute left-[32%] bottom-[40%] text-lg md:text-3xl select-none z-20"
        aria-hidden="true">✦</motion.span>

      {/* ФОТО */}
      {photos.map((p, i) => (
        <motion.img key={i} src={p.src} alt=""
          initial={{ opacity: 0, y: 30, rotate: p.rotate }}
          animate={{ opacity: 1, y: 0, rotate: p.rotate }}
          transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: EASE }}
          className={`${p.className} ${p.shadow ? 'drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]' : ''}`}
          style={{ zIndex: p.z }} />
      ))}

      {/* ЦЕНТРАЛЬНЫЙ БЛОК */}
      <div className="relative z-30 max-w-3xl md:max-w-4xl mx-auto px-5 md:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-center gap-2 sm:gap-3 md:gap-6 mb-5 md:mb-10 text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.5em] text-gray-500 dark:text-gray-400">
          <span>Ваш товар</span>
          <span className="w-4 sm:w-5 md:w-12 h-px bg-gray-400 dark:bg-gray-600" />
          <span>Подача</span>
          <span className="w-4 sm:w-5 md:w-12 h-px bg-gray-400 dark:bg-gray-600" />
          <span>Продажи</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="font-bold leading-[0.95] tracking-tight text-[8vw] sm:text-[7vw] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] select-none whitespace-nowrap"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 }}>
          INFOGRAPHICS
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-10">
          <span className="inline-flex items-center px-4 sm:px-5 md:px-7 py-2 md:py-3 bg-black text-white dark:bg-white dark:text-black rounded-full text-[11px] sm:text-xs md:text-base font-bold tracking-tight">
            Wildberries
          </span>
          <span className="inline-flex items-center px-4 sm:px-5 md:px-7 py-2 md:py-3 bg-white dark:bg-[var(--color-bg-dark)] border border-black dark:border-white rounded-full text-[11px] sm:text-xs md:text-base font-bold tracking-tight">
            OZON
          </span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mt-6 md:mt-10 text-sm sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-xl mx-auto">
          Работаю с сетками на фрилансе и помогаю брендам выделяться
          с помощью продающей инфографики для маркетплейсов
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }} className="mt-10 md:mt-16">
          <Link to="/design"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-gray-500 hover:text-black dark:hover:text-white transition group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Все категории
          </Link>
        </motion.div>
      </div>
    </section>
  );
}