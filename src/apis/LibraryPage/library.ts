// src/apis/LibraryPage/library.ts
import { axiosInstance } from '@/apis/axios';
import type { LibraryBook } from '@/types/LibraryPage/library';

type ApiResponse<T> = {
  resultType: 'SUCCESS' | 'FAIL';
  error: any;
  success: {
    data: T;
  } | null;
};

interface LibraryListItemResponse {
  id: number; // userBookId
  book: {
    id: number;
    title: string;
    author: string;
    imgUrl: string | null;
  };
}

// 나의 서재 목록 가져오기
export const getMyLibraryList = async (): Promise<LibraryBook[]> => {
  const res = await axiosInstance.get<ApiResponse<LibraryListItemResponse[]>>(
    '/api/v1/home/library',
  );

  const items = res.data.success?.data ?? [];

  const books: LibraryBook[] = items.map((item) => ({
    id: item.id,                    // userBookId
    title: item.book.title,
    author: item.book.author,
    imgUrl: item.book.imgUrl,
  }));

  return books;
};

// 나의 서재 도서 삭제
export const deleteMyLibraryBook = async (userBookId: number) => {
    const res = await axiosInstance.delete(`/api/v1/library/${userBookId}`);
    const body = res.data;
  
    if (body.resultType === 'FAIL') {
      throw new Error(body.error?.reason ?? '삭제에 실패했습니다.');
    }
  
    return body.success?.data;
  };
  
