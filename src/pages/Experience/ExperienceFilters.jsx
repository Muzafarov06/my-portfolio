// src/pages/Experience/ExperienceFilters.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useExperienceFilters } from '@/hooks/useLocalizedData';

export default function ExperienceFilters({ active, onChange }) {
  const { t } = useLanguage();
  const filters = useExperienceFilters();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24"
    >
      <div className="flex flex-wrap gap-2 md:gap-3">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => onChange(f.id)}
            className={`
              px-5 py-3 text-[10px] uppercase tracking-[0.3em] font-bold
              border transition-all duration-300
              ${
                active === f.id
                  ? 'bg-black text-white border-transparent dark:bg-white dark:text-black'
                  : 'bg-transparent border-transparent text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white'
              }
            `}
          >
            {f.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}