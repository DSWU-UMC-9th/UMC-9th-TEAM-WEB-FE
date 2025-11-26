// src/pages/LibraryPage/components/LibraryBookGrid.tsx
import type { LibraryBook } from '@/types/LibraryPage/library';
import LibraryBookCard from './LibraryBookCard';
import LibraryAddCard from './LibraryAddCard';

interface LibraryBookGridProps {
  books: LibraryBook[];
  onAddClick?: () => void;
  onRequestDelete?: (book: LibraryBook) => void;
}

const LibraryBookGrid = ({ books, onAddClick, onRequestDelete }: LibraryBookGridProps) => {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        gap-15
        px-4 sm:px-8
        py-10
        justify-items-center
      "
    >
      {books.map((book) => (
        <LibraryBookCard
          key={book.id}
          book={book}
          onDeleteClick={onRequestDelete}
        />
      ))}

      {/* 도서 추가 카드 */}
      <LibraryAddCard onClick={onAddClick} />
    </div>
  );
};

export default LibraryBookGrid;
