// src/pages/DesignCategory/heroes/SocialHero.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE } from '../constants';

import socialDevices from '@/assets/design/social/devices.png';

export default function SocialHero({ category }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-8 md:pb-24">
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
        className="hidden sm:block absolute left-[3%] top-[18%] md:left-[3%] md:top-[22%] text-base md:text-2xl select-none z-20"
        aria-hidden="true">✦</motion.span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="hidden sm:block absolute right-[6%] top-[42%] md:right-[5%] md:top-[48%] text-base md:text-xl select-none z-20"
        aria-hidden="true">✦</motion.span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="hidden md:block absolute right-[3%] bottom-[14%] text-lg md:text-2xl select-none z-20"
        aria-hidden="true">✦</motion.span>

      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-start gap-2 sm:gap-3 md:gap-5 mb-3 md:mb-4 text-[8px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.4em] text-gray-600 dark:text-gray-400 whitespace-nowrap">
          <span>Вдохновение</span>
          <span className="w-3 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
          <span>Сообщество</span>
          <span className="w-3 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
          <span>Творчество</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="font-bold leading-[0.9] tracking-tight text-left text-[8vw] sm:text-[3.2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem] select-none whitespace-nowrap"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 900 }}>
          SOCIAL MEDIA DESIGN
        </motion.h1>

        <div className="relative mt-3 sm:mt-5 md:mt-6 lg:mt-4">
          <div className="flex justify-center">
            <motion.img initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: EASE }}
              src={socialDevices} alt="Social Media Design"
              className="relative z-10 w-full h-auto max-w-[500px] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl object-contain select-none pointer-events-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-8 sm:mt-10 lg:absolute lg:top-[4%] lg:right-12 xl:right-20 lg:mt-0 lg:max-w-[300px] xl:max-w-[340px] flex flex-col gap-3 mx-auto lg:mx-0 max-w-[300px] items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-700 dark:text-gray-300 whitespace-nowrap">
              <span>Люди</span>
              <span className="inline-block w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
              <span>Контент</span>
              <span className="inline-block w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
              <span>Идеи</span>
            </div>
            <span className="block w-10 h-[2px] bg-black dark:bg-white" />
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Создаю оформление для групп<br />
              ВКонтакте и Instagram —<br />
              помогаю находить заказы<br />
              через фриланс.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-6 mt-4 sm:mt-6 md:mt-2">
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