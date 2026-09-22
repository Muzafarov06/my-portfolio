// src/hooks/useMagnetic.js
import { useCallback, useEffect, useRef } from 'react';
import { useRafThrottle, shouldSkipCursorEffects } from './useRafThrottle';

/**
 * Магнитный ховер: элемент «тянется» к курсору.
 * Использование: const ref = useMagnetic(0.3);
 *
 * - Не дёргает DOM чаще одного раза за кадр (rAF)
 * - Не навешивает слушатели на тач-устройствах и при prefers-reduced-motion
 * - Сбрасывает transform при unmount
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const { schedule, cancel } = useRafThrottle();

  const apply = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { x, y } = target.current;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, []);

  const onMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      target.current = {
        x: (e.clientX - (r.left + r.width / 2)) * strength,
        y: (e.clientY - (r.top + r.height / 2)) * strength,
      };
      schedule(apply);
    },
    [strength, schedule, apply]
  );

  const onLeave = useCallback(() => {
    target.current = { x: 0, y: 0 };
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
      el.style.transform = 'translate3d(0, 0, 0)';
    };
  }, [onMove, onLeave, cancel]);

  return ref;
}