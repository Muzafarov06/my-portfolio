// src/pages/Contact/index.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';
import HeroVisual from './HeroVisual';
import FeaturedSection from './FeaturedSection';
import ChannelsSection from './ChannelsSection';

export default function Contact() {
  const { t } = useLanguage();
  const { profile } = useAboutData();
  const [copied, setCopied] = useState(null);

  const copy = async (value, id) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(() => setCopied(null), 1600);
    } catch {}
  };

  const year = new Date().getFullYear();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

      {/* ============================================================
          HERO
          ============================================================ */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-20 md:mb-32"
      >
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-px bg-black/40 dark:bg-white/40" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">
                {t('contact.heroKicker')}
              </span>
            </div>

            <h1 className="mt-8 font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.02em] text-black dark:text-white">
              {t('contact.heroTitleLine1')}
              <br />
              <span className="italic font-light text-gray-400 dark:text-gray-600">
                {t('contact.heroTitleLine2')}
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('contact.heroText')}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-3">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
                {t('contact.openToOffers')}
              </span>
              <span className="opacity-30">—</span>
              <span>{profile.city}</span>
              <span className="opacity-30">—</span>
              <span>GMT+3 · MSK</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end pt-6 lg:pt-0 lg:pr-2 xl:pr-6">
            <HeroVisual />
          </div>
        </div>
      </motion.header>

      {/* ============================================================
          ПРЯМАЯ СВЯЗЬ
          ============================================================ */}
      <FeaturedSection copied={copied} onCopy={copy} />

      {/* ============================================================
          КАНАЛЫ И СЕРВИСЫ
          ============================================================ */}
      <ChannelsSection copied={copied} onCopy={copy} />

      {/* ============================================================
          ПОДВАЛ
          ============================================================ */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 md:mt-28 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-500"
      >
        <span>{t('contact.respondLine')}</span>
        <span className="hidden md:block flex-1 h-px bg-black/10 dark:bg-white/10 mx-8" />
        <span>{t('contact.copyrightLine', { year, name: profile.name })}</span>
      </motion.footer>
    </div>
  );
}