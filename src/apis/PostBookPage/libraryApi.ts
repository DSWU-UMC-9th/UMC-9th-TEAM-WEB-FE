// src/apis/PostBookPage/libraryApi.ts
import { axiosInstance } from '@/apis/axios';

export interface CreateLibraryBookPayload {
  image?: File | null;
  title: string;
  author: string;
  pageCount?: number;
  readingMinutes?: number;
  sentence?: string;
  note?: string;
  keywords?: number[];
}

export const createMyLibraryBook = async (
  payload: CreateLibraryBookPayload,
) => {
  const formData = new FormData();

  if (payload.image) {
    formData.append('image', payload.image);
  }

  formData.append(
    'data',
    JSON.stringify({
      title: payload.title,
      author: payload.author,
      pageCount: payload.pageCount,
      readingMinutes: payload.readingMinutes,
      sentence: payload.sentence,
      note: payload.note,
      keywords: payload.keywords ?? [],
    }),
  );

  const res = await axiosInstance.post('/api/v1/library', formData);
  const body = res.data;


  if (body && typeof body === 'object' && 'resultType' in body) {
    if (body.resultType === 'SUCCESS' && body.success?.data) {
      return body.success.data;
    }

    const reason = body.error?.reason ?? '도서 추가에 실패했습니다.';
    throw new Error(reason);
  }

  return body;
};
