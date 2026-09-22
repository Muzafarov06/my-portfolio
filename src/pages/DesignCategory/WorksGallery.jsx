// src/pages/DesignCategory/WorksGallery.jsx
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE } from './constants';
import FolderCard from './FolderCard';
import SubcategoryBar from './SubcategoryBar';

export default function WorksGallery({ works, categoryId, subcategories }) {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (!subcategories || active === 'all') return works;
    return works.filter((w) => w.subcategory === active);
  }, [works, subcategories, active]);

  if (works.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-5 md:px-6 pb-24">
        <div className="border border-dashed border-black/20 dark:border-white/20 rounded-2xl p-12 md:p-24 text-center">
          <div className="text-5xl md:text-7xl mb-6 opacity-20">◻</div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-3">Работ пока нет</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Скоро здесь появятся проекты</p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mb-6 md:mb-8"
      >
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400">
          <span className="w-8 h-px bg-current" />
          Галерея работ
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight text-black dark:text-white leading-[1.02]">
            Проекты в категории
          </h2>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 tabular-nums">
            {String(filtered.length).padStart(2, '0')} проектов
          </span>
        </div>
      </motion.div>

      {subcategories && subcategories.length > 0 && (
        <SubcategoryBar
          subcategories={subcategories}
          active={active}
          onChange={setActive}
          works={works}
        />
      )}

      <motion.div layout className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((work, i) => (
            <FolderCard key={work.id} work={work} index={i} categoryId={categoryId} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-dashed border-black/20 dark:border-white/20 rounded-2xl p-12 md:p-20 text-center mt-4"
        >
          <div className="text-4xl md:text-6xl mb-4 opacity-20">◻</div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-2">
            В этой категории пока пусто
          </p>
          <button
            onClick={() => setActive('all')}
            className="mt-4 text-[10px] uppercase tracking-[0.35em] text-gray-500 hover:text-black dark:hover:text-white underline underline-offset-4 transition"
          >
            Показать все работы
          </button>
        </motion.div>
      )}
    </section>
  );
}