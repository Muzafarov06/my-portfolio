// src/pages/DesignWork.jsx
import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useDesignCategories } from '@/hooks/useLocalizedData';
import { getWork, getWorksByCategory } from '@/data/designWorks';
import { Tag } from '@/components/ui';
import { Lightbox } from '@/components/widgets';

/* ============================================================
   Плитка галереи — 3:4 портрет / 3:2 альбом
   ============================================================ */
function GalleryItem({ img, index, work, onClick, t }) {
  const imgSrc = typeof img === 'string' ? img : img.src;
  const imgTitle = typeof img === 'string' ? '' : img.title;
  const [isLandscape, setIsLandscape] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className={`relative block w-full overflow-hidden group cursor-zoom-in
                  bg-gray-100 dark:bg-gray-900
                  ${isLandscape ? 'col-span-2' : ''}`}
    >
      <div className={`relative w-full overflow-hidden ${isLandscape ? 'aspect-[3/2]' : 'aspect-[3/4]'}`}>
        <img
          src={imgSrc}
          alt={imgTitle || `${work.title} — ${index + 1}`}
          onLoad={(e) => {
            const { naturalWidth, naturalHeight } = e.currentTarget;
            if (naturalWidth > naturalHeight) setIsLandscape(true);
          }}
          className="absolute inset-0 w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 scale-[1.01] group-hover:scale-[1.04] transition-all duration-700 ease-out"
          loading="lazy"
        />
      </div>

      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />

      <span className="absolute top-2 left-2 md:top-3 md:left-3 text-[9px] md:text-[10px] font-bold tabular-nums text-white mix-blend-difference opacity-70 group-hover:opacity-100 transition-opacity">
        {String(index + 1).padStart(2, '0')}
      </span>

      <span className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full bg-black/55 backdrop-blur-sm text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 border border-white/15">
        {t('designWork.open')} ↗
      </span>

      {imgTitle && (
        <span className="hidden md:block absolute bottom-3 left-3 max-w-[70%] text-[10px] text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {imgTitle}
        </span>
      )}
    </motion.button>
  );
}

export default function DesignWork() {
  const { t } = useLanguage();
  const { categoryId, workId } = useParams();
  const categories = useDesignCategories();
  const category = categories.find((c) => c.id === categoryId);
  const work = getWork(categoryId, workId);
  const works = getWorksByCategory(categoryId);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!category || !work) return <Navigate to="/design" replace />;

  const currentIndex = works.findIndex((w) => w.id === workId);
  const prevWork = works[currentIndex - 1];
  const nextWork = works[currentIndex + 1];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.025] dark:opacity-[0.04] z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Навигация */}
        <div className="mb-16 flex items-center justify-between gap-4">
          <Link
            to={`/design/${categoryId}`}
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-gray-500 hover:text-black dark:hover:text-white transition group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {category.title}
          </Link>
          <span className="text-[10px] uppercase tracking-[0.35em] text-gray-400 tabular-nums">
            {String(currentIndex + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')}
          </span>
        </div>

        {/* Заголовок */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 pb-8 border-b border-black/15 dark:border-white/10"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400">{work.year}</span>
            <span className="w-8 h-px bg-black/30 dark:bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">{category.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-[0.95] tracking-tight">
            {work.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {work.shortDescription}
          </p>
        </motion.header>

        {/* Контент + сайдбар */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400">01</span>
                <span className="w-8 h-px bg-black/30 dark:bg-white/30" />
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500">{t('designWork.about')}</h2>
              </div>
              <p className="text-lg md:text-xl leading-[1.5] text-gray-800 dark:text-gray-200 font-light whitespace-pre-line">
                {work.description}
              </p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-baseline gap-4 mb-10">
                <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400">02</span>
                <span className="w-8 h-px bg-black/30 dark:bg-white/30" />
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500">{t('designWork.tasks')}</h2>
              </div>
              <ul className="flex flex-col">
                {work.tasks.map((task, i) => (
                  <li key={i} className="group flex gap-6 items-start py-5 border-b border-black/10 dark:border-white/10 last:border-0 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors px-2 -mx-2">
                    <span className="text-3xl md:text-4xl font-heading tabular-nums text-gray-300 dark:text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0 w-14">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base md:text-lg leading-relaxed pt-1 flex-1">{task}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative pl-8 md:pl-12 py-8 md:py-12">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-black dark:bg-white" />
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400">03</span>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500">{t('designWork.result')}</h2>
              </div>
              <p className="font-heading text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
                {work.result}
              </p>
            </motion.section>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="border border-black/15 dark:border-white/10 p-6 md:p-8">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[10px] tabular-nums text-gray-400">—</span>
                <h3 className="text-[10px] uppercase tracking-[0.35em] text-gray-500">{t('designWork.tools')}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {work.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
              </div>
            </div>

            <div className="border border-black/15 dark:border-white/10 divide-y divide-black/15 dark:divide-white/10">
              {prevWork && (
                <Link to={`/design/${categoryId}/${prevWork.id}`}
                  className="block p-5 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 group-hover:text-gray-400 flex items-center gap-2">
                    ← {t('designWork.prev')}
                  </span>
                  <p className="text-sm font-heading mt-2 truncate">{prevWork.title}</p>
                </Link>
              )}
              {nextWork && (
                <Link to={`/design/${categoryId}/${nextWork.id}`}
                  className="block p-5 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 group-hover:text-gray-400 flex items-center gap-2 justify-end">
                    {t('designWork.next')} →
                  </span>
                  <p className="text-sm font-heading mt-2 text-right truncate">{nextWork.title}</p>
                </Link>
              )}
            </div>
          </aside>
        </div>

        {/* Галерея */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
          className="mb-24">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400">04</span>
            <span className="w-8 h-px bg-black/30 dark:bg-white/30" />
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500">{t('designWork.gallery')}</h2>
            {work.images.length > 0 && (
              <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-gray-400 tabular-nums">
                {t('designWork.photos', { n: work.images.length })}
              </span>
            )}
          </div>

          {work.images.length > 0 ? (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
              {work.images.map((img, i) => (
                <GalleryItem
                  key={i}
                  img={img}
                  index={i}
                  work={work}
                  onClick={() => setLightboxIndex(i)}
                  t={t}
                />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-black/20 dark:border-white/20 p-12 md:p-20 text-center">
              <div className="text-4xl md:text-6xl mb-4 opacity-20">◻</div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-2">{t('designWork.noPhotos')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('designWork.noPhotosText')}
              </p>
            </div>
          )}
        </motion.section>

        {/* Навигация снизу */}
        <div className="pt-12 border-t border-black/15 dark:border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Link to={`/design/${categoryId}`}
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] hover:text-gray-500 transition">
            <span className="group-hover:-translate-x-2 transition-transform text-2xl">←</span>
            <span>{t('designWork.toCategory')}</span>
          </Link>
          <Link to="/design"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] hover:text-gray-500 transition">
            <span>{t('common.allCategories')}</span>
            <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
          </Link>
        </div>
      </div>

      {/* Лайтбокс */}
      <AnimatePresence>
        {lightboxIndex !== null && work.images.length > 0 && (
          <Lightbox
            images={work.images.map((img) =>
              typeof img === 'string' ? { src: img, title: '', description: '' } : img
            )}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}