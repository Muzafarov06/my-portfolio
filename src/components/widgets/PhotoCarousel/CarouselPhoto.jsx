import { motion, useTransform } from 'framer-motion';

export default function CarouselPhoto({ photo, index, position, totalPhotos, onTap }) {
  const offset = useTransform(position, (p) => {
    const N = totalPhotos;
    let o = (index - p) % N;
    if (o > N / 2) o -= N;
    if (o < -N / 2) o += N;
    return o;
  });

  const y = useTransform(offset, (o) => o * 250);
  const x = useTransform(offset, (o) => {
    const angle = (o / totalPhotos) * Math.PI;
    return (1 - Math.cos(angle)) * 160 - 140;
  });

  const scale = useTransform(offset, (o) => {
    const abs = Math.abs(o);
    if (abs < 0.5) return 1.4;
    if (abs < 1.5) return 0.92;
    return Math.max(0.68, 1 - abs * 0.08);
  });

  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 20));

  const rotate = useTransform(offset, (o) => (o < 0 ? Math.abs(o) * 4 : -o * 4));

  const clipPath = useTransform(offset, (o) => {
    const angle = Math.min(Math.abs(o) * 6, 20);
    if (o < 0) return `polygon(${angle}% 0%, 100% 0%, 100% 100%, ${angle}% 100%)`;
    return `polygon(0% 0%, ${100 - angle}% 0%, ${100 - angle}% 100%, 0% 100%)`;
  });

  const filter = useTransform(offset, (o) => {
    const abs = Math.abs(o);
    if (abs < 0.5) return 'grayscale(50%) contrast(105%)';
    if (abs < 1.5) return 'grayscale(80%) contrast(100%)';
    return 'grayscale(95%) contrast(95%)';
  });

  const opacity = useTransform(offset, (o) => {
    const abs = Math.abs(o);
    if (abs < 0.5) return 1;
    if (abs < 1.5) return 0.75;
    return Math.max(0.35, 0.75 - abs * 0.15);
  });

  const boxShadow = useTransform(offset, (o) => {
    const abs = Math.abs(o);
    if (abs < 0.5) return '0 25px 50px -20px rgba(0,0,0,0.30)';
    return 'none';
  });

  return (
    <motion.div
      onTap={onTap}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '200px',
        height: '250px',
        marginLeft: '-100px',
        marginTop: '-125px',
        x, y, scale, zIndex, rotate, clipPath,
        boxShadow,
        opacity,
        cursor: 'pointer',
      }}
      className="overflow-hidden bg-white dark:bg-[#141414]"
    >
      <motion.img
        src={photo.url}
        alt={photo.title}
        className="w-full h-full object-cover pointer-events-none"
        style={{ filter }}
        draggable={false}
      />
    </motion.div>
  );
}