// src/apis/LibraryDetailPage/libraryDetail.ts
import { axiosInstance } from '@/apis/axios';
import type {
  LibraryBookDetail,
  LibraryDetailApiResponse,
} from '@/types/LibraryDetailPage/libraryDetail';

// 나의 서재 상세 조회
export const getLibraryDetail = async (
  userBookId: number,
): Promise<LibraryBookDetail> => {
  const res = await axiosInstance.get(`/api/v1/library/${userBookId}`);
  const body = res.data;

  console.log('[getLibraryDetail] raw response:', body);

  let payload: any = body;

  // 1) 명세서처럼 resultType / success / error 래퍼가 있는 경우
  if (payload && typeof payload === 'object' && 'resultType' in payload) {
    const api = payload as LibraryDetailApiResponse;

    if (api.resultType === 'FAIL') {
      throw new Error(api.error?.reason ?? '도서 상세 정보를 불러오지 못했어요.');
    }

    payload = api.success?.data;
  }

  // 2) 래퍼 없이 바로 userBook 객체를 내려주는 경우
  if (!payload) {
    throw new Error('도서 상세 정보가 없습니다.');
  }

  // 한 번에 프론트에서 쓰기 좋은 형태로 변환
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
    // 🔻 여기서 sentence 를 그대로 받음 (없으면 null)
    sentence: payload.sentence ?? null,
    note: payload.note ?? null,
    keywords: Array.isArray(payload.keywords)
      ? payload.keywords.map((k: any) => ({
          id: k.id,
          name: k.name,
        }))
      : [],
  };

  // sentence 가 아예 안 내려오는 상황 디버깅용 로그
  if (detail.sentence == null) {
    console.warn(
      '[getLibraryDetail] sentence 필드가 응답에 없습니다. 백엔드 구현 확인 필요',
    );
  }

  return detail;
};

