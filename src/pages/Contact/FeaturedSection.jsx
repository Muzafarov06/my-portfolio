// src/pages/Contact/FeaturedSection.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useContactFeatured } from '@/hooks/useLocalizedData';
import SectionHeading from './SectionHeading';
import QRFrame from './QRFrame';

export default function FeaturedSection({ copied, onCopy }) {
  const { t } = useLanguage();
  const featured = useContactFeatured();

  return (
    <section className="mb-20 md:mb-32">
      <SectionHeading
        kicker={t('contact.directSubtitle')}
        title={t('contact.directTitle')}
      />

      <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden">
        {featured.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="group relative bg-white dark:bg-neutral-950"
          >
            <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-black/5 dark:border-white/5">
              <span className="text-[10px] uppercase tracking-[0.45em] text-gray-500 dark:text-gray-400">
                {item.kicker}
              </span>
              <span className="text-[10px] tabular-nums tracking-[0.45em] text-gray-400 dark:text-gray-500">
                0{i + 1}
              </span>
            </div>

            <div className="flex flex-col items-center text-center px-6 md:px-10 py-14 md:py-20">
              <QRFrame src={item.qr} alt={`QR — ${item.title}`} />

              <h3 className="mt-12 md:mt-14 font-heading text-3xl md:text-4xl uppercase tracking-tight text-black dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm tracking-[0.18em] text-gray-600 dark:text-gray-400">
                {item.value}
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.45em] text-gray-400 dark:text-gray-500">
                {item.note}
              </p>
            </div>

            <div className="flex border-t border-black/5 dark:border-white/5">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-5 text-[11px] uppercase tracking-[0.4em] font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition-opacity"
              >
                {item.cta} <span className="ml-2">→</span>
              </a>
              <button
                onClick={() => onCopy(item.value, item.id)}
                className="px-6 py-5 text-[11px] uppercase tracking-[0.4em] border-l border-black/5 dark:border-white/5 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                {copied === item.id ? '✓' : t('common.copy')}
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}