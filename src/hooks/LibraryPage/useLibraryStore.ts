// src/hooks/LibraryPage/useLibraryStore.ts
import { useCallback, useState } from 'react';
import type { LibraryBook } from '@/types/LibraryPage/library';
import { MOCK_LIBRARY_BOOKS } from '@/pages/LibraryPage/mocks/library';

export const useLibraryStore = () => {
  const [books, setBooks] = useState<LibraryBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * TODO: 백엔드 /my-library API 연동 시
   * - 아래 setTimeout + MOCK_LIBRARY_BOOKS 부분을 제거하고
   * - axios/fetch로 실제 데이터를 가져와서 setBooks 해주세요.
   */
  const fetchLibrary = useCallback(() => {
    setLoading(true);
    setError(null);

    // 지금은 더미데이터만 사용
    setTimeout(() => {
      setBooks(MOCK_LIBRARY_BOOKS);
      setLoading(false);
    }, 300);
  }, []);

  return {
    books,
    loading,
    error,
    fetchLibrary,
  };
};
