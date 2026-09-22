import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';

export default function Timeline() {
  const { t } = useLanguage();
  const { timeline } = useAboutData();

  return (
    <section>
      <header className="mb-12 md:mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
          {t('about.timelineKicker')}
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl tracking-tight">
          {t('about.timelineTitle')}
        </h2>
      </header>

      <ol className="relative border-l border-black/15 dark:border-white/15 ml-2 md:ml-4">
        {timeline.map((item, i) => (
          <motion.li
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative pl-8 md:pl-12 pb-10 md:pb-14 last:pb-0"
          >
            <span
              className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border ${
                item.accent
                  ? 'bg-black dark:bg-white border-black dark:border-white'
                  : 'bg-white dark:bg-black border-black/30 dark:border-white/30'
              }`}
            />
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">{item.year}</div>
            <h3 className={`mt-2 text-xl md:text-2xl tracking-tight ${item.accent ? '' : 'text-gray-700 dark:text-gray-300'}`}>
              {item.title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              {item.text}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}