import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import BookSummary from '@/pages/DiscussionDetailPage/components/BookSummary';
import PassageList from '@/pages/DiscussionDetailPage/components/PassageList';

import type { BookDetail } from '@/types/DiscussionDetailPage/bookDetail';
import { getBookDetail } from '@/apis/DiscussionDetailPage/getBookDetail';

const DiscussionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const numericId = Number(id);

  const [detail, setDetail] = useState<BookDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const result = await getBookDetail(numericId);
        setDetail(result);
      } catch (err) {
        console.error('상세 조회 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [numericId]);

  if (loading) {
    return <main className="mx-auto px-[131px] py-[153px] text-[40px]">불러오는 중...</main>;
  }

  if (!detail) {
    return <main className="mx-auto px-[131px] py-[153px] text-[40px]">도서 정보를 찾을 수 없습니다.</main>;
  }

  return (
    <main className="mx-auto px-[131px] py-[153px]">
      <section className="mb-[133px] flex items-center w-full pr-[31px]">
        <button type="button" onClick={() => navigate(-1)} className="text-[48px] font-bold text-brown-dark">
          {'<'}
        </button>

        <div className="flex flex-1 flex-col items-center">
          <h1 className="text-[48px] font-bold text-brown-dark">토론 광장</h1>
          <div className="mt-[7px] h-[3px] w-[204px] bg-brown-dark mx-auto" />
        </div>
      </section>

      <section className="flex gap-[42px] h-[1007px] overflow-scroll no-scrollbar">
        <BookSummary detail={detail} />
        <PassageList passages={detail.passages} initialActiveId={null} title={detail.title} />
      </section>
    </main>
  );
};

export default DiscussionDetailPage;
