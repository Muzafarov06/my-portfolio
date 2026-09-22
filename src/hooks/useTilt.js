// src/hooks/useTilt.js
import { useCallback, useEffect, useRef } from 'react';
import { useRafThrottle, shouldSkipCursorEffects } from './useRafThrottle';

/**
 * 3D-наклон элемента за курсором.
 * Использование: const ref = useTilt(10);
 *
 * - rAF-троттлинг
 * - Отключено на тач-устройствах и при prefers-reduced-motion
 * - Сбрасывает transform при unmount
 */
export function useTilt(max = 8) {
  const ref = useRef(null);
  const target = useRef({ rx: 0, ry: 0 });
  const { schedule, cancel } = useRafThrottle();

  const apply = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { rx, ry } = target.current;
    el.style.transform = `perspective(900px) rotateY(${ry}deg) rotateX(${rx}deg)`;
  }, []);

  const onMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.current = {
        ry: px * max,
        rx: -py * max,
      };
      schedule(apply);
    },
    [max, schedule, apply]
  );

  const onLeave = useCallback(() => {
    target.current = { rx: 0, ry: 0 };
    schedule(apply);
  }, [schedule, apply]);

  useEffect(() => {
    if (shouldSkipCursorEffects()) return;
    const el = ref.current;
    if (!el) return;

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancel();
      el.style.transform = 'perspective(900px) rotateY(0) rotateX(0)';
    };
  }, [onMove, onLeave, cancel]);

  return ref;
}