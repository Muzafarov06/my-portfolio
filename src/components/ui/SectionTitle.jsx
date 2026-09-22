import { motion } from 'framer-motion';

/**
 * Заголовок секции с номером и линией.
 */
export default function SectionTitle({ num, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-4 mb-4">
        {num && (
          <span className="text-[10px] tracking-[0.4em] text-gray-500 dark:text-gray-400">
            {num}
          </span>
        )}
        <span className="w-8 h-px bg-black/30 dark:bg-white/30" />
        {subtitle && (
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            {subtitle}
          </span>
        )}
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.05] border-b border-black/80 dark:border-white/30 pb-4 inline-block">
        {title}
      </h2>
    </motion.div>
  );
}