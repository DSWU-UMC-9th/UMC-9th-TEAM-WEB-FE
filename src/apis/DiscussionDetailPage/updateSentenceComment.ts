import { axiosInstance } from '@/apis/axios';

export const updateSentenceComment = async (commentId: number, content: string) => {
  const res = await axiosInstance.patch(`/api/v1/comments/${commentId}`, {
    content,
  });

  return res.data;
};
export default updateSentenceComment;
