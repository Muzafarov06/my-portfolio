// src/hooks/useRafThrottle.js
import { useCallback, useEffect, useRef } from 'react';

/**
 * Возвращает функцию `schedule(fn)`, которая откладывает вызов `fn`
 * до ближайшего requestAnimationFrame.
 * Если внутри кадра вызовов несколько — выполнится только последний.
 *
 * Также возвращает `cancel()` — отмену отложенного кадра (для cleanup).
 *
 * Использование:
 *   const raf = useRafThrottle();
 *   raf.schedule(() => { ... });
 *   // в unmount: raf.cancel();
 */
export function useRafThrottle() {
  const frameRef = useRef(0);
  const lastFnRef = useRef(null);

  const schedule = useCallback((fn) => {
    lastFnRef.current = fn;
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0;
      const f = lastFnRef.current;
      lastFnRef.current = null;
      if (typeof f === 'function') f();
    });
  }, []);

  const cancel = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
    lastFnRef.current = null;
  }, []);

  useEffect(() => () => cancel(), [cancel]);

  return { schedule, cancel };
}

/**
 * Проверка: устройство без hover (тач) или пользователь предпочитает
 * уменьшенную анимацию. В таких случаях курсорные эффекты не нужны.
 */
export function shouldSkipCursorEffects() {
  if (typeof window === 'undefined') return true;
  const noHover = window.matchMedia('(hover: none)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return noHover || reduced;
}