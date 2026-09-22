// src/pages/DesignCategory/heroes/DefaultHero.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function DefaultHero({ category, works }) {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-6 py-16 md:py-24">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="mb-12">
        <Link to="/design"
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-black dark:hover:text-white transition group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Все категории
        </Link>
      </motion.div>

      <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-20 pb-8 border-b border-black/15 dark:border-white/10">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400">{category.num}</span>
          <span className="w-8 h-px bg-black/30 dark:bg-white/30" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">{category.subtitle}</span>
        </div>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading leading-[0.95] tracking-tight mb-6">
          {category.title}
        </h1>
        <p className="text-base md:text-lg max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {category.description}
        </p>
        <div className="flex items-center gap-4 mt-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 tabular-nums">
            {String(works.length).padStart(2, '0')} работ
          </span>
        </div>
      </motion.header>
    </div>
  );
}