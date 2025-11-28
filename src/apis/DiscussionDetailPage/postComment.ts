import { axiosInstance } from '@/apis/axios';

export interface CreateCommentResponse {
  id: number;
  sentenceId: number;
  userId: string;
  content: string;
  createdAt: string;
}

export const postSentenceComment = async (sentenceId: number, content: string): Promise<CreateCommentResponse> => {
  const res = await axiosInstance.post(`/api/v1/sentences/${sentenceId}/comments`, {
    content,
  });

  return res.data.success.data;
};
