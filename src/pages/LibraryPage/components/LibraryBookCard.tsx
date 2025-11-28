// src/pages/LibraryPage/components/LibraryBookCard.tsx
import { useNavigate } from 'react-router-dom';
import type { LibraryBookCardProps } from '@/types/LibraryPage/library';

const LibraryBookCard = ({ book, onDeleteClick }: LibraryBookCardProps) => {
  const navigate = useNavigate();

  const thumbnailSrc =
    book.imgUrl && book.imgUrl.trim() !== ''
      ? book.imgUrl
      : '/images/book-placeholder.png';

  const handleClick = () => {
    navigate(`/library/${book.id}`);
  };

  return (
    <div
      className="
        relative 
        group 
        w-full 
        max-w-[260px] 
        aspect-[3/4.4]
      "
    >
      {/* hover 시 뜨는 삭제 버튼 */}
      {onDeleteClick && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteClick(book);
          }}
          className="
            absolute
            right-2
            top-2
            z-20
            hidden
            items-center
            justify-center
            rounded-full
            bg-brown-normal
            px-3
            py-1
            text-[12px]
            font-semibold
            text-white
            shadow-[0_0_8px_rgba(0,0,0,0.25)]
            group-hover:flex
          "
        >
          삭제
        </button>
      )}

      {/* 카드 본체 */}
      <button
        type="button"
        onClick={handleClick}
        className="
          relative
          w-full
          max-w-[260px]
          aspect-[3/4.4]
          overflow-hidden
          bg-gray-200
          shadow-[0_0_20px_rgba(0,0,0,0.3)]
        "
      >
        {/* 이미지 */}
        <img
          src={thumbnailSrc}
          alt={book.title}
          className="h-full w-full object-cover"
        />

        {/* hover 시 어두운 overlay */}
        <div
          className="
            absolute 
            inset-0 
            bg-black/10 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-200
            z-10
          "
        />
      </button>
    </div>
  );
};

export default LibraryBookCard;
