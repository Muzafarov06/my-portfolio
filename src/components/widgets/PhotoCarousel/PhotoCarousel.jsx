import { useEffect, useState } from 'react';
import MobileCarousel from './MobileCarousel';
import DesktopCarousel from './DesktopCarousel';

export default function PhotoCarousel({ photos, onActiveChange }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isMobile ? (
    <MobileCarousel photos={photos} onActiveChange={onActiveChange} />
  ) : (
    <DesktopCarousel photos={photos} onActiveChange={onActiveChange} />
  );
}