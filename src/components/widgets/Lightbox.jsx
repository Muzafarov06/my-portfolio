// src/components/widgets/Lightbox.jsx
import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FOCUSABLE =
  'button, [href], [tabindex]:not([tabindex="-1"]), input, select, textarea';

/**
 * Полноэкранный лайтбокс для галереи.
 * Мобайл: свайп ←/→, тап по фону — закрыть.
 * Десктоп: стрелки ←/→, Escape, клик вне фото.
 * A11y: focus-trap, role="dialog", aria-modal, возврат фокуса.
 */
export default function Lightbox({ images, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const image = images[index];
  const hasMultiple = images.length > 1;
  const thumbsRef = useRef(null);
  const rootRef = useRef(null);

  const paginate = useCallback(
    (dir) => {
      if (!hasMultiple) return;
      setDirection(dir);
      setIndex((i) => (i + dir + images.length) % images.length);
    },
    [images.length, hasMultiple]
  );

  const next = useCallback(() => paginate(1), [paginate]);
  const prev = useCallback(() => paginate(-1), [paginate]);

  /* ============================================================
     Клавиатура + скролл-лок + focus-trap + возврат фокуса
     ============================================================ */
  useEffect(() => {
    const root = rootRef.current;
    const previouslyFocused = document.activeElement;

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowRight') {
        next();
        return;
      }
      if (e.key === 'ArrowLeft') {
        prev();
        return;
      }
      if (e.key === 'Tab' && root) {
        const focusables = root.querySelectorAll(FOCUSABLE);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKey);

    // Скролл-лок
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Автофокус на первую кнопку (обычно «Закрыть»)
    if (root) {
      const focusables = root.querySelectorAll(FOCUSABLE);
      focusables[0]?.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [onClose, next, prev]);

  /* Автоскролл активной миниатюры в центр */
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const active = container.children[index];
    if (active) {
      active.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [index]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  return (
    <motion.div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.title || `Изображение ${index + 1} из ${images.length}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col select-none"
      style={{ touchAction: 'none' }}
    >
      {/* ─── ТОНКАЯ ПОЛОСА ПРОГРЕССА СВЕРХУ ─── */}
      {hasMultiple && (
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-20">
          <motion.div
            className="h-full bg-white/80"
            initial={false}
            animate={{ width: `${((index + 1) / images.length) * 100}%` }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      )}

      {/* ─── ВЕРХНЯЯ ПАНЕЛЬ ─── */}
      <header
        className="relative flex items-center justify-between px-5 md:px-8 pt-[max(1rem,env(safe-area-inset-top))] pb-4 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-baseline gap-1.5 tabular-nums">
          <span className="text-white text-lg md:text-xl font-light tracking-tight">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white/30 text-xs md:text-sm font-light">/</span>
          <span className="text-white/40 text-xs md:text-sm font-light tracking-wide">
            {String(images.length).padStart(2, '0')}
          </span>
        </div>

        <span className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/25">
          <kbd className="px-1.5 py-0.5 border border-white/15 rounded">←</kbd>
          <kbd className="px-1.5 py-0.5 border border-white/15 rounded">→</kbd>
          <span>переключение</span>
          <kbd className="px-1.5 py-0.5 border border-white/15 rounded ml-2">ESC</kbd>
          <span>закрыть</span>
        </span>

        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="relative w-10 h-10 -mr-2 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        >
          <span className="absolute inset-0 rounded-full border border-white/10 scale-75 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2L14 14M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* ─── ЦЕНТР — ФОТО ─── */}
      <div className="flex-1 relative flex items-center justify-center px-4 md:px-20 overflow-hidden">
        {hasMultiple && (
          <>
            <NavButton side="left" onClick={prev} />
            <NavButton side="right" onClick={next} />
          </>
        )}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
            dragDirectionLock
            className="w-full h-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.title || `Изображение ${index + 1}`}
              draggable={false}
              className="max-h-[62vh] md:max-h-[74vh] max-w-full w-auto object-contain
                         shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]
                         will-change-transform"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── НИЖНЯЯ ЧАСТЬ ─── */}
      <motion.footer
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-5 md:px-8 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          {(image.title || image.description) && (
            <motion.div
              key={`meta-${index}`}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto text-center mb-5 md:mb-7"
            >
              {image.title && (
                <h3 className="font-heading uppercase tracking-[0.25em] text-white text-sm md:text-base mb-2">
                  {image.title}
                </h3>
              )}
              {image.description && (
                <p className="text-xs md:text-sm text-white/55 leading-relaxed font-light max-w-lg mx-auto">
                  {image.description}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {hasMultiple && (
          <div
            ref={thumbsRef}
            className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar
                       snap-x snap-mandatory scroll-smooth py-1"
          >
            <div className="shrink-0 w-[calc(50%-2rem)]" aria-hidden />
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Перейти к изображению ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={`group relative shrink-0 snap-center overflow-hidden rounded-[3px]
                            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${i === index
                              ? 'w-12 h-12 md:w-14 md:h-14 opacity-100 ring-1 ring-white/90 ring-offset-2 ring-offset-black'
                              : 'w-10 h-10 md:w-12 md:h-12 opacity-35 hover:opacity-70'
                            }`}
              >
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover"
                />
                {i !== index && (
                  <span className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-300" />
                )}
              </button>
            ))}
            <div className="shrink-0 w-[calc(50%-2rem)]" aria-hidden />
          </div>
        )}
      </motion.footer>

      {/* Скрытие скроллбаров — обычный <style>, не jsx */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </motion.div>
  );
}

/* ─── Кнопка навигации (десктоп) ─── */
function NavButton({ side, onClick }) {
  const isLeft = side === 'left';
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={isLeft ? 'Предыдущее' : 'Следующее'}
      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-10
                  w-12 h-12 items-center justify-center
                  text-white/50 hover:text-white
                  transition-all duration-300 hover:scale-110
                  ${isLeft ? 'left-4 lg:left-8' : 'right-4 lg:right-8'}`}
    >
      <span className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm
                       transition-all duration-300 group-hover:bg-white/10" />
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="relative">
        <path
          d={isLeft ? 'M11 3L5 9L11 15' : 'M7 3L13 9L7 15'}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}