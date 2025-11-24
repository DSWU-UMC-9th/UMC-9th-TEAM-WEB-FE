import { useNavigate } from 'react-router-dom';
import type { Book } from '@/types/HomePage/home';

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/discussion/${book.id}`)}
      className="flex flex-col items-center transition-transform duration-200 hover:-translate-y-1 hover:drop-shadow-lg w-fit">
      <div className="mb-[29px] h-[299px] w-[200px] overflow-hidden">
        <img src={book.coverImageUrl} alt={book.title} className="h-full w-full object-cover" />
      </div>
      <p className="text-xs text-brown-dark">&lt;{book.title}&gt;</p>
      <p className="mt-1 text-[11px] text-brown-dark/70">{book.author}</p>
    </div>
  );
}
