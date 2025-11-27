import type { LibraryBookItem } from '@/types/DiscussionPage/discussion';

export interface BookKeyword {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  imgUrl: string | null;
  keywords?: BookKeyword[];
}

export interface HotQuote {
  id: number;
  bookId: number | null;
  bookTitle: string;
  content: string;
  sentences?: { id: number; content: string }[];
}

export type HotQuoteSource = HotQuote[] | HotQuote | null;

export interface PopularKeyword {
  id: number;
  name: string;
}

export interface HomeState {
  books: Book[];
  libraryBooks: LibraryBookItem[];
  hotQuote: HotQuote[];
  keywords: PopularKeyword[];
  loading: boolean;
  error: string | null;
  selectedKeyword: string | null;
  fetchLibrary: () => Promise<void>;
  fetchHomeData: () => Promise<void>;
  setSelectedKeyword: (keyword: string | null) => void;
}

export interface HotQuoteSectionProps {
  hotQuote: HotQuote[] | null;
  onClick: () => void;
  isLoading?: boolean;
}

export interface KeywordDiscussionSectionProps {
  keywords: PopularKeyword[];
  onKeywordClick: (keyword: string) => void;
}

export interface MyLibraryBookCardProps {
  book: Book;
  onKeywordClick: (keyword: string) => void;
}

export interface MyLibrarySectionProps {
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  books: Book[];
  onKeywordClick: (keyword: string) => void;
}
