import type { PopularKeyword } from '@/types/HomePage/home';

/**
 * TODO:
 * - 나중에 백엔드 연동 시에는 이 더미 데이터를 제거하고
 *   실제 API 응답으로 대체.
 */
export const DUMMY_KEYWORDS: PopularKeyword[] = [
  { id: 1, name: '#소설' },
  { id: 2, name: '#에세이' },
  { id: 3, name: '#심리학' },
  { id: 4, name: '#철학' },
  { id: 5, name: '#경제' },
  { id: 6, name: '#금융' },
  { id: 7, name: '#자기계발' },
  { id: 8, name: '#과학' },
  { id: 9, name: '#SF' },
  { id: 10, name: '#한국문학' },
];
