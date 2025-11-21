// src/hooks/useRotatingHotQuote.ts
import { useEffect, useState } from 'react';
import type { HotQuote } from '@/types/HomePage/home';

/**
 * HOT 구절을 intervalMs(기본 10초)마다 랜덤으로 하나 선택해서 돌려주는 훅
 *
 * - source: 서버/더미에서 받아온 HOT 구절 데이터
 *   (객체 1개든, 배열이든 상관 없음)
 */
export const useRotatingHotQuote = (source: HotQuote | HotQuote[] | null | undefined, intervalMs: number = 10000) => {
  const [current, setCurrent] = useState<HotQuote | null>(() => {
    const list: HotQuote[] = !source ? [] : Array.isArray(source) ? source : [source];
    return list.length > 0 ? list[Math.floor(Math.random() * list.length)] : null;
  });

  useEffect(() => {
    // 1) 데이터 정규화: null/undefined → [], 객체 하나 → [객체], 배열이면 그대로
    const list: HotQuote[] = !source ? [] : Array.isArray(source) ? source : [source];

    if (list.length === 0) {
      return;
    }

    // 2) interval마다 랜덤 변경
    const timerId = window.setInterval(() => {
      setCurrent((prev) => {
        if (list.length === 0) return null;
        if (!prev) {
          return list[Math.floor(Math.random() * list.length)];
        }
        const candidates = list.filter((q) => q.id !== prev.id);
        if (candidates.length === 0) return prev;
        return candidates[Math.floor(Math.random() * candidates.length)];
      });
    }, intervalMs);

    // 4) cleanup
    return () => {
      window.clearInterval(timerId);
    };
  }, [source, intervalMs]);

  // Return null if source is empty
  const list: HotQuote[] = !source ? [] : Array.isArray(source) ? source : [source];
  return list.length === 0 ? null : current;
};
