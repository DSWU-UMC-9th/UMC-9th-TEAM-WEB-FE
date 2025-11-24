import BookCard from '@/pages/DiscussionPage/components/Bookcard';
import type { BookListProps } from '@/types/DiscussionPage/discussion';

export default function BookList({ books }: BookListProps) {
  return (
    <section className="mt-[94px] flex justify-center">
      <div className="bg-brown-light w-[1778px] h-[1310px] py-[202px] px-[219px] overflow-y-scroll no-scrollbar">
        <div className="grid grid-cols-4 gap-x-[109px] gap-y-[180px] ">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
