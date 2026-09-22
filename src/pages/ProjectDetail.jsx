import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useProject, useProjects, useProjectTypes } from '@/hooks/useProjects';
import { Button, Tag } from '@/components/ui';
import { Lightbox } from '@/components/widgets';
import { useLanguage } from '@/context/LanguageContext';

const EASE = [0.22, 1, 0.36, 1];

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const project = useProject(id);
  const allProjects = useProjects();
  const projectTypes = useProjectTypes();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!project) return <Navigate to="/programming" replace />;

  const type = projectTypes[project.category] || { label: '', symbol: '·' };
  const images = project.images || [];
  const currentIndex = allProjects.findIndex((p) => p.id === id);
  const prevProject = allProjects[currentIndex + 1];
  const nextProject = allProjects[currentIndex - 1];
  const projectNumber = String(currentIndex + 1).padStart(2, '0');

  return (
    <div className="relative">

      {/* ФОНОВАЯ СЕТКА */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.02] dark:opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      {/* ГИГАНТСКИЙ НОМЕР — ФОН (xl+) */}
      <motion.span
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
        aria-hidden="true"
        className="hidden xl:block pointer-events-none select-none
                   fixed top-1/2 -translate-y-1/2 -left-14
                   font-heading font-black leading-[0.8] tracking-tighter
                   text-[34rem]
                   text-black/[0.02] dark:text-white/[0.03] z-0"
      >
        {projectNumber}
      </motion.span>

      <div className="relative z-10 h-px bg-black/10 dark:bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">

        {/* НАВИГАЦИЯ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="pt-6 sm:pt-8 md:pt-12 flex items-center justify-between gap-4"
        >
          <Link
            to="/programming"
            className="inline-flex items-center gap-2 sm:gap-3 text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em]
                       text-gray-500 hover:text-black dark:hover:text-white transition group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>{t('common.allProjects')}</span>
          </Link>

          <span className="text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gray-400 tabular-nums">
            {projectNumber} / {String(allProjects.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* HERO */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="pt-8 sm:pt-12 md:pt-20 pb-8 sm:pb-12 md:pb-20"
        >
          <div className="flex items-start gap-4 sm:gap-6 md:gap-10 mb-5 sm:mb-7 md:mb-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl
                         font-black leading-[0.8] tracking-tighter text-gray-200 dark:text-gray-800
                         shrink-0 select-none"
            >
              {projectNumber}
            </motion.span>

            <div className="flex-1 pt-2 sm:pt-4 md:pt-6 flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-4 md:gap-5">
              <span className="font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500">
                {project.year}
              </span>

              <span className="w-5 sm:w-6 h-px bg-black/20 dark:bg-white/20" />

              <span className="inline-flex items-baseline gap-2">
                <span className="text-[10px] sm:text-xs text-gray-400">{type.symbol}</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em]
                                 text-gray-700 dark:text-gray-300">
                  {type.label}
                </span>
              </span>
            </div>
          </div>

          <h1 className="font-heading leading-[0.92] tracking-[-0.02em]
                         text-[11vw] sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]
                         break-words max-w-6xl">
            {project.title}
          </h1>

          <div className="mt-6 sm:mt-8 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
            <p className="lg:col-span-8 text-base sm:text-lg md:text-xl lg:text-2xl
                          text-gray-600 dark:text-gray-400 leading-[1.45] sm:leading-[1.4] font-light">
              {project.subtitle}
            </p>

            <div className="lg:col-span-4 flex items-end gap-6 sm:gap-8 lg:justify-end">
              <div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-1.5 sm:mb-2">
                  {t('programming.tasks')}
                </div>
                <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-light tabular-nums leading-none">
                  {String(project.tasks.length).padStart(2, '0')}
                </div>
              </div>
              <div className="w-px h-10 sm:h-12 md:h-14 bg-black/10 dark:bg-white/10" />
              <div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-1.5 sm:mb-2">
                  {t('programming.stack')}
                </div>
                <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-light tabular-nums leading-none">
                  {String(project.stack.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="h-px bg-black/10 dark:bg-white/10" />

        {/* ОСНОВНОЙ БЛОК */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 py-10 sm:py-12 md:py-20">

          <div className="lg:col-span-8 flex flex-col gap-10 sm:gap-12 md:gap-20">

            {/* 01 — О проекте */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="flex items-baseline gap-4 sm:gap-5 mb-5 sm:mb-8 md:mb-10">
                <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400">01</span>
                <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
                <h2 className="text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gray-500">
                  {t('programming.aboutProject')}
                </h2>
              </div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.55]
                            whitespace-pre-line text-gray-800 dark:text-gray-200 font-light">
                {project.description}
              </p>
            </motion.section>

            {/* 02 — Что было сделано */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="flex items-baseline gap-4 sm:gap-5 mb-5 sm:mb-8 md:mb-10">
                <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400">02</span>
                <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
                <h2 className="text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gray-500">
                  {t('programming.whatIDid')}
                </h2>
              </div>

              <ul className="flex flex-col">
                {project.tasks.map((task, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                    className="group flex gap-3 sm:gap-5 md:gap-6 items-baseline
                               py-3.5 sm:py-4 md:py-5 border-b border-black/10 dark:border-white/10 last:border-0"
                  >
                    <span className="font-mono text-[10px] tabular-nums text-gray-400 shrink-0 w-6 sm:w-8 pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] sm:text-base md:text-lg leading-relaxed flex-1
                                     group-hover:translate-x-1 transition-transform duration-500">
                      {task}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* 03 — Результат */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="flex items-baseline gap-4 sm:gap-5 mb-5 sm:mb-8 md:mb-10">
                <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400">03</span>
                <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
                <h2 className="text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gray-500">
                  {t('programming.result')}
                </h2>
              </div>

              <p className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem]
                            leading-[1.1] sm:leading-[1.05] tracking-tight font-light">
                {project.result}
              </p>
            </motion.section>
          </div>

          {/* ПРАВАЯ КОЛОНКА — sticky */}
          <aside className="lg:col-span-4 flex flex-col lg:sticky lg:top-24 lg:self-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="pb-6 md:pb-7 border-b border-black/10 dark:border-white/10"
            >
              <div className="flex items-baseline justify-between mb-4 md:mb-5">
                <h3 className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                  {t('programming.stack')}
                </h3>
                <span className="font-mono text-[10px] tabular-nums text-gray-400">
                  {String(project.stack.length).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </motion.div>

            {(project.links?.github || project.links?.demo) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="py-6 md:py-7 border-b border-black/10 dark:border-white/10"
              >
                <h3 className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mb-4 md:mb-5">
                  {t('programming.links')}
                </h3>
                <div className="flex flex-col gap-2.5 md:gap-3">
                  {project.links.github && (
                    <Button href={project.links.github} variant="outline" size="sm">
                      GitHub →
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button href={project.links.demo} variant="primary" size="sm">
                      {t('programming.demo')} →
                    </Button>
                  )}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="py-6 md:py-7"
            >
              <h3 className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mb-3 md:mb-4">
                {t('programming.navigation')}
              </h3>

              <div className="flex flex-col">
                {prevProject && (
                  <Link
                    to={`/programming/${prevProject.id}`}
                    className="group block py-3 border-b border-black/10 dark:border-white/10"
                  >
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400
                                     flex items-center gap-2 mb-1.5
                                     group-hover:text-black dark:group-hover:text-white transition-colors">
                      <span className="group-hover:-translate-x-1 transition-transform">←</span>
                      {t('programming.prevProject')}
                    </span>
                    <p className="font-heading text-[15px] sm:text-base md:text-lg leading-tight
                                  group-hover:opacity-60 transition-opacity">
                      {prevProject.title}
                    </p>
                  </Link>
                )}
                {nextProject && (
                  <Link
                    to={`/programming/${nextProject.id}`}
                    className="group block py-3 text-right"
                  >
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400
                                     flex items-center justify-end gap-2 mb-1.5
                                     group-hover:text-black dark:group-hover:text-white transition-colors">
                      {t('programming.nextProject')}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <p className="font-heading text-[15px] sm:text-base md:text-lg leading-tight
                                  group-hover:opacity-60 transition-opacity">
                      {nextProject.title}
                    </p>
                  </Link>
                )}
              </div>
            </motion.div>
          </aside>
        </div>

        <div className="h-px bg-black/10 dark:bg-white/10" />

        {/* ГАЛЕРЕЯ */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          className="py-10 sm:py-12 md:py-20"
        >
          <div className="flex items-baseline gap-4 sm:gap-5 mb-7 sm:mb-10 md:mb-14">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400">04</span>
            <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
            <h2 className="text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gray-500">
              {t('programming.gallery')}
            </h2>
            {images.length > 0 && (
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 tabular-nums">
                {t('programming.photosCount', { count: images.length })}
              </span>
            )}
          </div>

          {images.length > 0 ? (
            <div className="flex flex-col gap-10 sm:gap-12 md:gap-20">
              {images[0] && (
                <motion.button
                  onClick={() => setLightboxIndex(0)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="group text-left w-full"
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8] overflow-hidden
                                  bg-gray-100 dark:bg-gray-900">
                    <img
                      src={images[0].src}
                      alt={images[0].title || project.title}
                      className="w-full h-full object-cover
                                 grayscale-[60%] transition-all duration-[1.2s] ease-out
                                 group-hover:grayscale-0 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.15] transition-colors duration-700" />
                    <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6
                                    w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
                                    flex items-center justify-center
                                    border border-white/50 text-white text-base sm:text-lg md:text-xl
                                    opacity-0 group-hover:opacity-100
                                    translate-y-2 group-hover:translate-y-0
                                    transition-all duration-500
                                    backdrop-blur-md bg-white/10">
                      ⤢
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-5 mt-4 md:mt-6">
                    <span className="font-mono text-[10px] tabular-nums text-gray-400 pt-1 shrink-0">01</span>
                    <div className="max-w-2xl">
                      <h3 className="font-heading text-base sm:text-lg md:text-2xl leading-tight
                                     uppercase tracking-wider mb-1.5 sm:mb-2">
                        {images[0].title || t('programming.mainScreen')}
                      </h3>
                      {images[0].description && (
                        <p className="text-[13px] sm:text-sm md:text-base text-gray-500 dark:text-gray-400
                                      leading-relaxed font-light">
                          {images[0].description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.button>
              )}

              {images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-20">
                  {images.slice(1).map((img, i) => {
                    const isLarge = i % 2 === 0;
                    const span = isLarge ? 'md:col-span-7' : 'md:col-span-5';
                    const aspect = isLarge ? 'aspect-[4/3] md:aspect-[16/11]' : 'aspect-[4/3] md:aspect-[4/5]';
                    const offset = !isLarge ? 'md:mt-24' : '';

                    return (
                      <motion.button
                        key={i + 1}
                        onClick={() => setLightboxIndex(i + 1)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: EASE }}
                        className={`group text-left ${span} ${offset}`}
                      >
                        <div className={`relative w-full ${aspect} overflow-hidden bg-gray-100 dark:bg-gray-900`}>
                          <img
                            src={img.src}
                            alt={img.title || project.title}
                            className="w-full h-full object-cover
                                       grayscale-[60%] transition-all duration-[1.2s] ease-out
                                       group-hover:grayscale-0 group-hover:scale-[1.04]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.15] transition-colors duration-700" />
                          <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5
                                          w-9 h-9 sm:w-10 sm:h-10
                                          flex items-center justify-center
                                          border border-white/50 text-white text-sm sm:text-base
                                          opacity-0 group-hover:opacity-100
                                          translate-y-2 group-hover:translate-y-0
                                          transition-all duration-500
                                          backdrop-blur-md bg-white/10">
                            ⤢
                          </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-5 mt-3.5 sm:mt-4 md:mt-5">
                          <span className="font-mono text-[10px] tabular-nums text-gray-400 pt-1 shrink-0">
                            {String(i + 2).padStart(2, '0')}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading text-[15px] sm:text-base md:text-lg leading-tight
                                           uppercase tracking-wider mb-1 sm:mb-1.5">
                              {img.title || t('programming.imageN', { n: i + 2 })}
                            </h3>
                            {img.description && (
                              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400
                                            leading-relaxed font-light line-clamp-2">
                                {img.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="border border-dashed border-black/15 dark:border-white/15
                            p-10 sm:p-16 md:p-24 text-center">
              <div className="font-heading text-5xl sm:text-6xl md:text-8xl mb-4 sm:mb-6 opacity-10 leading-none">
                ◻
              </div>
              <p className="text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gray-400 mb-2 sm:mb-3">
                {t('programming.noPhotos')}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto font-light">
                {t('programming.noPhotosText')}
              </p>
            </div>
          )}
        </motion.section>

        {/* НАВИГАЦИЯ СНИЗУ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 sm:py-10 md:py-14 border-t border-black/10 dark:border-white/10
                     flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-6"
        >
          <Link
            to="/programming"
            className="group inline-flex items-center gap-2.5 sm:gap-3
                       text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] hover:text-gray-500 transition"
          >
            <span className="group-hover:-translate-x-2 transition-transform text-lg sm:text-xl">←</span>
            <span>{t('common.allProjects')}</span>
          </Link>

          <span className="hidden sm:block w-12 h-px bg-black/15 dark:bg-white/15" />

          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 sm:gap-3
                       text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] hover:text-gray-500 transition"
          >
            <span>{t('common.backHome')}</span>
            <span className="group-hover:translate-x-2 transition-transform text-lg sm:text-xl">→</span>
          </Link>
        </motion.div>
      </div>

      {/* ЛАЙТБОКС */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}