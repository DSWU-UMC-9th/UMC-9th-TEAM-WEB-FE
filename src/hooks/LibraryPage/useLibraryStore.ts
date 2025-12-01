// src/hooks/LibraryPage/useLibraryStore.ts
import { useCallback, useState } from 'react';
import type { LibraryBook } from '@/types/LibraryPage/library';
import { getMyLibraryList } from '@/apis/LibraryPage/library';

export const useLibraryStore = () => {
  const [books, setBooks] = useState<LibraryBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //나의 서재 목록 불러오기
  const fetchLibrary = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getMyLibraryList();
      setBooks(data);
    } catch (err) {
      console.error(err);
      setError('나의 서재를 불러오는 중 오류가 발생했어요.');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    books,
    loading,
    error,
    fetchLibrary,
  };
};
