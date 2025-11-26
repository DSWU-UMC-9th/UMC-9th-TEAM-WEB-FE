// src/types/LibraryPage/library.ts

export interface LibraryBook {
  id: number;
  title: string;
  author: string;
  imgUrl: string | null;

  // 필요하면 옵션 필드들
  pageCount?: number;
  readingTimeMinutes?: number;
  keywords?: string[];
}

export interface LibraryBookCardProps {
  book: LibraryBook;
  onDeleteClick?: (book: LibraryBook) => void;
}

