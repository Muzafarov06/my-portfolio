// src/pages/Design/components/Divider.jsx
import { motion } from 'framer-motion';
import { EASE } from '../constants';

export default function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-6">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
        className="h-px w-full origin-left bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10"
      />
    </div>
  );
}