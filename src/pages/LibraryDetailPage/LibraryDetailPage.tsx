// src/pages/LibraryDetailPage/LibraryDetailPage.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostBookHeader from '@/pages/PostBookPage/components/PostBookHeader';
import LibraryDetailCover from './components/LibraryDetailCover';
import LibraryDetailMeta from './components/LibraryDetailMeta';
import LibraryDetailPhrase from './components/LibraryDetailPhrase';
import LibraryDetailReview from './components/LibraryDetailReview';

import type { LibraryBookDetail } from '@/types/LibraryDetailPage/libraryDetail';
import { getLibraryDetail } from '@/apis/LibraryDetailPage/libraryDetail';

const LibraryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const userBookId = Number(id);

  const [detail, setDetail] = useState<LibraryBookDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userBookId || Number.isNaN(userBookId)) {
      setError('잘못된 접근입니다.');
      setLoading(false);
      return;
    }

    const fetchDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getLibraryDetail(userBookId);
        setDetail(data);
      } catch (err) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('도서 상세 정보를 불러오지 못했어요.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [userBookId]);


  return (
    <main className="min-h-screen bg-white-normal">
      <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-6 pb-24 pt-8">
        <PostBookHeader />

        {loading && (
          <p className="mt-8 text-center text-[18px] text-brown-sub">
            불러오는 중입니다...
          </p>
        )}

        {!loading && error && (
          <p className="mt-8 text-center text-[18px] text-error">{error}</p>
        )}

        {!loading && !error && detail && (
          <>
            {/* 표지 이미지 */}
            <LibraryDetailCover imageUrl={detail.book.imgUrl} />

            {/* 제목/저자 + 메타 정보(페이지 수, 시간, 키워드) */}
            <LibraryDetailMeta
              title={detail.book.title}
              author={detail.book.author}
              pageCount={detail.pageCount ?? 0}
              readingMinutes={detail.readingMinutes ?? 0}
              keywords={detail.keywords ?? []}
            />

            {/* 내가 뽑은 구절 */}
            <LibraryDetailPhrase sentence={detail.sentence ?? ''} />

            {/* 장문의 독서록 글 */}
            <LibraryDetailReview note={detail.note ?? ''} />
          </>
        )}
      </section>
    </main>
  );
};

export default LibraryDetailPage;
