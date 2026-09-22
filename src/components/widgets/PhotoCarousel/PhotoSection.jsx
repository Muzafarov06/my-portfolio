import { motion } from 'framer-motion';

/* ── Одна секция с фото ── */
export default function PhotoSection({ photo, index, total }) {
  return (
    <section
      data-index={index}
      className="min-h-[100svh] snap-start flex flex-col items-center justify-start pt-16 pb-10 px-6 relative"
    >
      {/* Фото с плашкой и тенью */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative w-full max-w-[280px] aspect-[3/4] overflow-hidden
          shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]
          dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]
        "
      >
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-full object-cover grayscale contrast-110"
          draggable={false}
        />

        {/* Плашка с периодом — сверху слева */}
        <span
          className="
            absolute top-3 left-3 px-2 py-1
            text-[9px] font-bold uppercase tracking-[0.35em]
            text-white bg-black/40 backdrop-blur-sm
          "
        >
          {photo.period}
        </span>

        {/* Градиент снизу — для читаемости номера */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Номер — снизу справа */}
        <span
          className="
            absolute bottom-3 right-3
            text-[11px] tabular-nums text-white
            drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]
          "
        >
          {String(index + 1).padStart(2, '0')}
          <span className="opacity-50 mx-1">/</span>
          <span className="opacity-50">{String(total).padStart(2, '0')}</span>
        </span>
      </motion.div>

      {/* Текст под фото */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="mt-7 text-center max-w-[320px]"
      >
        <h2 className="text-xl font-heading tracking-tight text-black dark:text-white">
          {photo.title}
        </h2>
        <p className="text-[13px] mt-2.5 text-gray-600 dark:text-gray-400 leading-relaxed">
          {photo.description}
        </p>
      </motion.div>
    </section>
  );
}