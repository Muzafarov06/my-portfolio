import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PhotoSection from './PhotoSection';

/* ============================================================
   MOBILE — вертикальный snap-скролл, редакционная подача
   ============================================================ */
export default function MobileCarousel({ photos, onActiveChange }) {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Активная секция через IntersectionObserver
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { root, threshold: [0.55] }
    );

    root.querySelectorAll('[data-index]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [photos.length]);

  // Прогресс чтения
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? el.scrollTop / max : 0);
  };

  useEffect(() => {
    onActiveChange?.(activeIndex);
  }, [activeIndex, onActiveChange]);

  return (
    <div className="relative w-full overflow-hidden">

      {/* ── ВЕРХНЯЯ СТРОКА: счётчик + подпись ── */}
      <div className="absolute top-0 left-0 right-0 z-40 px-6 pt-3 flex items-baseline justify-between pointer-events-none">
        <div className="flex items-baseline gap-2 text-black dark:text-white">
          <span className="text-2xl font-light tabular-nums leading-none">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-600">/</span>
          <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
            {String(photos.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* ── ПРАВАЯ ВЕРТИКАЛЬНАЯ НАВИГАЦИЯ ── */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 pointer-events-none">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`block rounded-full transition-all duration-500 ease-out ${
              i === activeIndex
                ? 'w-[3px] h-6 bg-black dark:bg-white'
                : 'w-[3px] h-[3px] bg-black/25 dark:bg-white/25'
            }`}
          />
        ))}
      </div>

      {/* ── СКРОЛЛЕР ── */}
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="max-h-[100svh] overflow-y-scroll snap-y snap-mandatory scrollbar-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {photos.map((photo, index) => (
          <PhotoSection
            key={photo.id}
            photo={photo}
            index={index}
            total={photos.length}
          />
        ))}
      </div>

      {/* ── ПОДСКАЗКА «СВАЙП» ── */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: progress > 0.02 ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500">
          Свайп
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-sm text-gray-400 dark:text-gray-500"
        >
          ↓
        </motion.span>
      </motion.div>

      {/* ── НИЖНИЙ ПРОГРЕСС-БАР ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/[0.08] dark:bg-white/10 z-40">
        <div
          className="h-full bg-black dark:bg-white"
          style={{ transform: `scaleX(${progress})`, transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
}