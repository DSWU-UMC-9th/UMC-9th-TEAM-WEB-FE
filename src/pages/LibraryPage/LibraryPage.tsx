// src/pages/LibraryPage/LibraryPage.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LibraryHeader from './components/LibraryHeader';
import LibraryBookGrid from './components/LibraryBookGrid';
import LibraryEmptyState from './components/LibraryEmptyState';
import { useLibraryStore } from '@/hooks/LibraryPage/useLibraryStore';
import { deleteMyLibraryBook } from '@/apis/LibraryPage/library';
import type { LibraryBook } from '@/types/LibraryPage/library';

const LibraryPage = () => {
  const navigate = useNavigate();
  const { books, loading, error, fetchLibrary } = useLibraryStore();

  
  const [selectedBook, setSelectedBook] = useState<LibraryBook | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // 페이지 진입 시 도서 데이터 불러오기
  useEffect(() => {
    fetchLibrary();
  }, [fetchLibrary]);

  const handleAddBook = () => {
    navigate('/post');
  };

  const handleConfirmDelete = async () => {
    if (!selectedBook) return;

    try {
      setIsDeleting(true);
      await deleteMyLibraryBook(selectedBook.id);
      alert(`“${selectedBook.title}”이(가) 삭제되었습니다.`);
      setSelectedBook(null);
      await fetchLibrary();
    } catch (err) {
      console.error(err);
      alert('도서 삭제 중 오류가 발생했어요.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <main className="w-full bg-white-normal pb-[138px] pt-12">
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
          <LibraryBookGrid
            books={books}
            onAddClick={handleAddBook}
            // 카드에서 삭제 버튼 누르면 여기로 올라옴
            onRequestDelete={(book) => setSelectedBook(book)}
          />
        )}
      </section>

      {/* 삭제 확인 모달 */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-40">
          <div className="w-[320px] rounded-xl bg-white-light p-6 shadow-lg">
            <p className="mb-6 text-center text-[18px] font-semibold text-brown-darker">
              "{selectedBook.title}"을 삭제하시겠습니까?
            </p>

            <div className="flex justify-between gap-3">
              <button
                className="w-1/2 rounded-xl bg-brown-light py-2 text-sm"
                onClick={() => setSelectedBook(null)}
                disabled={isDeleting}
              >
                취소
              </button>
              <button
                className="w-1/2 rounded-xl bg-brown-normal py-2 text-sm text-white"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
              >
                {isDeleting ? '삭제 중...' : '삭제하기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default LibraryPage;
