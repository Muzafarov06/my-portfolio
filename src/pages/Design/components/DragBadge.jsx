// src/pages/Design/components/DragBadge.jsx
import { motion } from 'framer-motion';

export default function DragBadge({ children, initialPos = { x: 0, y: 0 } }) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.12}
      dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
      whileDrag={{ scale: 1.06, zIndex: 50 }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 1.02 }}
      initial={{ x: initialPos.x, y: initialPos.y }}
      className="cursor-grab select-none touch-pan-y"
      style={{ zIndex: 10, touchAction: 'pan-y' }}
    >
      {children}
    </motion.div>
  );
}