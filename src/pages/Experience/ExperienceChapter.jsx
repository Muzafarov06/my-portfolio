// src/pages/Experience/ExperienceChapter.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Star from './Star';

const EASE = [0.22, 1, 0.36, 1];

function Label({ children }) {
  return (
    <div className="flex items-baseline gap-3 mb-5">
      <span className="text-[10px] text-gray-300 dark:text-gray-700">✦</span>
      <h4 className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
        {children}
      </h4>
    </div>
  );
}

export default function ExperienceChapter({ item, index, total, types }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(true);

  const type = types[item.type] || { label: item.type, symbol: '·' };
  const yearFromPeriod = item.period?.match(/\d{4}/)?.[0] || '';

  return (
    <motion.article
      data-experience-item
      data-id={item.id}
      id={`exp-${item.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="relative scroll-mt-32"
    >
      {/* Гигантский год на фоне */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute
                   -top-8 md:-top-16 -right-2 md:-right-8
                   font-heading font-bold leading-none tracking-tighter
                   text-[28vw] md:text-[16rem] lg:text-[20rem]
                   text-black/[0.03] dark:text-white/[0.04]"
      >
        {yearFromPeriod}
      </span>

      <div className="relative">
        {/* Верхняя строка */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-black/10 dark:border-white/10">
          <span className="inline-flex items-center gap-2">
            <Star size={6} filled />
            <span className="text-[10px] tabular-nums tracking-[0.35em] text-gray-500">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </span>
          <span className="w-6 h-px bg-black/30 dark:bg-white/30" />
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black">
            <span className="text-[10px] leading-none">{type.symbol}</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
              {type.label}
            </span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
            {item.period}
          </span>
        </div>

        {/* Компания + роль */}
        <h3 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-4 break-words">
          {item.company}
        </h3>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 leading-snug mb-6">
          {item.role}
        </p>

        {/* Мета */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-[10px] uppercase tracking-[0.3em] text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-3 h-px bg-current" />
            {item.location}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-px bg-current" />
            {item.duration}
          </span>
        </div>

        {/* Раскрытие */}
        <button
          onClick={() => setOpen(!open)}
          className="group inline-flex items-center gap-3 py-3 pr-6
                     text-[10px] uppercase tracking-[0.35em] font-bold
                     hover:text-gray-500 transition-colors"
        >
          <span
            className={`
              inline-flex items-center justify-center w-8 h-8
              border border-black/30 dark:border-white/30
              transition-transform duration-300
              ${open ? 'rotate-45' : ''}
            `}
          >
            <span className="text-base leading-none">+</span>
          </span>
          <span>{open ? t('experience.collapse') : t('experience.expand')}</span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="lg:col-span-2 flex flex-col gap-10">
                  <div>
                    <Label>{t('experience.aboutWork')}</Label>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <Label>{t('experience.whatIDid')}</Label>
                    <ul className="flex flex-col">
                      {item.tasks.map((task, i) => (
                        <li
                          key={i}
                          className="group flex gap-5 items-start py-4
                                     border-b border-black/10 dark:border-white/10
                                     last:border-0
                                     hover:bg-black/[0.02] dark:hover:bg-white/[0.02]
                                     transition-colors px-2 -mx-2"
                        >
                          <span className="text-2xl md:text-3xl font-heading tabular-nums
                                           text-gray-300 dark:text-gray-700
                                           group-hover:text-black dark:group-hover:text-white
                                           transition-colors shrink-0 w-12">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm md:text-base leading-relaxed pt-1 flex-1">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <aside>
                  <Label>{t('experience.stack')}</Label>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-[0.15em] px-3 py-2
                                   border border-black/20 dark:border-white/20
                                   hover:bg-black hover:text-white
                                   dark:hover:bg-white dark:hover:text-black
                                   transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </aside>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}