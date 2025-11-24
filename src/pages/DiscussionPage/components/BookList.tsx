import BookCard from './Bookcard';
import type { Book } from '@/types/HomePage/home';

type BookListProps = {
  books: Book[];
};

export default function BookList({ books }: BookListProps) {
  return (
    <section className="mt-[94px] flex justify-center">
      <div className="bg-brown-light w-[1778px] h-[1310px] py-[202px] px-[219px] overflow-y-scroll">
        <div className="grid grid-cols-4 gap-x-[109px] gap-y-[180px] ">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
