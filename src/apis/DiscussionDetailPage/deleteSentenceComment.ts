import { axiosInstance } from '@/apis/axios';

export const deleteSentenceComment = async (commentId: number) => {
  const res = await axiosInstance.delete(`/api/v1/comments/${commentId}`);
  return res.data;
};
export default deleteSentenceComment;
