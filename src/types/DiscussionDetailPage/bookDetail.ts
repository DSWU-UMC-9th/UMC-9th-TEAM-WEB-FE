export type BookQuoteNote = {
  id: number;
  bookId: number;
  nickname: string;
  createdAt: string;
  quoteText: string;
  reference: string;
  content: string;
};

export type BookSummaryProps = {
  detail: BookDetail;
};

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

export type CommentInputProps = {
  onSubmit?: (value: string) => void;
};

export type CommentItemProps = {
  comment: PassageComment;
};

export type PassageCardProps = {
  passage: Passage;
  title: string;
  isActive: boolean;
  onClick: () => void;
};

export type PassageListProps = {
  passages: Passage[];
  title: string;
  initialActiveId?: number | null;
};
