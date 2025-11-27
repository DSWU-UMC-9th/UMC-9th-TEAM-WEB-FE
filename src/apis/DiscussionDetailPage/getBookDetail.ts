import { axiosInstance } from '@/apis/axios';
import type { BookDetail, Passage, SentenceDTO } from '@/types/DiscussionDetailPage/bookDetail';

export const getBookDetail = async (bookId: number): Promise<BookDetail> => {
  const res = await axiosInstance.get(`/api/v1/books/${bookId}`);
  const data = res.data.success?.data;

  if (!data) {
    throw new Error('상세 조회 데이터가 없습니다.');
  }

  const passages: Passage[] = data.sentences.map((s: SentenceDTO) => ({
    id: s.id,
    text: s.content,
    reference: '',
    content: [],
  }));

  return {
    id: data.id,
    title: data.title,
    author: data.author,
    coverImageUrl: data.img_url,
    tags: data.keywords,
    passages,
  };
};

export default getBookDetail;
