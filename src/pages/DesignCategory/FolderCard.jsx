// src/pages/DesignCategory/FolderCard.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE } from './constants';
import { getImageSrc } from './utils';

export default function FolderCard({ work, index, categoryId }) {
  const cover = work.images?.[0];
  const imagesCount = work.images?.length || 0;
  const hasCover = Boolean(cover);
  const coverSrc = hasCover ? getImageSrc(cover) : null;
  const [isLandscape, setIsLandscape] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={isLandscape ? 'col-span-2' : ''}
    >
      <Link to={`/design/${categoryId}/${work.id}`} className="group block">
        {/* Корешок папки */}
        <div className="relative z-10 flex items-end h-5 md:h-6">
          <div className="h-4 md:h-5 min-w-[42px] sm:min-w-[60px] max-w-[90px] rounded-t-md bg-white dark:bg-neutral-900 border-t border-l border-r border-black/10 dark:border-white/10 px-2 flex items-center transition-all duration-500 ease-out group-hover:min-w-[70px] sm:group-hover:min-w-[100px]">
            <span className="text-[7px] md:text-[8px] tabular-nums tracking-[0.2em] text-gray-400 dark:text-gray-500">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="ml-auto text-[7px] md:text-[8px] tabular-nums tracking-[0.1em] text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors">
              {work.year}
            </span>
          </div>
        </div>

        {/* Тело папки */}
        <div className="relative overflow-hidden rounded-b-xl rounded-tr-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] dark:group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group-hover:-translate-y-1.5 transition-all duration-500 ease-out">
          {hasCover ? (
            <div className={`relative w-full overflow-hidden ${isLandscape ? 'aspect-[3/2]' : 'aspect-[3/4]'}`}>
              <img
                src={coverSrc}
                alt={work.title}
                loading="lazy"
                onLoad={(e) => {
                  const { naturalWidth, naturalHeight } = e.currentTarget;
                  if (naturalWidth > naturalHeight) setIsLandscape(true);
                }}
                className="absolute inset-0 w-full h-full object-cover grayscale-[55%] group-hover:grayscale-0 scale-[1.01] group-hover:scale-[1.05] transition-all duration-[900ms] ease-out"
              />
            </div>
          ) : (
            <div className="aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950">
              <span className="font-heading text-4xl md:text-5xl font-bold text-black/[0.07] dark:text-white/[0.07] group-hover:text-black/[0.12] dark:group-hover:text-white/[0.12] transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-20 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

          <div
            className="absolute inset-x-0 bottom-0 h-[65%] backdrop-blur-[3px] bg-gradient-to-t from-black/85 via-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none [mask-image:linear-gradient(to_top,black_55%,transparent)]"
            aria-hidden="true" />

          {imagesCount > 1 && (
            <div className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 py-0.5 rounded-full bg-black/55 backdrop-blur-sm text-[8px] md:text-[9px] text-white tracking-[0.12em] flex items-center gap-1 border border-white/15 z-20">
              <span className="inline-block w-2 h-2 md:w-2.5 md:h-2.5 border border-white/70 rounded-[2px]" />
              <span className="tabular-nums">{imagesCount}</span>
            </div>
          )}

          {!hasCover && (
            <div className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 py-0.5 rounded-full bg-black/55 backdrop-blur-sm text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white border border-white/15 z-20">
              Скоро
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-2.5 md:p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h3 className="font-heading text-xs md:text-base lg:text-lg leading-tight text-white mb-1 md:mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                {work.title}
              </h3>
              <p className="hidden md:block text-[10px] md:text-xs text-white/95 leading-relaxed line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                {work.shortDescription}
              </p>
              <div className="flex items-center justify-between mt-2 md:mt-3 pt-2 border-t border-white/25">
                <span className="hidden sm:inline text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-white/85 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] truncate">
                  {work.stack?.[0] || ''}
                </span>
                <span className="ml-auto text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-white flex items-center gap-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                  {hasCover ? 'Открыть' : 'Подробнее'}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </div>
          </div>

          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-700 ease-out z-20" />
        </div>
      </Link>
    </motion.div>
  );
}