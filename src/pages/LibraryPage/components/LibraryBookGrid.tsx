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
        grid-cols-4       
        gap-x-[150px]
        gap-y-[182.5px]
        px-[135px]
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
