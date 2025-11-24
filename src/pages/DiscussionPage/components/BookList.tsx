import BookCard from './Bookcard';

export type Book = {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
};

type BookListProps = {
  books: Book[];
};

export default function BookList({ books }: BookListProps) {
  return (
    <section className="mt-10">
      <div className="rounded-xl bg-brown-light px-8 py-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
