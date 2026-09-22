import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useContacts } from '@/hooks/useLocalizedData';

export default function ContactCard() {
  const { t } = useLanguage();
  const contacts = useContacts();
  const [copied, setCopied] = useState(null);

  const copy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopied(item.id);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <section>
      <header className="mb-12 md:mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
          {t('about.contactKicker')}
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl tracking-tight">
          {t('about.contactTitle')}
        </h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-lg">
          {t('about.contactText')}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10">
        {contacts.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white dark:bg-black p-6 md:p-8 flex justify-between items-center gap-4 group"
          >
            <a href={c.href} target="_blank" rel="noreferrer" className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">{c.label}</div>
              <div className="mt-2 text-base md:text-lg truncate group-hover:underline">{c.value}</div>
            </a>
            <button
              onClick={() => copy(c)}
              title={t('common.copy')}
              className="shrink-0 w-10 h-10 border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-xs"
            >
              {copied === c.id ? '✓' : '⧉'}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}