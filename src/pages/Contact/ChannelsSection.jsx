// src/pages/Contact/ChannelsSection.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useContactChannels } from '@/hooks/useLocalizedData';
import SectionHeading from './SectionHeading';

export default function ChannelsSection({ copied, onCopy }) {
  const { t } = useLanguage();
  const channels = useContactChannels();

  return (
    <section>
      <SectionHeading
        kicker={t('contact.channelsSubtitle')}
        title={t('contact.channelsTitle')}
      />

      <div className="mt-10 md:mt-14 border-t border-black/10 dark:border-white/10">
        {channels.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative border-b border-black/10 dark:border-white/10 hover:bg-black dark:hover:bg-white transition-colors duration-500"
          >
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={`${c.label} — ${c.value}`}
              className="absolute inset-0 z-0"
            />

            <div className="relative z-10 pointer-events-none flex items-center gap-5 md:gap-10 px-4 md:px-6 py-6 md:py-8">
              <span className="w-8 md:w-12 text-[10px] tabular-nums tracking-[0.4em] text-gray-400 dark:text-gray-500 group-hover:text-white/50 dark:group-hover:text-black/50 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-baseline md:gap-8">
                <h3 className="font-heading text-2xl md:text-4xl uppercase tracking-tight text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                  {c.label}
                </h3>
                <p className="mt-1 md:mt-0 text-xs md:text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/60 dark:group-hover:text-black/60 transition-colors duration-500 truncate">
                  {c.value}
                </p>
              </div>

              <span className="hidden lg:block text-[10px] uppercase tracking-[0.35em] whitespace-nowrap text-gray-400 dark:text-gray-500 group-hover:text-white/50 dark:group-hover:text-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {c.note}
              </span>

              {c.copyable && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onCopy(c.value, c.id);
                  }}
                  title={t('common.copy')}
                  className="
                    pointer-events-auto relative z-20
                    px-3 py-1.5
                    text-[9px] uppercase tracking-[0.3em]
                    border border-black/20 dark:border-white/20
                    group-hover:border-white/40 dark:group-hover:border-black/30
                    text-black dark:text-white
                    group-hover:text-white dark:group-hover:text-black
                    opacity-100 md:opacity-0 md:group-hover:opacity-100
                    transition-all duration-300
                  "
                >
                  {copied === c.id ? '✓' : t('common.copy')}
                </button>
              )}

              <span className="text-xl md:text-2xl text-black dark:text-white group-hover:text-white dark:group-hover:text-black group-hover:translate-x-2 transition-all duration-500">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}