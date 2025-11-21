/**
 * 홈 화면 상태를 관리하는 Zustand 스토어 훅입니다.
 *
 * @remarks
 * 이 스토어는 책 목록, 인기 명언, 인기 키워드, 로딩/에러 상태를 포함한
 * 홈 화면의 상태를 관리합니다. 비동기적으로 홈 데이터를 가져오고
 * 키워드 선택을 관리하는 메서드를 제공합니다.
 *
 * @returns 다음 속성들을 가진 Zustand 스토어 인스턴스:
 * - `books`: 책 배열 (userId가 제공되면 채워짐)
 * - `hotQuote`: 현재 인기 명언 또는 null
 * - `keywords`: 인기 키워드 배열
 * - `loading`: 데이터를 가져오는 중인지 나타내는 불리언
 * - `error`: 에러 메시지 문자열 또는 null
 * - `selectedKeyword`: 현재 선택된 키워드 또는 null
 * - `fetchHomeData`: 홈 화면 데이터를 가져오는 비동기 메서드
 * - `setSelectedKeyword`: 선택된 키워드를 업데이트하는 메서드
 *
 * @example
 * ```typescript
 * const { books, hotQuote, keywords, fetchHomeData } = useHomeStore();
 *
 * // 사용자 ID와 함께 데이터 가져오기
 * await fetchHomeData(123);
 *
 * // 사용자 ID 없이 데이터 가져오기 (게스트 모드)
 * await fetchHomeData();
 * ```
 */

import { create } from 'zustand';
import type { HomeState } from '@/types/HomePage/home';
import { homeApi } from '@/apis/HomePage/home';

export const useHomeStore = create<HomeState>((set) => ({
  books: [],
  hotQuote: null,
  keywords: [],
  loading: false,
  error: null,
  selectedKeyword: null,

  async fetchHomeData(userId?: number) {
    try {
      set({ loading: true, error: null });

      const hotQuotePromise = homeApi.fetchHotQuotes();
      const keywordsPromise = homeApi.fetchPopularKeywords();

      if (userId) {
        const booksPromise = homeApi.fetchMyBooks(userId);

        const [books, hotQuote, keywords] = await Promise.all([booksPromise, hotQuotePromise, keywordsPromise]);

        set({
          books,
          hotQuote,
          keywords,
          loading: false,
        });
      } else {
        const [hotQuote, keywords] = await Promise.all([hotQuotePromise, keywordsPromise]);

        set({
          books: [],
          hotQuote,
          keywords,
          loading: false,
        });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : '홈 화면 데이터를 불러오는데 실패했습니다.';
      set({ error: message, loading: false });
    }
  },

  setSelectedKeyword(keyword) {
    set({ selectedKeyword: keyword });
  },
}));
