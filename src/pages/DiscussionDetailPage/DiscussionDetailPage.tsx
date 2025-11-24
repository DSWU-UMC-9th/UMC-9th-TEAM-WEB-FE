import { useLocation, useNavigate, useParams } from 'react-router-dom';
import BookSummary from './components/BookSummary';
import PassageList from './components/PassageList';

import { DUMMY_BOOKS } from '@/data/booksDummy';
import { BOOK_QUOTE_NOTES_DUMMY } from '@/data/bookQuoteNotesDummy';

export type PassageComment = {
  id: number;
  nickname: string;
  createdAt: string;
  content: string;
};

export type Passage = {
  id: number;
  text: string;
  reference: string;
  content: PassageComment[];
};

export type BookDetail = {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
  tags: string[];
  passages: Passage[];
};

const DiscussionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state as { initialQuoteId?: number } | undefined;
  const initialQuoteId = state?.initialQuoteId ?? null;

  const numericId = Number(id);

  const book = DUMMY_BOOKS.find((b) => b.id === numericId);

  if (!book) {
    return null;
  }

  const notesForBook = BOOK_QUOTE_NOTES_DUMMY.filter((note) => note.bookId === book.id);

  const passageMap = new Map<string, Passage>();
  let initialActivePassageId: number | null = null;

  notesForBook.forEach((note) => {
    const key = `${note.quoteText}__${note.reference}`;

    const comment = {
      id: note.id,
      nickname: note.nickname,
      createdAt: note.createdAt,
      content: note.content,
    };

    const existing = passageMap.get(key);

    if (existing) {
      existing.content.push(comment);

      if (initialQuoteId !== null && note.id === initialQuoteId) {
        initialActivePassageId = existing.id;
      }
    } else {
      const newPassage: Passage = {
        id: note.id,
        text: note.quoteText,
        reference: note.reference,
        content: [comment],
      };

      passageMap.set(key, newPassage);

      if (initialQuoteId !== null && note.id === initialQuoteId) {
        initialActivePassageId = newPassage.id;
      }
    }
  });

  const data: BookDetail = {
    id: book.id,
    title: book.title,
    author: book.author,
    coverImageUrl: book.coverImageUrl,
    tags: book.keywords,
    passages: Array.from(passageMap.values()),
  };

  return (
    <main className="mx-auto px-[131px] py-[153px]">
      <section className="mb-[133px] flex items-center w-full pr-[31px]">
        <button type="button" onClick={() => navigate(-1)} className="text-[48px] font-bold text-brown-dark">
          {'<'}
        </button>

        <div className="flex flex-1 flex-col items-center">
          <h1 className="text-[48px] font-bold text-brown-dark">토론 광장</h1>
          <div className="mt-[7px] h-[3px] w-[204px] bg-brown-dark mx-auto" />
        </div>
      </section>

      <section className="flex gap-[42px]">
        <BookSummary detail={data} />
        <PassageList passages={data.passages} initialActiveId={initialActivePassageId} title={data.title} />
      </section>
    </main>
  );
};

export default DiscussionDetailPage;
