// src/pages/LibraryDetailPage/LibraryDetailPage.tsx
import { useParams } from 'react-router-dom';

import PostBookHeader from '@/pages/PostBookPage/components/PostBookHeader';
import LibraryDetailCover from './components/LibraryDetailCover';
import LibraryDetailMeta from './components/LibraryDetailMeta';
import LibraryDetailPhrase from './components/LibraryDetailPhrase';
import LibraryDetailReview from './components/LibraryDetailReview';
import { MOCK_LIBRARY_DETAILS } from './mocks/mockLibraryDetails';

const LibraryDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const numericId = Number(id);

  // id에 해당하는 더미데이터 찾기, 없으면 첫 번째 아이템 사용
  const detail =
    MOCK_LIBRARY_DETAILS.find((d) => d.id === numericId) ||
    MOCK_LIBRARY_DETAILS[0];

  return (
    <main className="min-h-screen bg-white-normal">
      <section className="mx-auto flex w-full flex-col px-[131px] pt-[152px]">
        {/* 상단 헤더는 PostBookPage에서 쓰던 것 재사용 */}
        <PostBookHeader />

        {/* 표지 */}
        <LibraryDetailCover imageUrl={detail.book.imgUrl} title={detail.book.title} />

        <div className="flex gap-[70px] flex-col mb-[159px]">
          {/* 메타 정보( 페이지 수, 시간, 키워드) */}
          <LibraryDetailMeta
            pageCount={detail.pageCount}
            readingMinutes={detail.readingMinutes}
            keywords={detail.keywords}
          />

          {/* 내가 뽑은 구절 */}
          <LibraryDetailPhrase sentence={detail.sentence} />

          {/* 장문의 독서록 글 */}
          <LibraryDetailReview note={detail.note} />
        </div>
      </section>
    </main>
  );
};

export default LibraryDetailPage;
