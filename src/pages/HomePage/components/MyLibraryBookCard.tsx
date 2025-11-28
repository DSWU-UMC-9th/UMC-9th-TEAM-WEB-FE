import type { MyLibraryBookCardProps } from '@/types/HomePage/home';
import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const MyLibraryBookCard = ({ book, onKeywordClick }: MyLibraryBookCardProps) => {
  const navigate = useNavigate();
  const keywords = book?.keywords ?? [];

  return (
    <div
      onClick={() => navigate(`/discussion/${book.id}`)}
      className="group relative h-[444px] w-[300px] shrink-0 cursor-pointer overflow-hidden bg-gray-200 shadow-md">
      <img src={book.imgUrl ?? ''} alt={book.title} className="h-full w-full object-cover" />

      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50" />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="grid w-full grid-cols-2 justify-between gap-y-8 gap-x-3 px-6">
          {keywords.map((keyword) => (
            <button
              key={keyword.id}
              type="button"
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                onKeywordClick(keyword.name);
              }}
              className="whitespace-nowrap text-ellipsis pointer-events-auto w-full overflow-hidden rounded-[40px] bg-brown-light-hover box-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-[19px] py-[13px] text-[20px] text-brown-darker font-bold">
              {keyword.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLibraryBookCard;
