import type { Book } from '@/types/HomePage/home';

export type BookCardProps = {
  book: Book;
};

export type BookListProps = {
  books: Book[];
};

export interface LibraryBookItem {
  id: number;
  book: {
    id: number;
    title: string;
    author: string;
    imgUrl: string | null;
  };
  keywords?: string[];
}

export interface LibraryResponse {
  resultType: string;
  error: unknown;
  success: {
    data: LibraryBookItem[];
  } | null;
}
