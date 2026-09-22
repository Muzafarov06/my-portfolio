import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData, usePhotos } from '@/hooks/useLocalizedData';
import { PhotoCarousel } from '@/components/widgets';
import {
  ContactCard,
  ValuesGrid,
  FactsRow,
} from '@/components/about';

const EASE = [0.22, 1, 0.36, 1];

export default function About() {
  const { t } = useLanguage();
  const { intro, lookingFor, profile } = useAboutData();
  const photos = usePhotos();
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = photos[activeIndex];

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <>
      {/* Прогресс-бар */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-black dark:bg-white origin-left z-50"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-24 md:space-y-32">

        {/* ══════════════════════════════════════════════════════
            01 — HERO
            ══════════════════════════════════════════════════════ */}

        {/* DESKTOP */}
        <section className="hidden lg:grid grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="col-span-5 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-gray-400 dark:bg-gray-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                {t('about.aboutMeKicker')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl leading-[0.92]">
              {profile.shortName}
              <br />
              <span className="text-gray-400 dark:text-gray-600">
                {profile.lastName}.
              </span>
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md leading-snug">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              <span>{profile.city}</span>
              <span className="opacity-40">/</span>
              <span>{profile.role}</span>
            </div>

            {/* Активное фото — изолированный блок */}
            <div className="mt-2 border-l-2 border-black/80 dark:border-white/30 pl-6 min-h-[140px] flex flex-col justify-center">
              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
                  {activePhoto.period}
                </span>
                <h2 className="text-2xl font-heading mt-2 leading-tight">
                  {activePhoto.title}
                </h2>
                <p className="text-sm mt-2 max-w-md text-gray-700 dark:text-gray-300 leading-relaxed">
                  {activePhoto.description}
                </p>
              </motion.div>
            </div>

            <div className="flex gap-3 mt-2">
              <Link
                to="/programming"
                className="px-6 py-3.5 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-80 transition"
              >
                {t('home.viewCode')}
              </Link>
              <Link
                to="/design"
                className="px-6 py-3.5 border border-black/30 dark:border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                {t('home.viewDesign')}
              </Link>
            </div>
          </motion.div>

          {/* Карусель в изолированном контейнере */}
          <div className="col-span-7 relative h-[650px] overflow-hidden">
            <PhotoCarousel photos={photos} onActiveChange={setActiveIndex} />
          </div>
        </section>

        {/* MOBILE */}
        <section className="lg:hidden -mx-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6 pb-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-gray-400 dark:bg-gray-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
                {t('about.aboutMeKicker')}
              </span>
            </div>

            <h1 className="text-4xl leading-[1.05] mt-4 font-heading">
              {profile.shortName}
              <br />
              <span className="text-gray-400 dark:text-gray-600">
                {profile.lastName}.
              </span>
            </h1>

            <p className="text-sm mt-4 text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mt-4">
              <span>{profile.city}</span>
              <span className="opacity-40">/</span>
              <span>{profile.role}</span>
            </div>
          </motion.div>

          <PhotoCarousel photos={photos} onActiveChange={setActiveIndex} />

          <div className="px-6 mt-8 flex flex-col gap-3">
            <Link
              to="/programming"
              className="px-6 py-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-[0.2em] text-xs text-center border border-black dark:border-white/20"
            >
              {t('home.viewCode')}
            </Link>
            <Link
              to="/design"
              className="px-6 py-4 border border-black/30 dark:border-white/20 font-bold uppercase tracking-[0.2em] text-xs text-center"
            >
              {t('home.viewDesign')}
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            02 — INTRO (editorial)
            ══════════════════════════════════════════════════════ */}
        <section className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
              {t('about.introKicker')}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl tracking-tight">
              {t('about.introTitle')}
            </h2>
          </div>

          <div className="md:col-span-9 space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {intro.slice(0, 2).map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              >
                {p}
              </motion.p>
            ))}

            {intro[2] && (
              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
                className="relative mt-10 pt-8 border-t border-black/15 dark:border-white/15 font-heading text-xl md:text-2xl leading-snug tracking-tight text-black dark:text-white"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-5 left-0 text-5xl text-gray-300 dark:text-gray-700 select-none"
                >
                  „
                </span>
                {intro[2]}
              </motion.blockquote>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            03 — VALUES + FACTS (заголовки сверху)
            ══════════════════════════════════════════════════════ */}
        <section className="space-y-24 md:space-y-32">
          <ValuesGrid />
          <FactsRow />
        </section>

        {/* ══════════════════════════════════════════════════════
            04 — LOOKING FOR
            ══════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="border border-black/15 dark:border-white/15 p-8 md:p-14"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
                {t('about.lookingForKicker')}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl tracking-tight">
                {lookingFor.title}
              </h2>
            </div>

            <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-0">
              {lookingFor.items.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                  className="flex gap-3 items-start text-base text-gray-700 dark:text-gray-300 py-3.5 border-b border-black/10 dark:border-white/10"
                >
                  <span className="text-black dark:text-white mt-0.5 shrink-0">→</span>
                  <span>{it}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════
            05 — CONTACT
            ══════════════════════════════════════════════════════ */}
        <ContactCard />
      </div>
    </>
  );
}