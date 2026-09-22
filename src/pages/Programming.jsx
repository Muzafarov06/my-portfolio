import { motion } from 'framer-motion';
import { SectionTitle, Button } from '@/components/ui';
import { ProjectCard } from '@/components/widgets';
import { useProjects } from '@/hooks/useProjects';
import { useSkillGroups, useLanguages } from '@/hooks/useLocalizedData';
import { useLanguage } from '@/context/LanguageContext';

const EASE = [0.22, 1, 0.36, 1];

/* ============================================================
   HERO — ПРОГРАММИРОВАНИЕ
   ============================================================ */
function ProgrammingHero() {
  const { t } = useLanguage();

  // Вертикальные колонки бинарного кода
  const columns = Array.from({ length: 14 }).map((_, i) => ({
    digits: Array.from({ length: 40 }).map(() => (Math.random() > 0.5 ? '1' : '0')),
    direction: i % 2 === 0 ? 'up' : 'down',
    duration: 25 + (i * 4) % 25,
    delay: (i * 0.3) % 3,
  }));

  return (
    <section
      className="relative overflow-hidden
                 pt-10 pb-16 sm:pt-12 sm:pb-20
                 md:pt-8 md:pb-28 lg:pt-6 lg:pb-32"
    >
      {/* ФОН — ТОЧЕЧНАЯ СЕТКА */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.3] sm:opacity-[0.35] dark:opacity-[0.2] dark:sm:opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          color: 'rgba(0,0,0,0.25)',
          maskImage: 'radial-gradient(ellipse at 40% 40%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 40% 40%, black 30%, transparent 80%)',
        }}
      />

      {/* ПРАВАЯ ПОЛОСА — БИНАРНЫЙ КОД */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 right-0
                   w-[28%] sm:w-[32%] md:w-[36%] lg:w-[34%] xl:w-[32%]
                   select-none z-0 flex overflow-hidden"
      >
        {columns.map((col, i) => (
          <div key={i} className="flex-1 relative overflow-hidden">
            <motion.div
              initial={{ y: col.direction === 'up' ? '0%' : '-50%' }}
              animate={{ y: col.direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'] }}
              transition={{
                duration: col.duration,
                repeat: Infinity,
                ease: 'linear',
                delay: col.delay,
              }}
              className="font-mono text-[9px] sm:text-[10px] lg:text-xs leading-[2]
                         text-center text-black/[0.12] dark:text-white/[0.12]"
            >
              {col.digits.map((d, j) => (
                <div key={`a-${j}`}>{d}</div>
              ))}
              {col.digits.map((d, j) => (
                <div key={`b-${j}`}>{d}</div>
              ))}
            </motion.div>
          </div>
        ))}

        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32
                        bg-gradient-to-b from-white dark:from-[#0a0a0a] to-transparent
                        pointer-events-none z-10" />
      </motion.div>

      {/* ВОЛНЫ — ВЕРХНИЙ ПРАВЫЙ */}
      <svg
        aria-hidden="true"
        className="absolute -top-56 -right-40 sm:-top-72 sm:-right-56
                   md:-top-[29rem] md:-right-60
                   w-[18rem] sm:w-[24rem] md:w-[42rem]
                   h-[18rem] sm:h-[24rem] md:h-[42rem]
                   opacity-[0.2] sm:opacity-[0.22] md:opacity-[0.28]
                   dark:opacity-[0.25] dark:sm:opacity-[0.3] dark:md:opacity-[0.38]
                   pointer-events-none z-[1]"
        viewBox="0 0 700 700"
        fill="none"
        preserveAspectRatio="xMaxYMin meet"
      >
        <g transform="rotate(30 350 350)">
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M 700 ${-20 + i * 26}
                  C 620 ${-20 + i * 26}, 560 ${180 + i * 26}, 460 ${60 + i * 26}
                  C 360 ${-60 + i * 26}, 300 ${220 + i * 26}, 200 ${100 + i * 26}
                  C 100 ${-20 + i * 26}, 40 ${180 + i * 26}, -20 ${80 + i * 26}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </g>
      </svg>

      {/* ВОЛНЫ — НИЖНИЙ ЛЕВЫЙ */}
      <svg
        aria-hidden="true"
        className="absolute bottom-4 sm:bottom-8 md:bottom-16 lg:bottom-10
                   -left-16 sm:-left-24 md:-left-[30rem]
                   w-[18rem] sm:w-[24rem] md:w-[42rem]
                   h-[18rem] sm:h-[24rem] md:h-[42rem]
                   opacity-[0.2] sm:opacity-[0.22] md:opacity-[0.28]
                   dark:opacity-[0.25] dark:sm:opacity-[0.3] dark:md:opacity-[0.38]
                   pointer-events-none origin-bottom-left z-[1]"
        viewBox="0 0 700 700"
        fill="none"
        preserveAspectRatio="xMinYMax meet"
        style={{ transform: 'rotate(35deg) translate(10%, -10%)' }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={i}
            d={`M -20 ${80 + i * 26}
                C 60 ${80 + i * 26}, 120 ${280 + i * 26}, 220 ${160 + i * 26}
                C 320 ${40 + i * 26}, 380 ${320 + i * 26}, 480 ${200 + i * 26}
                C 580 ${80 + i * 26}, 640 ${280 + i * 26}, 700 ${180 + i * 26}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-30 max-w-7xl mx-auto px-6">
        {/* ВЕРХНЯЯ СТРОКА */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-start gap-2 sm:gap-3 md:gap-5 mb-4
                     text-[8px] sm:text-[9px] md:text-[11px] uppercase
                     tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em]
                     text-gray-600 dark:text-gray-400"
        >
          <span className="w-4 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
          <span>{t('programming.heroKicker')}</span>
          <span className="w-4 sm:w-6 md:w-10 h-px bg-gray-400 dark:bg-gray-600" />
        </motion.div>

        {/* ЗАГОЛОВОК */}
        <div className="relative max-w-full sm:max-w-[70%] md:max-w-[62%] lg:max-w-[64%]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="font-bold leading-[0.9] tracking-tight text-left
                       text-[12vw] sm:text-[4.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem]
                       select-none whitespace-nowrap"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 900 }}
          >
            PROGRAMMING
          </motion.h1>
        </div>

        {/* ТЕКСТ + БЕЙДЖИ */}
        <div className="relative mt-8 sm:mt-10 md:mt-14 max-w-full sm:max-w-[75%] md:max-w-[58%] lg:max-w-[52%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="flex flex-col gap-4 text-left"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('programming.heroText')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
              className="flex flex-wrap items-center gap-2 mt-2"
            >
              {['npm run dev', 'git push', 'async', '{ }'].map((cmd) => (
                <span
                  key={cmd}
                  className="font-mono text-[10px] md:text-[11px] tracking-wider
                             px-2.5 py-1 border border-black/20 dark:border-white/20
                             text-gray-600 dark:text-gray-400
                             hover:bg-black hover:text-white
                             dark:hover:bg-white dark:hover:text-black
                             transition-colors cursor-default"
                >
                  {cmd}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ТЕРМИНАЛ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
          className="mt-10 sm:mt-12 md:mt-14 max-w-full sm:max-w-[80%] md:max-w-[58%]
                     border border-black/15 dark:border-white/15
                     bg-white/60 dark:bg-white/[0.03]
                     backdrop-blur-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="ml-2 font-mono text-[9px] sm:text-[10px] text-gray-400 dark:text-gray-500 tracking-wider">
              {t('programming.terminal')}
            </span>
          </div>

          <div className="p-3 font-mono text-[10px] sm:text-[11px] leading-[1.8] sm:leading-[1.9] overflow-x-auto">
            <div className="whitespace-nowrap">
              <span className="text-blue-500">PS</span>{' '}
              <span className="text-gray-500 dark:text-gray-400">C:\Portfolio\my-portfolio&gt;</span>{' '}
              <span className="text-black dark:text-white">cd</span>
            </div>

            <div className="mt-1 whitespace-nowrap">
              <span className="text-blue-500">PS</span>{' '}
              <span className="text-gray-500 dark:text-gray-400">C:\Portfolio\my-portfolio&gt;</span>{' '}
              <span className="text-black dark:text-white">npm install</span>
            </div>
            <div className="text-gray-400 dark:text-gray-500 whitespace-nowrap">
              added 248 packages in 12s
            </div>

            <div className="mt-1 whitespace-nowrap">
              <span className="text-blue-500">PS</span>{' '}
              <span className="text-gray-500 dark:text-gray-400">C:\Portfolio\my-portfolio&gt;</span>{' '}
              <span className="text-black dark:text-white">npm run dev</span>
            </div>
            <div className="text-gray-400 dark:text-gray-500 whitespace-nowrap">
              ➜ Local: http://localhost:5173/
            </div>

            <div className="mt-1 whitespace-nowrap">
              <span className="text-blue-500">PS</span>{' '}
              <span className="text-gray-500 dark:text-gray-400">C:\Portfolio\my-portfolio&gt;</span>{' '}
              <span className="text-black dark:text-white">git push</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                className="inline-block w-2 h-3.5 bg-black dark:bg-white ml-1 align-middle"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   СТРАНИЦА ПРОГРАММИРОВАНИЕ
   ============================================================ */
export default function Programming() {
  const { t } = useLanguage();
  const projects = useProjects();
  const skillGroups = useSkillGroups();
  const languages = useLanguages();

  return (
    <div className="relative">
      <ProgrammingHero />

      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">

        {/* ===== ЧТО Я УМЕЮ ===== */}
        <section className="mb-20 sm:mb-28 md:mb-32">
          <SectionTitle
            num="01"
            title={t('programming.skillsTitle')}
            subtitle={t('programming.skillsSubtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-black/15 dark:border-white/10">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: gi * 0.06 }}
                className="
                  p-5 sm:p-6 md:p-8 border-black/15 dark:border-white/10
                  hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors
                  md:border-r md:[&:nth-child(2n)]:border-r-0
                  lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0
                  border-b
                  [&:nth-last-child(-n+1)]:border-b-0
                  lg:[&:nth-last-child(-n+3)]:border-b-0
                "
              >
                <div className="flex items-baseline justify-between mb-5 md:mb-6 pb-4 border-b border-black/10 dark:border-white/10">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading">
                      {group.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                      {group.subtitle}
                    </span>
                  </div>
                  <span className="text-[10px] tabular-nums text-gray-400 dark:text-gray-600 font-mono">
                    {String(gi + 1).padStart(2, '0')}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-1.5 md:gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="
                        px-2.5 md:px-3 py-1 md:py-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.15em]
                        border border-black/20 dark:border-white/20
                        hover:bg-black hover:text-white
                        dark:hover:bg-white dark:hover:text-black
                        transition-colors cursor-default
                      "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 md:mt-8 border border-black/15 dark:border-white/10 p-5 sm:p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-6">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading">
                  {t('programming.languagesTitle')}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  {t('programming.languagesSubtitle')}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-baseline gap-2 md:gap-3">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      {lang.name}
                    </span>
                    <span className="text-[10px] tabular-nums text-gray-500 dark:text-gray-400 border border-black/20 dark:border-white/20 px-2 py-0.5">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===== ПРОЕКТЫ ===== */}
        <section className="mb-16 md:mb-20">
          <SectionTitle
            num="02"
            title={t('programming.projectsTitle')}
            subtitle={t('programming.projectsSubtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <Button href="https://github.com/username" variant="outline" size="lg">
              {t('programming.viewAllGithub')} →
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}