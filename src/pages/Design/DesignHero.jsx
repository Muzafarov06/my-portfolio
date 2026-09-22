// src/pages/Design/DesignHero.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';
import { EASE } from './constants';
import myPhoto from '@/assets/photos/me.png';

export default function DesignHero() {
  const { t } = useLanguage();
  const { profile } = useAboutData();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-4 pb-8 md:pt-10 md:pb-16">

      {/* Волны — верхний правый */}
      <svg
        aria-hidden="true"
        className="
          absolute -top-40 -right-32 sm:-top-56 sm:-right-44 md:-top-98 md:-right-60
          w-[14rem] sm:w-[20rem] md:w-[42rem]
          h-[14rem] sm:h-[20rem] md:h-[42rem]
          opacity-[0.18] sm:opacity-[0.22] md:opacity-[0.28]
          dark:opacity-[0.28] dark:sm:opacity-[0.32] dark:md:opacity-[0.38]
          pointer-events-none
        "
        viewBox="0 0 700 700"
        fill="none"
        preserveAspectRatio="xMaxYMin meet"
      >
        <g transform="rotate(30 350 350)">
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M 700 ${-20 + i * 26} C 620 ${-20 + i * 26}, 560 ${180 + i * 26}, 460 ${60 + i * 26} C 360 ${-60 + i * 26}, 300 ${220 + i * 26}, 200 ${100 + i * 26} C 100 ${-20 + i * 26}, 40 ${180 + i * 26}, -20 ${80 + i * 26}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </g>
      </svg>

      {/* Волны — нижний левый */}
      <svg
        aria-hidden="true"
        className="
          absolute bottom-8 sm:bottom-12 md:bottom-20
          -left-56 sm:-left-64 md:-left-116
          w-[19rem] sm:w-[24rem] md:w-[42rem]
          h-[19rem] sm:h-[24rem] md:h-[42rem]
          opacity-[0.18] sm:opacity-[0.22] md:opacity-[0.28]
          dark:opacity-[0.28] dark:sm:opacity-[0.32] dark:md:opacity-[0.38]
          pointer-events-none origin-bottom-left
        "
        viewBox="0 0 700 700"
        fill="none"
        preserveAspectRatio="xMinYMax meet"
        style={{ transform: 'rotate(35deg) translate(10%, -10%)' }}
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M -20 ${80 + i * 26} C 60 ${80 + i * 26}, 120 ${280 + i * 26}, 220 ${160 + i * 26} C 320 ${40 + i * 26}, 380 ${320 + i * 26}, 480 ${200 + i * 26} C 580 ${80 + i * 26}, 640 ${280 + i * 26}, 700 ${180 + i * 26}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-6">

        {/* "DESIGN CREATOR" */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col mb-6 md:mb-10 w-[88%] sm:w-[75%] md:w-[60%] lg:w-[58%] max-w-2xl"
        >
          <span className="block h-px bg-black/70 dark:bg-white/70 mb-2 md:mb-7 -ml-5 md:-ml-10 lg:-ml-16 w-[calc(100%+1.25rem)] md:w-[calc(100%+2.5rem)] lg:w-[calc(100%+4rem)]" />
          <span className="
            self-end
            text-base md:text-4xl lg:text-5xl xl:text-6xl
            uppercase
            tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.22em]
            font-normal text-black dark:text-white
          ">
            {t('design.heroKicker')}
          </span>
        </motion.div>

        {/* ГЛАВНЫЙ БЛОК */}
        <motion.div style={{ opacity: heroOpacity }} className="relative mt-2 md:mt-8">
          <div className="relative min-h-[280px] sm:min-h-[380px] md:min-h-[520px]">

            {/* «Portfolio» — на мобилке сжимается в единое слово по центру */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="
                relative flex items-baseline justify-center md:justify-between
                leading-[0.85] tracking-tight
                text-[19vw] sm:text-[19vw] md:text-[21vw] lg:text-[17rem] xl:text-[19rem]
                select-none whitespace-nowrap
                pt-2 sm:pt-4 md:pt-16
                md:w-full
                lowercase
              "
            >
              <span
                className="
                  uppercase text-gray-400 dark:text-gray-600
                  text-[27vw] sm:text-[27vw] md:text-[28vw] lg:text-[23rem] xl:text-[27rem]
                  leading-none
                  -mr-1.5 sm:-mr-2 md:-mr-8 lg:-mr-12
                  -ml-1 sm:-ml-1.5 md:ml-0
                  relative
                "
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  marginTop: '-0.35em',
                  fontWeight: 400,
                }}
              >
                P
              </span>

              <span className="text-black dark:text-white leading-none" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 500 }}>
                ortfo
              </span>
              <span className="text-gray-400 dark:text-gray-600 leading-none" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 500 }}>
                l
              </span>
              <span className="text-black dark:text-white leading-none" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 500 }}>
                io
              </span>
            </motion.h1>

            {/* Фото */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
              className="
                absolute z-10 left-1/2 -translate-x-1/2 top-[63%] md:top-[55%] -translate-y-1/2
                w-[230px] h-[310px]
                sm:w-[270px] sm:h-[365px]
                md:w-[400px] md:h-[530px]
                lg:w-[440px] lg:h-[585px]
                xl:w-[500px] xl:h-[665px]
                pointer-events-none
              "
            >
              <img
                src={myPhoto}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Кружочки */}
            <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1, ease: EASE }} className="absolute left-[6%] top-[20%] w-1.5 h-1.5 md:w-4 md:h-4 rounded-full bg-gray-400 dark:bg-gray-500 select-none z-20" aria-hidden="true" />
            <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.1, ease: EASE }} className="absolute right-[8%] top-[14%] w-1.5 h-1.5 md:w-4 md:h-4 rounded-full bg-gray-400 dark:bg-gray-500 select-none z-20" aria-hidden="true" />
            <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.2, ease: EASE }} className="hidden sm:block absolute right-[28%] top-[4%] w-1.5 h-1.5 md:w-4 md:h-4 rounded-full bg-gray-400 dark:bg-gray-500 select-none z-20" aria-hidden="true" />

            {/* Звёзды */}
            <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.3, ease: EASE }} className="hidden md:block absolute left-[20%] top-[62%] text-3xl select-none z-20 text-black dark:text-white" aria-hidden="true">✦</motion.span>
            <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.4, ease: EASE }} className="hidden md:block absolute right-[18%] top-[58%] text-2xl select-none z-20 text-black dark:text-white" aria-hidden="true">✧</motion.span>
            <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.5, ease: EASE }} className="hidden lg:block absolute left-[14%] top-[82%] text-xl select-none z-20 text-black dark:text-white" aria-hidden="true">✦</motion.span>
            <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.6, ease: EASE }} className="hidden lg:block absolute right-[14%] top-[82%] text-xl select-none z-20 text-black dark:text-white" aria-hidden="true">✦</motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}