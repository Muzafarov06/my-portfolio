// src/pages/Experience/Hero.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import StarField from './StarField';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <StarField />

      <div className="relative max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14 md:mb-20"
        >
          <span className="w-8 h-px bg-black/30 dark:bg-white/30" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
            {t('experience.heroKicker')}
          </span>
          <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
            </span>
            {t('experience.openToOffers')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-heading leading-[0.95] tracking-tight
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                     mb-6 md:mb-8 md:whitespace-nowrap"
        >
          {t('experience.heroTitle')}{' '}
          <span className="text-gray-400 dark:text-gray-600">
            {t('experience.heroTitleAccent')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          {t('experience.heroText')}
        </motion.p>
      </div>
    </section>
  );
}