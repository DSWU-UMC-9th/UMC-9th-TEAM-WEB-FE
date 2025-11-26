// src/pages/LibraryPage/LibraryPage.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LibraryHeader from './components/LibraryHeader';
import LibraryBookGrid from './components/LibraryBookGrid';
import LibraryEmptyState from './components/LibraryEmptyState';
import { useLibraryStore } from '@/hooks/LibraryPage/useLibraryStore';

const LibraryPage = () => {
  const navigate = useNavigate();
  const { books, loading, error, fetchLibrary } = useLibraryStore();

  // 페이지 진입 시 도서 데이터 불러오기
  useEffect(() => {
    fetchLibrary();
  }, [fetchLibrary]);

  const handleAddBook = () => {
    // TODO: 실제 도서 추가 페이지 라우트에 맞게 path 수정
    navigate('/post');
  };

  return (
    <main className="w-full bg-white-normal pb-[141px] pt-[153px]">
      <section className="mx-auto w-full">
        {/* 상단 타이틀 */}
        <LibraryHeader />

        {/* 로딩 상태 */}
        {loading && (
          <p className="mt-10 text-center text-[32px] text-brown-sub">
            불러오는 중...
          </p>
        )}

        {/* 에러 상태 */}
        {!loading && error && (
          <p className="mt-10 text-center text-[32px] text-error">
            {error}
          </p>
        )}

        {/* 책이 하나도 없을 때 */}
        {!loading && !error && books.length === 0 && (
          <LibraryEmptyState onClick={handleAddBook} />
        )}

        {/* 책이 있을 때 */}
        {!loading && !error && books.length > 0 && (
          <LibraryBookGrid books={books} onAddClick={handleAddBook} />
        )}
      </section>
    </main>
  );
};

export default LibraryPage;
