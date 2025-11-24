import type { HotQuote } from '@/types/HomePage/home';
import { BOOK_QUOTE_NOTES_DUMMY } from '@/data/bookQuoteNotesDummy';
import { DUMMY_BOOKS } from '@/data/booksDummy';

const HOT_NOTE_CANDIDATES = BOOK_QUOTE_NOTES_DUMMY.slice(0, 20);

export const DUMMY_HOT_QUOTES: HotQuote[] = HOT_NOTE_CANDIDATES.map((note) => {
  const book = DUMMY_BOOKS.find((b) => b.id === note.bookId);

  return {
    id: note.id,
    bookId: note.bookId,
    bookTitle: book?.title ?? '알 수 없는 도서',
    content: note.quoteText,
  };
});
