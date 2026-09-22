// src/pages/DesignCategory/heroes/WebHero.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE } from '../constants';

import webDevices from '@/assets/design/web/devices.png';

export default function WebHero({ category }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-10 sm:pb-18 md:pt-4 md:pb-24">
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
        className="hidden sm:block absolute left-[6%] top-[42%] md:left-[6%] md:top-[52%] text-base md:text-2xl select-none z-20"
        aria-hidden="true">✦</motion.span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute right-[8%] top-[8%] md:right-[5%] md:top-[12%] text-base md:text-2xl select-none z-20"
        aria-hidden="true">✦</motion.span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="hidden md:block absolute left-[10%] bottom-[15%] text-xl select-none z-20"
        aria-hidden="true">✦</motion.span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className="hidden sm:block absolute right-[5%] top-[48%] md:right-[4%] md:top-[58%] text-sm md:text-lg select-none z-20"
        aria-hidden="true">✦</motion.span>

      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-start flex-wrap gap-2 sm:gap-3 md:gap-6 mb-3 md:mb-3 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.4em] text-gray-500 dark:text-gray-400">
          <span>Идеи</span>
          <span className="w-3 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
          <span>Интерфейсы</span>
          <span className="w-3 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
          <span>Реальные продукты</span>
        </motion.div>

        <div className="relative">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="font-bold leading-[0.9] tracking-tight text-left text-[11vw] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] select-none whitespace-nowrap"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 900 }}>
            WEB DESIGN
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="hidden lg:flex absolute right-0 -bottom-35 xl:-bottom-35 flex-col items-end gap-3 max-w-sm text-right">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-8 h-px bg-black/40 dark:bg-white/40 flex-shrink-0" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 whitespace-nowrap">
                UX/UI · Web · Mobile · Brand
              </span>
            </div>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Создаю удобные и красивые<br />
              интерфейсы, которые решают<br />
              задачи бизнеса и людей.
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          className="lg:hidden mt-6 flex flex-col items-center gap-3 max-w-md mx-auto text-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-black/40 dark:bg-white/40" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 dark:text-gray-400">
              UX/UI · Web · Mobile · Brand
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Создаю удобные и красивые<br />
            интерфейсы, которые решают<br />
            задачи бизнеса и людей.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 -mt-2 sm:-mt-4 md:-mt-14">
        <div className="relative flex justify-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }} aria-hidden="true"
            className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-bold leading-none tracking-tighter text-[18vw] sm:text-[14rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] text-black/[0.05] dark:text-white/[0.06] whitespace-nowrap"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 900 }}>
            Portfolio
          </motion.span>

          <motion.img initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: EASE }}
            src={webDevices} alt="UI/UX Design"
            className="relative z-10 w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]" />
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-6 mt-2 sm:-mt-4 md:-mt-14">
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