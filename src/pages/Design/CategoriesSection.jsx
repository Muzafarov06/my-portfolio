// src/pages/Design/CategoriesSection.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { EASE } from './constants';
import { getWorksByCategory } from '@/data/designWorks';
import SectionHeader from './components/SectionHeader';

export default function CategoriesSection({ categories }) {
  const { t } = useLanguage();

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-10 md:py-20">
        <SectionHeader num="03" label={t('design.categoriesTitle')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {categories.map((category, i) => {
            const worksCount = getWorksByCategory(category.id).length;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
              >
                <Link
                  to={`/design/${category.id}`}
                  className="
                    group relative block p-6 md:p-10 h-full rounded-2xl md:rounded-3xl
                    bg-black/[0.025] dark:bg-white/[0.035]
                    active:bg-black active:text-white dark:active:bg-white dark:active:text-black
                    md:hover:bg-black md:hover:text-white md:dark:hover:bg-white md:dark:hover:text-black
                    transition-colors duration-300 overflow-hidden
                  "
                >
                  <div className="flex items-baseline justify-between mb-8 md:mb-10">
                    <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400 group-active:text-gray-500 md:group-hover:text-gray-500">
                      {category.num}
                    </span>
                  </div>

                  <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-3 md:mb-4">
                    {category.title}
                  </h2>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-5 md:mb-8">
                    {category.subtitle}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed max-w-md opacity-80 mb-6 md:mb-8">
                    {category.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-[0.15em] px-2 py-1 bg-current/10 opacity-60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-2xl md:text-3xl opacity-0 group-active:opacity-100 md:group-hover:opacity-100 md:group-hover:translate-x-1 transition-all duration-500">
                    →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}