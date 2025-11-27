export type SentenceCommentDTO = {
  id: number;
  userId: string;
  nickname: string;
  content: string;
  createdAt: string;
};

export type SentenceCommentResponse = {
  resultType: string;
  error: unknown;
  success: {
    data: {
      sentence: {
        id: number;
        content: string;
      };
      comments: SentenceCommentDTO[];
    };
  } | null;
};
