// src/pages/Design/components/SectionHeader.jsx
import { motion } from 'framer-motion';
import { EASE } from '../constants';

export default function SectionHeader({ num, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative flex items-end gap-3 md:gap-6 mb-10 md:mb-16"
    >
      <span className="font-heading text-4xl md:text-6xl lg:text-7xl leading-none tracking-tighter tabular-nums text-black/[0.1] dark:text-white/[0.1] select-none shrink-0">
        {num}
      </span>
      <div className="flex items-center gap-3 md:gap-4 pb-1.5 md:pb-3 min-w-0">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="block w-6 md:w-14 h-px bg-black/50 dark:bg-white/50 origin-left shrink-0"
        />
        <span className="text-[10px] uppercase tracking-[0.3em] md:tracking-[0.42em] text-gray-500 dark:text-gray-400 truncate">
          {label}
        </span>
      </div>
    </motion.div>
  );
}