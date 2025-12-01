// src/pages/LibraryDetailPage/LibraryDetailPage.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LibraryDetailHeader from './components/LibraryDetailHeader';
import LibraryDetailCover from './components/LibraryDetailCover';
import LibraryDetailMeta from './components/LibraryDetailMeta';
import LibraryDetailPhrase from './components/LibraryDetailPhrase';
import LibraryDetailReview from './components/LibraryDetailReview';

import type { LibraryBookDetail } from '@/types/LibraryDetailPage/libraryDetail';
import { getLibraryDetail } from '@/apis/LibraryDetailPage/libraryDetail';

const LibraryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const userBookId = Number(id);
  const navigate = useNavigate();

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
        setError('도서 상세 정보를 불러오지 못했어요.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [userBookId]);

  const handleGoEdit = () => {
    if (!userBookId || Number.isNaN(userBookId)) return;
    navigate(`/library/${userBookId}/edit`);
  };

  return (
    <main className="min-h-screen bg-white-normal">
      <section className="mx-auto flex w-full flex-col px-[131px] pt-[152px]">
        <LibraryDetailHeader onEdit={handleGoEdit} />

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
            <LibraryDetailCover imageUrl={detail.book.imgUrl} title={detail.book.title}/>
            <div className="flex gap-[70px] flex-col mb-[159px]">
              <LibraryDetailMeta
                title={detail.book.title}
                author={detail.book.author}
                pageCount={detail.pageCount ?? 0}
                readingMinutes={detail.readingMinutes ?? 0}
                keywords={detail.keywords ?? []}
              />
              <LibraryDetailPhrase sentence={detail.sentence ?? ''} />
              <LibraryDetailReview note={detail.note ?? ''} />
            </div>  
          </>
        )}
      </section>
    </main>
  );
};

export default LibraryDetailPage;
