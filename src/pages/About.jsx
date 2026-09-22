import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';
import {
  HeroBlock,
  Timeline,
  ValuesGrid,
  FactsRow,
  ContactCard,
} from '@/components/about';

export default function About() {
  const { t } = useLanguage();
  const { intro, lookingFor } = useAboutData();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-black dark:bg-white origin-left z-50"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-32 md:space-y-48">
        <HeroBlock />

        {/* ИНТРО */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
              {t('about.introKicker')}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl tracking-tight">
              {t('about.introTitle')}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {intro.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-lg md:text-xl' : ''}>
                {p}
              </p>
            ))}
          </div>
        </motion.section>

        <Timeline />
        <ValuesGrid />
        <FactsRow />

        {/* ЧТО ИЩУ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-black/15 dark:border-white/15 p-8 md:p-14"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
            {t('about.lookingForKicker')}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl tracking-tight">
            {lookingFor.title}
          </h2>
          <ul className="mt-8 grid md:grid-cols-2 gap-4">
            {lookingFor.items.map((it) => (
              <li
                key={it}
                className="flex gap-3 items-start text-base text-gray-700 dark:text-gray-300"
              >
                <span className="text-black dark:text-white mt-1">→</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <ContactCard />
      </div>
    </>
  );
}