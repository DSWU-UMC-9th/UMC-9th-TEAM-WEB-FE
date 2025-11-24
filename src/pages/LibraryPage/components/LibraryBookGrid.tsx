// src/pages/LibraryPage/components/LibraryBookGrid.tsx
import type { LibraryBook } from '@/types/LibraryPage/library';
import LibraryBookCard from './LibraryBookCard';
import LibraryAddCard from './LibraryAddCard';

interface LibraryBookGridProps {
  books: LibraryBook[];
  onAddClick?: () => void;
}

const LibraryBookGrid = ({ books, onAddClick }: LibraryBookGridProps) => {
  return (
    <div
      className="
        grid
        grid-cols-2       /* 아주 작은 화면: 2컬럼 */
        sm:grid-cols-3    /* 작은 태블릿: 3컬럼 */
        lg:grid-cols-4    /* 데스크탑 이상: 4컬럼 */
        gap-15
        px-4 sm:px-8
        py-10
        justify-items-center
      "
    >
      {books.map((book) => (
        <LibraryBookCard key={book.id} book={book} />
      ))}

      {/* 도서 추가 카드 */}
      <LibraryAddCard onClick={onAddClick} />
    </div>
  );
};

export default LibraryBookGrid;
