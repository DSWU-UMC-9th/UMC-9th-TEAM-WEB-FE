// src/pages/LibraryDetailPage/LibraryDetailPage.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { ApiResponse, LibraryBookDetail } from '@/types/LibraryDetailPage/libraryDetail';
import PostBookHeader from '@/pages/PostBookPage/components/PostBookHeader';
import LibraryDetailCover from './components/LibraryDetailCover';
import LibraryDetailMeta from './components/LibraryDetailMeta';
import LibraryDetailPhrase from './components/LibraryDetailPhrase';
import LibraryDetailReview from './components/LibraryDetailReview';

const LibraryDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const [detail, setDetail] = useState<LibraryBookDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      try {
        setLoading(true);
        setErrorMessage(null);

        const accessToken = localStorage.getItem('accessToken'); // 예시

        const res = await fetch(`/api/library/${id}`, {
          method: 'GET',
          headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });

        const data: ApiResponse<LibraryBookDetail> = await res.json();

        if (data.resultType === 'FAIL') {
          // 백엔드에서 내려준 reason 보여주기
          setErrorMessage(data.error.reason || '알 수 없는 오류가 발생했습니다.');
          setDetail(null);
          return;
        }

        // SUCCESS
        setDetail(data.success.data);
      } catch (error) {
        console.error(error);
        setErrorMessage('서버와 통신 중 오류가 발생했습니다.');
        setDetail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white-normal">
        <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-6 pb-24 pt-8">
          <PostBookHeader />
          <p className="mt-10 text-center text-brown-sub">로딩 중입니다...</p>
        </section>
      </main>
    );
  }

  if (errorMessage || !detail) {
    return (
      <main className="min-h-screen bg-white-normal">
        <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-6 pb-24 pt-8">
          <PostBookHeader />
          <p className="mt-10 text-center text-brown-sub">
            {errorMessage || '데이터를 불러오지 못했습니다.'}
          </p>
        </section>
      </main>
    );
  }

  // 여기까지 왔으면 detail이 정상적으로 있음
  const { book, pageCount, readingMinutes, sentence, note, keywords } = detail;

  return (
    <main className="min-h-screen bg-white-normal">
      <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-6 pb-24 pt-8">
        <PostBookHeader />

        <LibraryDetailCover imageUrl={book.imgUrl} title={book.title} />

        <LibraryDetailMeta
          pageCount={pageCount}
          readingMinutes={readingMinutes}
          keywords={keywords}
        />

        <LibraryDetailPhrase sentence={sentence} />

        <LibraryDetailReview note={note} />
      </section>
    </main>
  );
};

export default LibraryDetailPage;
