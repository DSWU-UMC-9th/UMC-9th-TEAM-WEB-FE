import { axiosInstance } from '@/apis/axios';
import type { Book, PopularKeyword } from '@/types/HomePage/home';

export const homeApi = {
  async fetchMyBooks(): Promise<Book[]> {
    const response = await axiosInstance.get('/api/v1/home/library');

    const raw = response.data?.success?.data;

    if (!Array.isArray(raw)) return [];

    const enriched = await Promise.all(
      raw.map(async (item) => {
        const detailRes = await axiosInstance.get(`/api/v1/books/${item.book.id}`);
        const detail = detailRes.data?.success?.data;

        const keywords =
          detail?.keywords?.map((k: string, idx: number) => ({
            id: idx,
            name: k,
          })) ?? [];

        return {
          id: item.book.id,
          title: item.book.title,
          author: item.book.author,
          imgUrl: item.book.imgUrl,
          keywords,
        };
      }),
    );

    return enriched;
  },

  async fetchHotQuotes() {
    const response = await axiosInstance.get('/api/v1/home/hot');
    const raw = response.data?.success?.data;

    if (!Array.isArray(raw) || raw.length === 0) {
      return [];
    }

    const myBooks = await homeApi.fetchMyBooks();

    const enriched = await Promise.all(
      raw.map(async (item) => {
        const matchedBook = myBooks.find((b) => b.title === item.title);

        interface Sentence {
          id: number;
          content: string;
        }

        let bookDetail: { sentences?: Sentence[] } | null = null;

        if (matchedBook) {
          const detailRes = await axiosInstance.get(`/api/v1/books/${matchedBook.id}`);
          bookDetail = detailRes.data?.success?.data;
        }

        return {
          id: item.id,
          bookId: matchedBook?.id ?? null,
          bookTitle: matchedBook?.title ?? item.title,
          content: item.sentence,
          sentences: bookDetail?.sentences?.map((s: { id: number; content: string }) => s.content) ?? [],
        };
      }),
    );

    return enriched;
  },

  async fetchPopularKeywords(): Promise<PopularKeyword[]> {
    const response = await axiosInstance.get('/api/v1/home/keyword');
    const raw = response.data?.success?.data;

    if (!Array.isArray(raw)) return [];

    return raw.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  },
};
