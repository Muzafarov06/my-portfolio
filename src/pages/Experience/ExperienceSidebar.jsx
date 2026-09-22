// src/pages/Experience/ExperienceSidebar.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Star from './Star';

export default function ExperienceSidebar({ items, activeId, types, label }) {
  const { t } = useLanguage();

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-32">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
            {label}
          </span>
          <span className="text-[10px] text-gray-400">✦</span>
        </div>

        <div className="relative flex flex-col gap-1 pl-6">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-3 bottom-3 w-px bg-black/10 dark:bg-white/10"
          />

          <AnimatePresence mode="popLayout">
            {items.map((item, i) => {
              const isActive = activeId === item.id;
              const type = types[item.type];

              return (
                <motion.a
                  key={item.id}
                  href={`#exp-${item.id}`}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="relative flex items-center gap-3 py-2.5 group"
                >
                  <span
                    className={`
                      absolute -left-6 top-1/2 -translate-y-1/2
                      flex items-center justify-center transition-all duration-300
                      ${
                        isActive
                          ? 'text-black dark:text-white scale-110'
                          : 'text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400'
                      }
                    `}
                  >
                    <Star size={isActive ? 12 : 8} filled={isActive} />
                  </span>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`
                        text-xs font-bold uppercase tracking-wider truncate transition-colors
                        ${isActive ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'}
                      `}
                    >
                      {item.company}
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400 truncate mt-0.5">
                      {type?.label} · {item.period}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </aside>
  );
}