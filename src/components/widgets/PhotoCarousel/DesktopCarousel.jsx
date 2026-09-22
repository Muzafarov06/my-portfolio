import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import CarouselPhoto from './CarouselPhoto';

/* ============================================================
   DESKTOP — 3D-карусель с физикой скролла
   ============================================================ */
export default function DesktopCarousel({ photos, onActiveChange }) {
  const totalPhotos = photos.length;
  const containerRef = useRef(null);
  const position = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const startY = useRef(0);

  useEffect(() => {
    const unsub = position.on('change', (v) => {
      const N = totalPhotos;
      let idx = Math.round(v) % N;
      if (idx < 0) idx += N;
      setActiveIndex(idx);
    });
    return () => unsub();
  }, [position, totalPhotos]);

  useEffect(() => {
    onActiveChange?.(activeIndex);
  }, [activeIndex, onActiveChange]);

  const handleDragStart = (_, info) => {
    isDragging.current = true;
    startY.current = info.point.y;
  };

  const handleDrag = (_, info) => {
    const startPos = position.get();
    const dragDelta = -info.offset.y / 400;
    position.set(startPos + dragDelta);
  };

  const handleDragEnd = (_, info) => {
    isDragging.current = false;
    const velocity = -info.velocity.y / 1500;
    const current = position.get();
    const target = Math.round(current + velocity);
    animate(position, target, { type: 'spring', stiffness: 200, damping: 30 });
  };

  const handlePhotoTap = (index) => {
    if (isDragging.current) return;
    const N = totalPhotos;
    const current = position.get();
    const currentMod = ((current % N) + N) % N;
    let delta = index - currentMod;
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    animate(position, current + delta, { type: 'spring', stiffness: 200, damping: 30 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[750px] select-none overflow-visible"
      style={{ touchAction: 'pan-y' }}
    >
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.05}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
      >
        {photos.map((photo, index) => (
          <CarouselPhoto
            key={photo.id}
            photo={photo}
            index={index}
            position={position}
            totalPhotos={totalPhotos}
            onTap={() => handlePhotoTap(index)}
          />
        ))}
      </motion.div>
    </div>
  );
}