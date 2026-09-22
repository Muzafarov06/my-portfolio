// src/pages/Experience/index.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  useExperience,
  useExperienceTypes,
} from '@/hooks/useLocalizedData';
import Hero from './Hero';
import ExperienceFilters from './ExperienceFilters';
import ExperienceSidebar from './ExperienceSidebar';
import ExperienceChapter from './ExperienceChapter';

export default function Experience() {
  const { t } = useLanguage();
  const experience = useExperience();
  const types = useExperienceTypes();

  const [filter, setFilter] = useState('all');
  const [activeId, setActiveId] = useState(experience[0]?.id);

  const filtered =
    filter === 'all' ? experience : experience.filter((e) => e.type === filter);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.dataset.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    const items = document.querySelectorAll('[data-experience-item]');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="relative">
      {/* Прогресс-бар */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-black dark:bg-white z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Фоновая сетка */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.03] dark:opacity-[0.05] z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10">
        <Hero />

        <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
          <ExperienceFilters active={filter} onChange={setFilter} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <ExperienceSidebar
              items={filtered}
              activeId={activeId}
              types={types}
              label={t('experience.hierarchy')}
            />

            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-20 md:gap-32"
                >
                  {filtered.map((item, i) => (
                    <ExperienceChapter
                      key={item.id}
                      item={item}
                      index={i}
                      total={filtered.length}
                      types={types}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {filtered.length === 0 && (
                <div className="border border-dashed border-black/20 dark:border-white/20 p-16 text-center">
                  <div className="text-3xl mb-4 opacity-30">✦</div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">
                    {t('experience.nothingFound')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}