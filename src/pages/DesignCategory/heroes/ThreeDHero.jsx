// src/pages/DesignCategory/heroes/ThreeDHero.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE } from '../constants';

import threeDScene from '@/assets/design/3d/scene.png';

export default function ThreeDHero({ category }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-6 md:pb-24">
      <svg aria-hidden="true"
        className="absolute -top-[25rem] -right-64 md:-top-[29rem] md:-right-60 w-[22rem] md:w-[42rem] h-[22rem] md:h-[42rem] opacity-[0.22] md:opacity-[0.28] dark:opacity-[0.3] dark:md:opacity-[0.38] pointer-events-none"
        viewBox="0 0 700 700" fill="none" preserveAspectRatio="xMaxYMin meet">
        <g transform="rotate(30 350 350)">
          {Array.from({ length: 20 }).map((_, i) => (
            <path key={i}
              d={`M 700 ${-20 + i * 26} C 620 ${-20 + i * 26}, 560 ${180 + i * 26}, 460 ${60 + i * 26} C 360 ${-60 + i * 26}, 300 ${220 + i * 26}, 200 ${100 + i * 26} C 100 ${-20 + i * 26}, 40 ${180 + i * 26}, -20 ${80 + i * 26}`}
              stroke="currentColor" strokeWidth="1" />
          ))}
        </g>
      </svg>

      <svg aria-hidden="true"
        className="absolute bottom-20 md:bottom-32 -left-20 md:-left-[30rem] w-[22rem] md:w-[42rem] h-[22rem] md:h-[42rem] opacity-[0.22] md:opacity-[0.28] dark:opacity-[0.3] dark:md:opacity-[0.38] pointer-events-none origin-bottom-left"
        viewBox="0 0 700 700" fill="none" preserveAspectRatio="xMinYMax meet"
        style={{ transform: 'rotate(35deg) translate(10%, -10%)' }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <path key={i}
            d={`M -20 ${80 + i * 26} C 60 ${80 + i * 26}, 120 ${280 + i * 26}, 220 ${160 + i * 26} C 320 ${40 + i * 26}, 380 ${320 + i * 26}, 480 ${200 + i * 26} C 580 ${80 + i * 26}, 640 ${280 + i * 26}, 700 ${180 + i * 26}`}
            stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>

      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="hidden sm:block absolute left-[6%] top-[38%] md:left-[4%] md:top-[55%] text-base md:text-2xl select-none z-20"
        aria-hidden="true">✦</motion.span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="hidden sm:block absolute right-[8%] top-[10%] md:right-[42%] md:top-[38%] text-base md:text-xl select-none z-20"
        aria-hidden="true">✦</motion.span>

      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-start gap-2 sm:gap-3 md:gap-5 mb-3 md:mb-4 text-[8px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-gray-600 dark:text-gray-400">
          <span>Идеи</span>
          <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
          <span>Модели</span>
          <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
          <span>Реальность</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="font-bold leading-[0.9] tracking-tight text-left text-[11vw] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem] select-none whitespace-nowrap"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 900 }}>
          <span className="align-baseline"
            style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: '-0.05em' }}>
            3
          </span>
          D MODELING
        </motion.h1>

        <div className="relative mt-2 sm:-mt-2 md:-mt-4">
          <div className="flex justify-center">
            <motion.img initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: EASE }}
              src={threeDScene} alt="3D Model"
              className="relative z-10 w-full h-auto max-w-[340px] sm:max-w-lg md:max-w-2xl lg:max-w-3xl object-contain select-none pointer-events-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
            className="mt-8 sm:mt-10 lg:mt-0 mx-auto max-w-[280px] sm:max-w-[260px] lg:absolute lg:top-[10%] lg:right-0 lg:mx-0 lg:max-w-[220px] flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
            <span className="block w-10 h-[2px] bg-black dark:bg-white mb-1" />
            <p className="text-[13px] sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              3D моделированием я начал интересоваться в колледже.
              Там я проходил курс по Blender, и с этого момента начал
              увлекаться этим направлением. Дальше я самостоятельно
              проходил уроки и дополнительные курсы, чтобы развиваться
              и улучшать свои навыки.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-6 mt-10 sm:mt-12 md:mt-1">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: EASE }}
          className="flex justify-center">
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