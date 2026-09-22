import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';

export default function ValuesGrid() {
  const { t } = useLanguage();
  const { values } = useAboutData();

  return (
    <section>
      <header className="mb-12 md:mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
          {t('about.valuesKicker')}
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl tracking-tight">
          {t('about.valuesTitle')}
        </h2>
      </header>

      <div className="grid md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10">
        {values.map((v, i) => (
          <motion.div
            key={v.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white dark:bg-black p-8 md:p-12 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-500"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-[0.3em] text-gray-400 group-hover:text-gray-500">{v.num}</span>
              <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
            <h3 className="mt-8 text-2xl md:text-3xl tracking-tight">{v.title}</h3>
            <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-600 leading-relaxed">
              {v.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}