import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { HomeState } from '@/types/HomePage/home';
import { homeApi } from '@/apis/HomePage/home';
import { getLibrary } from '@/apis/DiscussionPage/getLibrary';
import { axiosInstance } from '@/apis/axios';

export const useHomeStore = create<HomeState>()(
  persist<HomeState>(
    (set) => ({
      books: [],
      libraryBooks: [],
      hotQuote: [],
      keywords: [],
      loading: false,
      error: null,
      selectedKeyword: null,

      async fetchLibrary() {
        try {
          const data = await getLibrary();

          const enriched = await Promise.all(
            data.map(async (item) => {
              const detailRes = await axiosInstance.get(`/api/v1/books/${item.book.id}`);
              const detail = detailRes.data.success?.data;

              const detailKeywords: string[] = detail?.keywords ?? [];

              return {
                ...item,
                keywords: detailKeywords,
              };
            }),
          );

          set({ libraryBooks: enriched });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : '서재 도서 목록을 불러오는데 실패했습니다.';
          set({ error: message });
        }
      },

      async fetchHomeData() {
        try {
          set({ loading: true, error: null });

          const [books, hotQuoteData, keywords] = await Promise.all([
            homeApi.fetchMyBooks(),
            homeApi.fetchHotQuotes(),
            homeApi.fetchPopularKeywords(),
          ]);

          const hotQuote = hotQuoteData.map((quote) => ({
            ...quote,
            sentences: quote.sentences.map((sentence, index) => ({
              id: index,
              content: sentence,
            })),
          }));

          set({
            books,
            hotQuote,
            keywords,
            loading: false,
          });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : '홈 화면 데이터를 불러오는데 실패했습니다.';
          set({ error: message, loading: false });
        }
      },

      setSelectedKeyword(keyword) {
        set({ selectedKeyword: keyword });
      },
    }),
    {
      name: 'home-storage',
    },
  ),
);
