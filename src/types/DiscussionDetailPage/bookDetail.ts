import type { SentenceCommentDTO } from '@/types/DiscussionDetailPage/comment';

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
  comment: SentenceCommentDTO;
  onEdit: (commentId: number, newContent: string) => Promise<void>;
  onDelete: (commentId: number) => void | Promise<void>;
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

export type SentenceDTO = {
  id: number;
  content: string;
};

export type BookDetailDTO = {
  id: number;
  title: string;
  author: string;
  img_url: string;
  keywords: string[];
  sentences: SentenceDTO[];
};

export type BookDetailResponse = {
  resultType: string;
  error: unknown;
  success: {
    data: BookDetailDTO;
  } | null;
};
