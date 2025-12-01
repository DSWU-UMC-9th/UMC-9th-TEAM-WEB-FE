import { useEffect, useMemo, useState } from 'react';
import type { HotQuote, HotQuoteSource } from '@/types/HomePage/home';

const toList = (source: HotQuoteSource): HotQuote[] => {
  if (!source) return [];
  return Array.isArray(source) ? source : [];
};

const pickRandom = (list: HotQuote[], excludeId?: number): HotQuote => {
  if (list.length === 1) return list[0];

  const candidates = excludeId !== undefined ? list.filter((q) => q.id !== excludeId) : list;

  const target = candidates.length > 0 ? candidates : list;
  const index = Math.floor(Math.random() * target.length);
  return target[index];
};

export const useRotatingHotQuote = (source: HotQuoteSource, intervalMs: number = 5000) => {
  const list = useMemo(() => toList(source), [source]);

  const [current, setCurrent] = useState<HotQuote | null>(() => (list.length > 0 ? pickRandom(list) : null));

  useEffect(() => {
    if (!Array.isArray(list) || list.length === 0) {
      return;
    }

    const initialTimeoutId = window.setTimeout(() => {
      setCurrent((prev) => pickRandom(list, prev?.id));
    }, 0);

    const timerId = window.setInterval(() => {
      setCurrent((prev) => pickRandom(list, prev?.id));
    }, intervalMs);

    return () => {
      window.clearTimeout(initialTimeoutId);
      window.clearInterval(timerId);
    };
  }, [list, intervalMs]);

  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  return current;
};
