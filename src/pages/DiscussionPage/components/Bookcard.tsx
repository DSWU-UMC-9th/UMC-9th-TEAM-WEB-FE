import { Link } from 'react-router-dom';
import type { Book } from './BookList';

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      to={`/discussion/${book.id}`}
      className="flex flex-col items-center transition-transform duration-200 hover:-translate-y-1 hover:drop-shadow-lg">
      <div className="mb-3 h-52 w-36 overflow-hidden rounded-md">
        <img src={book.coverImageUrl} alt={book.title} className="h-full w-full object-cover" />
      </div>
      <p className="text-xs text-brown-dark">&lt;{book.title}&gt;</p>
      <p className="mt-1 text-[11px] text-brown-dark/70">{book.author}</p>
    </Link>
  );
}
