// src/apis/LibraryDetailPage/libraryDetail.ts
import { axiosInstance } from '@/apis/axios';
import type {
  LibraryBookDetail,
  LibraryDetailApiResponse,
} from '@/types/LibraryDetailPage/libraryDetail';

interface CommonResponse<T> {
  resultType: 'SUCCESS' | 'FAIL';
  error: {
    errorCode: string;
    reason: string;
    data?: unknown;
  } | null;
  success: {
    data: T;
  } | null;
}

type LibraryDetailBody = LibraryDetailApiResponse | LibraryBookDetail;

export const getLibraryDetail = async (
  userBookId: number,
): Promise<LibraryBookDetail> => {
  const res = await axiosInstance.get(`/api/v1/library/${userBookId}`);
  const body = res.data as LibraryDetailBody;

  console.log('[getLibraryDetail] raw response:', body);

  let payload: LibraryBookDetail | null;

  if ('resultType' in body) {
    const api = body;

    if (api.resultType === 'FAIL') {
      throw new Error(api.error?.reason ?? '도서 상세 정보를 불러오지 못했어요.');
    }

    payload = (api.success?.data ?? null) as LibraryBookDetail | null;
  } else {
    payload = body as LibraryBookDetail;
  }

  if (!payload) {
    throw new Error('도서 상세 정보가 없습니다.');
  }

  const detail: LibraryBookDetail = {
    id: payload.id,
    book: {
      id: payload.book?.id,
      title: payload.book?.title ?? '',
      author: payload.book?.author ?? '',
      imgUrl: payload.book?.imgUrl ?? null,
    },
    userBookImg: payload.userBookImg ?? null,
    pageCount: payload.pageCount ?? null,
    readingMinutes: payload.readingMinutes ?? null,
    sentence: payload.sentence ?? null,
    note: payload.note ?? null,
    keywords: Array.isArray(payload.keywords)
      ? payload.keywords.map((k) => ({
          id: k.id,
          name: k.name,
        }))
      : [],
  };

  if (detail.sentence == null) {
    console.warn(
      '[getLibraryDetail] sentence 필드가 응답에 없습니다. 백엔드 구현 확인 필요',
    );
  }

  return detail;
};

export interface UpdateLibraryBookPayload {
  pageCount?: number;
  readingMinutes?: number;
  sentence?: string;
  note?: string;
  keywords?: number[];
}

export const updateLibraryBook = async (
  userBookId: number,
  payload: UpdateLibraryBookPayload,
): Promise<LibraryBookDetail> => {
  const res = await axiosInstance.patch(`/api/v1/library/${userBookId}`, payload);
  const body = res.data;

  console.log('[updateLibraryBook] raw response:', body);

  if (body && typeof body === 'object' && 'resultType' in body) {
    const api = body as CommonResponse<unknown>;

    if (api.resultType === 'FAIL') {
      throw new Error(api.error?.reason ?? '도서 수정에 실패했어요.');
    }
  }

  const detail = await getLibraryDetail(userBookId);
  return detail;
};
