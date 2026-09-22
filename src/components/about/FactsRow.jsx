import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';

const EASE = [0.22, 1, 0.36, 1];

export default function FactsRow() {
  const { t } = useLanguage();
  const { facts } = useAboutData();

  return (
    <section>
      {/* Заголовок сверху */}
      <header className="mb-8 md:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-gray-400 dark:bg-gray-600" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
            {t('about.factsKicker')}
          </span>
        </div>
        <h2 className="mt-4 text-3xl md:text-5xl tracking-tight">
          {t('about.factsTitle')}
        </h2>
      </header>

      {/* Сетка фактов */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
            className="border-t border-black/15 dark:border-white/15 pt-5"
          >
            <div className="font-mono text-base text-gray-400 dark:text-gray-600 leading-none">
              {f.icon}
            </div>
            <div className="mt-4 text-sm font-medium tracking-tight">
              {f.label}
            </div>
            <div className="mt-1.5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
              {f.note}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}