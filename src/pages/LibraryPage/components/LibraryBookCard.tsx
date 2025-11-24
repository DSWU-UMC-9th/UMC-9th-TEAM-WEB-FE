// src/pages/LibraryPage/components/LibraryBookCard.tsx
import { useNavigate } from 'react-router-dom';
import type { LibraryBookCardProps } from '@/types/LibraryPage/library';

const LibraryBookCard = ({ book }: LibraryBookCardProps) => {
  const navigate = useNavigate();

  console.log("썸네일 주소:", book.imgUrl);

  // 🔹 imgUrl이 null이거나 빈 문자열일 때 fallback
  const thumbnailSrc =
    book.imgUrl && book.imgUrl.trim() !== ''
      ? book.imgUrl
      : '/images/book-placeholder.png'; // TODO: 기본 이미지 경로로 교체

  const handleClick = () => {
    navigate(`/library/${book.id}`);
  };

  return (
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
        rounded-[18px]
      "
    >
      <img
        src={thumbnailSrc}
        alt={book.title}
        className="h-full w-full object-cover"
      />
    </button>
  );
};

export default LibraryBookCard;
