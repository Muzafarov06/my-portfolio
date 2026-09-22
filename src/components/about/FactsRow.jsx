import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';

export default function FactsRow() {
  const { t } = useLanguage();
  const { facts } = useAboutData();

  return (
    <section>
      <header className="mb-12 md:mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
          {t('about.factsKicker')}
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl tracking-tight">
          {t('about.factsTitle')}
        </h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="border-t border-black/15 dark:border-white/15 pt-5"
          >
            <div className="text-xl opacity-40">{f.icon}</div>
            <div className="mt-3 text-base tracking-tight">{f.label}</div>
            <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.note}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}