import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { PROJECT_TYPES } from '@/data/projects';

export default function ProjectCard({ project, index }) {
  const { t } = useLanguage();
  const symbol = PROJECT_TYPES[project.category]?.symbol || '·';
  const label  = t(`data.projectTypes.${project.category}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative h-full"
    >
      {/* НАВИСАЮЩАЯ ПЛАШКА */}
      <div
        className="
          absolute -top-3 -left-3 z-20
          flex items-center gap-2
          px-3 py-2 md:px-4 md:py-2.5
          bg-black text-white
          dark:bg-white dark:text-black
          shadow-[4px_4px_0_0_rgba(0,0,0,0.15)]
          dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.15)]
          transition-transform duration-300
          group-hover:-translate-y-1
        "
        style={{ transform: 'rotate(-3deg)' }}
      >
        <span className="text-base md:text-lg leading-none">{symbol}</span>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
          {label}
        </span>
      </div>

      <Link
        to={`/programming/${project.id}`}
        className="relative flex flex-col border border-black/15 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 h-full overflow-hidden"
      >
        <div className="flex-1 flex flex-col p-6 md:p-8 pt-8 md:pt-10 min-w-0">

          <span className="text-[10px] tracking-[0.3em] text-gray-500 dark:text-gray-400 group-hover:text-gray-400 mb-4">
            {project.year}
          </span>

          <h3 className="text-xl md:text-2xl font-heading mb-2 break-words">
            {project.title}
          </h3>

          <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 group-hover:text-gray-400 break-words">
            {project.subtitle}
          </p>

          <p className="text-sm leading-relaxed mb-6 opacity-80">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[9px] uppercase tracking-[0.15em] px-2 py-1 border border-current opacity-60"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-[9px] uppercase tracking-[0.15em] px-2 py-1 opacity-60">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          <span className="absolute bottom-6 right-6 text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}