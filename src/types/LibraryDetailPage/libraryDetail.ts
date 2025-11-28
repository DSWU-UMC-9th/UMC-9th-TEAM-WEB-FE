// src/types/LibraryDetailPage/libraryDetail.ts

// 키워드 (id + 이름)
export interface Keyword {
  id: number;
  name: string;
}

// 책 기본 정보
export interface BookInfo {
  id: number;
  title: string;
  author: string;
  imgUrl: string | null;
}

// 나의 서재 상세 정보
export interface LibraryBookDetail {
  id: number;
  book: BookInfo;
  userBookImg: string | null;
  pageCount: number | null;
  readingMinutes: number | null;
  sentence: string | null; 
  note: string | null; 
  keywords: Keyword[];
}

export interface LibraryDetailSuccessResponse {
  resultType: 'SUCCESS';
  error: null;
  success: {
    data: LibraryBookDetail;
  };
}

export interface LibraryDetailFailResponse {
  resultType: 'FAIL';
  error: {
    errorCode: string;
    reason: string;
    data?: unknown;
  };
  success: null;
}


export type LibraryDetailApiResponse =
  | LibraryDetailSuccessResponse
  | LibraryDetailFailResponse;
