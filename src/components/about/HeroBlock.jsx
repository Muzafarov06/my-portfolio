import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useAboutData } from '@/hooks/useLocalizedData';
import { profile as baseProfile } from '@/data/about';

export default function HeroBlock() {
  const { t } = useLanguage();
  const { profile } = useAboutData();

  return (
    <section className="relative grid md:grid-cols-12 gap-10 md:gap-16 items-end">
      {/* ЛЕВО — текст */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="md:col-span-7"
      >
        <div className="flex items-center gap-3">
          <span className="w-4 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {t('about.aboutMeKicker')}
          </span>
          <span className="w-4 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-black dark:text-white">
          {profile.shortName}
          <br />
          <span className="text-gray-400 dark:text-gray-600">{profile.lastName}</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-snug">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
          <span>{t('data.about.profile.yearsOld', { age: baseProfile.age })}</span>
          <span className="opacity-40">/</span>
          <span>{profile.city}</span>
          <span className="opacity-40">/</span>
          <span>{profile.role}</span>
        </div>
      </motion.div>

      {/* ПРАВО — фото с плашкой поверх */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="md:col-span-5 relative"
      >
        <div className="relative aspect-[4/5] overflow-hidden group">
          <img
            src={baseProfile.photo}
            alt={profile.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute top-6 right-4 flex flex-col items-center gap-3 z-20">
            <span
              className="
                text-[9px] uppercase tracking-[0.5em] [writing-mode:vertical-rl] rotate-180
                text-black/70 dark:text-white/80
                drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]
                dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]
              "
            >
              {profile.est}
            </span>
            <span className="w-px h-12 bg-black/50 dark:bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.8)] dark:shadow-[0_0_4px_rgba(0,0,0,0.5)]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 px-5 py-4 md:px-7 md:py-5 bg-white/15 dark:bg-black/30 backdrop-blur-md">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.5em] text-black/70 dark:text-white/80 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  {profile.shortName}
                </div>
                <div className="mt-1.5 text-2xl md:text-3xl tracking-tight leading-none text-black dark:text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                  {profile.lastName}
                </div>
              </div>

              <div className="text-right shrink-0 pb-0.5">
                <div className="mt-1 text-sm md:text-base tabular-nums tracking-tight text-black dark:text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  06<span className="mx-1 opacity-50">/</span>
                  04<span className="mx-1 opacity-50">/</span>
                  2004
                </div>
              </div>
            </div>

            <div className="mt-3 h-px bg-gradient-to-r from-black/40 via-black/15 to-transparent dark:from-white/50 dark:via-white/20 dark:to-transparent" />
          </div>
        </div>

        <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-black dark:border-white pointer-events-none" />
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-black dark:border-white pointer-events-none" />
      </motion.div>
    </section>
  );
}