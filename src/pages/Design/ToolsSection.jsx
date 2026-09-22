// src/pages/Design/ToolsSection.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { EASE, TOOL_GROUPS, OFFSETS } from './constants';
import SectionHeader from './components/SectionHeader';
import DragBadge from './components/DragBadge';

export default function ToolsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-10 md:py-20">
        <SectionHeader num="01" label={t('design.toolsKicker')} />

        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {TOOL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: gi * 0.06 }}
              className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-black/[0.025] dark:bg-white/[0.035]"
            >
              <div className="flex items-baseline gap-3 mb-5 md:mb-8">
                <span className="text-[10px] tabular-nums tracking-[0.3em] text-gray-400">
                  {String(gi + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-sm md:text-lg uppercase tracking-[0.15em]">
                  {t(group.labelKey)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {group.items.map((tool, ti) => (
                  <DragBadge key={tool} initialPos={OFFSETS[(gi * 3 + ti) % OFFSETS.length]}>
                    <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 text-[11px] md:text-sm font-medium tracking-tight bg-white dark:bg-[#0a0a0a] text-black dark:text-white rounded-full shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                      {tool}
                    </span>
                  </DragBadge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}