// src/pages/LibraryEditPage/LibraryEditPage.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LibraryDetailHeader from '@pages/LibraryDetailPage/components/LibraryDetailHeader';
import LibraryDetailCover from '@pages/LibraryDetailPage/components/LibraryDetailCover';

import type { LibraryBookDetail } from '@/types/LibraryDetailPage/libraryDetail';
import {
  getLibraryDetail,
  updateLibraryBook,
  type UpdateLibraryBookPayload,
} from '@/apis/LibraryDetailPage/libraryDetail';

import LibraryEditMeta from './components/LibraryEditMeta';
import LibraryEditPhrase from './components/LibraryEditPhrase';
import LibraryEditReview from './components/LibraryEditReview';

const LibraryEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const userBookId = Number(id);
  const navigate = useNavigate();

  const [origin, setOrigin] = useState<LibraryBookDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 수정용 상태
  const [pageCount, setPageCount] = useState('');
  const [readingMinutes, setReadingMinutes] = useState('');
  const [selectedKeywordIds, setSelectedKeywordIds] = useState<number[]>([]);
  const [sentence, setSentence] = useState('');
  const [review, setReview] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showAllKeywords, setShowAllKeywords] = useState(false);

  // 최초 상세 정보
  useEffect(() => {
    if (!userBookId || Number.isNaN(userBookId)) {
      setError('잘못된 접근입니다.');
      setLoading(false);
      return;
    }

    const fetchDetail = async () => {
      try {
        setLoading(true);

        const data = await getLibraryDetail(userBookId);
        setOrigin(data);

        setPageCount(data.pageCount != null ? String(data.pageCount) : '');
        setReadingMinutes(
          data.readingMinutes != null ? String(data.readingMinutes) : ''
        );
        setSentence(data.sentence ?? '');
        setReview(data.note ?? '');

        if (Array.isArray(data.keywords)) {
          setSelectedKeywordIds(data.keywords.map((k) => k.id));
        } else {
          setSelectedKeywordIds([]);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('도서 정보를 불러오지 못했어요.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [userBookId]);

  const handleToggleKeyword = (id: number) => {
    const isSelected = selectedKeywordIds.includes(id);

    if (isSelected) {
      setSelectedKeywordIds(selectedKeywordIds.filter((k) => k !== id));
      return;
    }

    setSelectedKeywordIds([...selectedKeywordIds, id]);
  };

  const handleSave = async () => {
    if (!origin) return;

    const pageCountNum = pageCount ? Number(pageCount) : undefined;
    const readingMinutesNum = readingMinutes
      ? Number(readingMinutes)
      : undefined;

    const payload: UpdateLibraryBookPayload = {
      pageCount: pageCountNum,
      readingMinutes: readingMinutesNum,
      sentence: sentence || undefined,
      note: review || undefined,
      keywords: selectedKeywordIds.length
        ? selectedKeywordIds
        : origin.keywords?.map((k) => k.id),
    };

    setIsSaving(true);
    try {
      await updateLibraryBook(userBookId, payload);
      alert('도서 정보가 수정되었습니다.');
      navigate(`/library/${userBookId}`);
    } catch (_err) {
      alert('도서 수정에 실패했어요.');
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white-normal flex justify-center items-center text-[18px] text-brown-dark">
        불러오는 중입니다...
      </main>
    );
  }

  if (error || !origin) {
    return (
      <main className="min-h-screen bg-white-normal flex justify-center items-center text-[18px] text-error">
        {error || '도서 정보를 불러오지 못했어요.'}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white-normal">
      <section className="mx-auto flex w-full flex-col px-[131px] pt-[152px] gap-[70px]">
        <LibraryDetailHeader title="도서 수정" />

        <LibraryDetailCover
          imageUrl={origin.book.imgUrl}
          title={origin.book.title}
        />

        <LibraryEditMeta
          origin={origin}
          pageCount={pageCount}
          readingMinutes={readingMinutes}
          selectedKeywordIds={selectedKeywordIds}
          showAllKeywords={showAllKeywords}
          setPageCount={setPageCount}
          setReadingMinutes={setReadingMinutes}
          handleToggleKeyword={handleToggleKeyword}
          setShowAllKeywords={setShowAllKeywords}
        />

        <LibraryEditPhrase sentence={sentence} setSentence={setSentence} />

        <LibraryEditReview review={review} setReview={setReview} />

        <div className="flex justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-full border-2 border-brown-darker px-[144px] py-[38px] text-[36px] font-semibold text-brown-darker"
          >
            취소
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className={`rounded-full px-[144px] py-[38px] text-[36px] font-semibold text-white ${
              isSaving
                ? 'bg-brown-sub cursor-not-allowed'
                : 'bg-brown-normal'
            }`}
          >
            {isSaving ? '저장 중...' : '저장하기'}
          </button>
        </div>
      </section>
    </main>
  );
};

export default LibraryEditPage;
