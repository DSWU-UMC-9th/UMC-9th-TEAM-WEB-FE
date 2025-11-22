import type { Book, HotQuote, PopularKeyword } from '@/types/HomePage/home';
import { DUMMY_BOOKS } from '@/data/booksDummy';
import { DUMMY_HOT_QUOTES } from '@/data/hotQuoteDummy';
import { DUMMY_KEYWORDS } from '@/data/keywordsDummy';

// TODO: 나중에 실제 API 연동 시, 이 delay 함수는 제거하고 axios 호출로 교체.
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const homeApi = {
  async fetchMyBooks(_userId?: number): Promise<Book[]> {
    await delay(300);
    // TODO: userId 기준으로 백엔드에서 데이터 받아오기
    return Array.isArray(DUMMY_BOOKS) ? DUMMY_BOOKS : [];
  },

  async fetchHotQuotes(): Promise<HotQuote[] | null> {
    await delay(200);
    return DUMMY_HOT_QUOTES ?? null;
  },

  async fetchPopularKeywords(): Promise<PopularKeyword[]> {
    await delay(200);
    return Array.isArray(DUMMY_KEYWORDS) ? DUMMY_KEYWORDS : [];
  },
};
