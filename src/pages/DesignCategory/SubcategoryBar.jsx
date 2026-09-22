// src/pages/DesignCategory/SubcategoryBar.jsx
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { EASE } from './constants';
import FilterChip from './FilterChip';

export default function SubcategoryBar({ subcategories, active, onChange, works }) {
  const counts = useMemo(() => {
    const map = { all: works.length };
    subcategories.forEach((s) => {
      map[s.id] = works.filter((w) => w.subcategory === s.id).length;
    });
    return map;
  }, [subcategories, works]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-6 md:mb-10"
    >
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400 mb-4">
        <span className="w-8 h-px bg-current" />
        Категории
      </div>

      <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 md:gap-3 min-w-max md:min-w-0 md:flex-wrap">
          <FilterChip active={active === 'all'} onClick={() => onChange('all')} label="Все" count={counts.all} />
          {subcategories.map((s) => (
            <FilterChip
              key={s.id}
              active={active === s.id}
              onClick={() => onChange(s.id)}
              label={s.label}
              count={counts[s.id]}
              disabled={counts[s.id] === 0}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}