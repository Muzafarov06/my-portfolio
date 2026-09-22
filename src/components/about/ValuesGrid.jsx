import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';

const EASE = [0.22, 1, 0.36, 1];

export default function ValuesGrid() {
  const { t } = useLanguage();
  const { values } = useAboutData();

  return (
    <section>
      {/* Заголовок сверху */}
      <header className="mb-8 md:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-gray-400 dark:bg-gray-600" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
            {t('about.valuesKicker')}
          </span>
        </div>
        <h2 className="mt-4 text-3xl md:text-5xl tracking-tight">
          {t('about.valuesTitle')}
        </h2>
      </header>

      {/* Сетка 2×2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 dark:bg-white/10">
        {values.map((v, i) => (
          <motion.div
            key={v.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            className="
              relative bg-white dark:bg-black p-6 md:p-9
              group hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
              transition-colors duration-500
            "
          >
            <div className="flex items-start justify-between mb-6">
              <span className="font-heading text-3xl md:text-4xl leading-none tracking-tight text-gray-300 dark:text-gray-700 group-hover:text-white/30 dark:group-hover:text-black/30 transition-colors duration-500">
                {v.num}
              </span>
              <span className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                →
              </span>
            </div>

            <h3 className="font-heading text-xl md:text-2xl tracking-tight">
              {v.title}
            </h3>
            <p className="mt-2.5 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-600 leading-relaxed transition-colors duration-500">
              {v.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}