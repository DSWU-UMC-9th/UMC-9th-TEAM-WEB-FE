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
  sentence: string | null; // 내가 뽑은 구절
  note: string | null;      // 독서록
  keywords: Keyword[];
}

// (선택) 공통 응답 래퍼 – 명세서 기준
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
