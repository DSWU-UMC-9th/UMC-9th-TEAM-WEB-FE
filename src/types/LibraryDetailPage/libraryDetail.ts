// src/types/libraryDetail.ts

export interface Keyword {
    id: number;
    name: string;
  }
  
  export interface BookInfo {
    id: number;
    title: string;
    author: string;
    imgUrl: string | null;
  }
  
  export interface LibraryBookDetail {
    id: number;
    book: BookInfo;
    pageCount: number;
    readingMinutes: number;
    sentence: string;
    note: string;
    keywords: Keyword[];
  }
  
  export interface ApiSuccess<T> {
    resultType: 'SUCCESS';
    error: null;
    success: {
      data: T;
    };
  }
  
  export interface ApiFail {
    resultType: 'FAIL';
    error: {
      errorCode: string;
      reason: string;
      data: unknown;
    };
    success: null;
  }
  
  export type ApiResponse<T> = ApiSuccess<T> | ApiFail;
  