// src/pages/Design/ProcessSection.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { EASE, PROCESS_STEP_KEYS } from './constants';
import SectionHeader from './components/SectionHeader';

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-10 md:py-20">
        <SectionHeader num="02" label={t('design.processKicker')} />

        {/* Десктоп — горизонтально */}
        <div className="hidden md:grid md:grid-cols-5 gap-0">
          {PROCESS_STEP_KEYS.map((step, i) => {
            const isLast = i === PROCESS_STEP_KEYS.length - 1;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                className="relative group"
              >
                <div className="absolute top-3 left-0 right-0 h-px bg-black/10 dark:bg-white/10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: isLast ? 0 : 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.4 + i * 0.15 }}
                    className="h-full bg-black dark:bg-white origin-left"
                  />
                </div>

                <div className="relative mb-8">
                  <div className="relative z-10 w-7 h-7 rounded-full bg-white dark:bg-[#0a0a0a] flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-black dark:bg-white group-hover:bg-white dark:group-hover:bg-black transition-colors duration-300" />
                  </div>
                </div>

                <div className="pr-6">
                  <span className="block text-[10px] tabular-nums tracking-[0.3em] text-gray-400 mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-heading text-3xl uppercase tracking-tight leading-[1.05] mb-4">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                    {t(step.textKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Мобила — вертикальный таймлайн */}
        <div className="md:hidden relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="absolute left-[11px] top-2 bottom-2 w-px bg-black/15 dark:bg-white/15 origin-top"
          />

          <div className="flex flex-col gap-7">
            {PROCESS_STEP_KEYS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                className="relative flex gap-4"
              >
                <div className="relative z-10 w-6 h-6 rounded-full bg-white dark:bg-[#0a0a0a] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                </div>

                <div className="flex-1 -mt-0.5">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400">
                      {step.num}
                    </span>
                    <h3 className="font-heading text-xl uppercase tracking-tight leading-tight">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 mt-2">
                    {t(step.textKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}