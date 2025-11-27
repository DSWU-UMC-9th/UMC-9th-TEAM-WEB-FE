import { useNavigate } from 'react-router-dom';
import type { BookCardProps } from '@/types/DiscussionPage/discussion';

export default function BookCard({ book }: BookCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/discussion/${book.id}`)}
      className="flex flex-col items-center transition-transform duration-200 hover:-translate-y-1 hover:drop-shadow-lg">
      <div className="mb-[29px] h-[299px] w-[200px] overflow-hidden">
        <img src={book.imgUrl ?? undefined} alt={book.title} className="h-full w-full object-cover" />
      </div>
      <p className="text-[24px] text-brown-dark max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
        &lt;{book.title}&gt;
      </p>
      <p className="mt-1 text-[16px] text-brown-dark/70">{book.author}</p>
    </div>
  );
}
