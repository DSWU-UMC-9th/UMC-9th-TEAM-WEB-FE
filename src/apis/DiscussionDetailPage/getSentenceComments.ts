import { axiosInstance } from '@/apis/axios';
import type { SentenceCommentDTO } from '@/types/DiscussionDetailPage/comment';

type SentenceCommentApiItem = {
  id: number;
  userId: string;
  nickname: string;
  content: string;
  created_at: string;
  updatedAt: string;
};

type SentenceCommentsApiResponse = {
  resultType: 'SUCCESS' | 'FAIL' | 'ERROR';
  error: unknown;
  success: {
    data: {
      sentence: {
        id: number;
        content: string;
      };
      comments: SentenceCommentApiItem[];
    };
  } | null;
};

export async function getSentenceComments(sentenceId: number): Promise<SentenceCommentDTO[]> {
  const res = await axiosInstance.get<SentenceCommentsApiResponse>(`/api/v1/sentences/${sentenceId}/comments`);

  const rawComments = res.data.success?.data.comments ?? [];

  return rawComments.map(
    (c): SentenceCommentDTO => ({
      id: c.id,
      userId: c.userId,
      nickname: c.nickname,
      content: c.content,
      createdAt: c.updatedAt ?? c.created_at,
    }),
  );
}
