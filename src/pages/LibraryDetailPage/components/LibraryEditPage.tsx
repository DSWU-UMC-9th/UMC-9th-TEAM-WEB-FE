// src/pages/LibraryDetailPage/LibraryEditPage.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LibraryDetailHeader from '../components/LibraryDetailHeader';
import LibraryDetailCover from '../components/LibraryDetailCover';

import type { LibraryBookDetail } from '@/types/LibraryDetailPage/libraryDetail';
import {
  getLibraryDetail,
  updateLibraryBook,
  type UpdateLibraryBookPayload,
} from '@/apis/LibraryDetailPage/libraryDetail';

const MAX_KEYWORDS = 3;
const VISIBLE_KEYWORD_COUNT = 18;

const KEYWORD_OPTIONS = [
  { id: 1, label: '소설' },
  { id: 2, label: '시' },
  { id: 3, label: '에세이' },
  { id: 4, label: '추리' },
  { id: 5, label: '판타지' },
  { id: 6, label: 'SF' },
  { id: 7, label: '고전' },
  { id: 8, label: '문학' },
  { id: 9, label: '자기개발' },
  { id: 10, label: '경제경영' },
  { id: 11, label: '재테크' },
  { id: 12, label: '건강' },
  { id: 13, label: '요리' },
  { id: 14, label: '취미' },
  { id: 15, label: '여행' },
  { id: 16, label: '회복탄력성' },
  { id: 17, label: '번아웃' },
  { id: 18, label: '인공지능' },
  { id: 19, label: '미니멀리즘' },
  { id: 20, label: '루틴' },
  { id: 21, label: '불안' },
  { id: 22, label: '미국주식' },
  { id: 23, label: '웹툰' },
  { id: 24, label: '교양' },
  { id: 25, label: '기술' },
  { id: 26, label: '인간관계' },
  { id: 27, label: '예술' },
  { id: 28, label: '종교' },
  { id: 29, label: '인문학' },
  { id: 30, label: '심리' },
];

const LibraryEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const userBookId = Number(id);
  const navigate = useNavigate();

  const [origin, setOrigin] = useState<LibraryBookDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 수정용 상태 (페이지/시간/키워드/구절/독서록)
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pageCount, setPageCount] = useState('');
  const [readingMinutes, setReadingMinutes] = useState('');
  const [selectedKeywordIds, setSelectedKeywordIds] = useState<number[]>([]);
  const [sentence, setSentence] = useState('');
  const [review, setReview] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showAllKeywords, setShowAllKeywords] = useState(false);

  // 최초 상세 정보 불러오기
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
        setOrigin(data);

        // 최초 값 세팅 (수정폼 초기값)
        setTitle(data.book.title ?? '');
        setAuthor(data.book.author ?? '');
        setPageCount(data.pageCount != null ? String(data.pageCount) : '');
        setReadingMinutes(
          data.readingMinutes != null ? String(data.readingMinutes) : '',
        );
        setSentence(data.sentence ?? '');
        setReview(data.note ?? '');

        // 기존 선택 키워드를 id 배열로 세팅
        if (Array.isArray(data.keywords)) {
          setSelectedKeywordIds(data.keywords.map((k) => k.id));
        } else {
          setSelectedKeywordIds([]);
        }
      } catch (err) {
        console.error(err);
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

    if (selectedKeywordIds.length >= MAX_KEYWORDS) return;

    setSelectedKeywordIds([...selectedKeywordIds, id]);
  };

  // 저장 버튼 클릭
  const handleSave = async () => {
    if (!origin) return;

    // 페이지/시간 숫자 변환
    const pageCountNum = pageCount ? Number(pageCount) : undefined;
    const readingMinutesNum = readingMinutes
      ? Number(readingMinutes)
      : undefined;

    if (pageCount && Number.isNaN(pageCountNum)) {
      alert('페이지 수는 숫자로 입력해 주세요.');
      return;
    }
    if (readingMinutes && Number.isNaN(readingMinutesNum)) {
      alert('시간 기록은 숫자로 입력해 주세요.');
      return;
    }

    //  백엔드 PATCH 스펙에는 title/author가 없어서
    //    여기서는 pageCount / readingMinutes / sentence / note / keywords만 전송
    const payload: UpdateLibraryBookPayload = {
      pageCount: pageCountNum,
      readingMinutes: readingMinutesNum,
      sentence: sentence || undefined,
      note: review || undefined,
      // 선택된 키워드가 하나도 없으면, 그냥 빈 배열 보내지 않고
      // "아예 필드를 안 보낼지"는 백엔드 정책에 따라 다를 수 있음.
      keywords:
        selectedKeywordIds.length > 0
          ? selectedKeywordIds
          : origin.keywords?.map((k) => k.id),
    };

    setIsSaving(true);
    try {
      await updateLibraryBook(userBookId, payload);

      alert('도서 정보가 수정되었습니다.');
      // 수정 후 상세 페이지로 이동
      navigate(`/library/${userBookId}`);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        alert(err.message || '도서 수정에 실패했어요.');
      } else {
        alert('도서 수정에 실패했어요.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  const displayedKeywords = showAllKeywords
  ? KEYWORD_OPTIONS
  : KEYWORD_OPTIONS.slice(0, VISIBLE_KEYWORD_COUNT);


  // 수정 버튼 눌렀을 때 동작은 이미 라우팅(/library/:id/edit)으로 오고 있으니, 여기서는 별도 onEdit 없음
  return (
    <main className="min-h-screen bg-white-normal">
      <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-6 pb-24 pt-8">
        <LibraryDetailHeader title="도서 수정" />

        {loading && (
          <p className="mt-8 text-center text-[18px] text-brown-sub">
            불러오는 중입니다...
          </p>
        )}

        {!loading && error && (
          <p className="mt-8 text-center text-[18px] text-error">
            {error}
          </p>
        )}

        {!loading && !error && origin && (
          <>
            {/*표지 이미지는 수정 없이 보여주기만 */}
            <LibraryDetailCover imageUrl={origin.book.imgUrl} />

            {/* 제목/저자/페이지/시간/키워드 */}
            <section className="w-full rounded-[18px] border border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col gap-6">
                {/* 책 제목 */}
                <div className="flex items-center gap-8">
                  <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
                    <span>|</span>
                    <span>책 제목</span>
                  </span>

                  <input
                    value={origin.book.title}
                    readOnly
                    className="h-9 w-[120px] px-3 text-[14px] text-brown-dark outline-none"
                  />
                </div>

                {/* 저자 */}
                <div className="flex items-center gap-8">
                  <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
                    <span>|</span>
                    <span>저자</span>
                  </span>

                  <input
                    value={origin.book.author}
                    readOnly
                    className="h-9 w-[120px]  px-3 text-[14px] text-brown-dark outline-none"
                  />

                </div>

                {/* 페이지 수 */}
                <div className="flex items-center gap-8">
                  <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
                    <span>|</span>
                    <span>페이지 수</span>
                  </span>

                  <input
                    type="number"
                    value={pageCount}
                    onChange={(e) => setPageCount(e.target.value)}
                    placeholder="책의 총 페이지 수를 입력해주세요."
                    className="h-10 w-full max-w-[280px] rounded-xl bg-brown-light px-4 text-[14px] text-brown-dark outline-none placeholder:text-brown-sub"
                  />
                </div>

                {/* 시간 기록 */}
                <div className="flex items-center gap-8">
                  <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
                    <span>|</span>
                    <span>시간 기록</span>
                  </span>

                  <input
                    type="number"
                    value={readingMinutes}
                    onChange={(e) => setReadingMinutes(e.target.value)}
                    placeholder="독서한 시간을 분 단위로 입력해주세요."
                    className="h-10 w-full max-w-[280px] rounded-xl bg-brown-light px-4 text-[14px] text-brown-dark outline-none placeholder:text-brown-sub"
                  />
                </div>

                {/* 키워드 (전체 목록 + 기존 선택 미리 체크) */}
                <div className="flex items-start gap-8">
                  <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
                    <span>|</span>
                    <span>키워드</span>
                  </span>

                  <div className="flex-1 space-y-3">
                    <p className="text-[10px] text-red">
                      *최대 {MAX_KEYWORDS}개의 키워드를 선택해주세요
                    </p>

                    <div className="mt-1 flex flex-wrap gap-3">
                        {displayedKeywords.map((keyword) => {
                            const isSelected = selectedKeywordIds.includes(keyword.id);
                            const isDisabled =
                            !isSelected && selectedKeywordIds.length >= MAX_KEYWORDS;

                            return (
                            <button
                                key={keyword.id}
                                type="button"
                                onClick={() => handleToggleKeyword(keyword.id)}
                                disabled={isDisabled}
                                className={`inline-flex items-center rounded-full px-5 py-2 text-[14px] font-semibold shadow-[0_0_12px_rgba(0,0,0,0.08)] transition
                                ${
                                    isSelected
                                    ? 'border-2 border-brown-darker bg-white-dark text-brown-darker'
                                    : 'bg-brown-light text-brown-darker'
                                }
                                ${
                                    isDisabled
                                    ? 'cursor-not-allowed opacity-60'
                                    : 'cursor-pointer'
                                }`}
                            >
                                {keyword.label}
                            </button>
                            );
                        })}

                        {/* 키워드 더보기 / 접기 버튼 */}
                        <button
                            type="button"
                            onClick={() => setShowAllKeywords((prev) => !prev)}
                            className="inline-flex items-center rounded-full border border-brown-darker bg-white px-5 py-2 text-[14px] font-semibold text-brown-darker"
                        >
                            {showAllKeywords ? '접기' : '키워드 더보기'}
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 내가 뽑은 구절 수정 */}
            <section className="w-full rounded-[18px] border border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
              <div className="mb-4 flex items-center gap-2 text-[20px] font-bold text-brown-darker">
                <span>|</span>
                <span>내가 뽑은 구절</span>
              </div>
              <textarea
                rows={4}
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
                placeholder="인상 깊었던 구절을 작성해주세요."
                className="w-full resize-none rounded-xl bg-brown-light px-4 py-3 text-[14px] text-brown-dark outline-none placeholder:text-brown-sub"
              />
            </section>

            {/* 독서록 수정 */}
            <section className="w-full rounded-[18px] border border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
              <div className="mb-4 flex items-center gap-2 text-[20px] font-bold text-brown-darker">
                <span>|</span>
                <span>독서록</span>
              </div>
              <textarea
                rows={8}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="책을 읽고 느낀 점을 자유롭게 작성해주세요."
                className="w-full resize-none rounded-xl bg-brown-light px-4 py-3 text-[14px] text-brown-dark outline-none placeholder:text-brown-sub"
              />
            </section>

            {/* 하단 저장 버튼 */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="rounded-[12px] border border-brown-darker px-6 py-2 text-[14px] font-semibold text-brown-darker"
              >
                취소
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className={`rounded-[12px] px-6 py-2 text-[14px] font-semibold text-white ${
                  isSaving
                    ? 'bg-brown-sub cursor-not-allowed'
                    : 'bg-brown-darker'
                }`}
              >
                {isSaving ? '저장 중...' : '저장하기'}
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default LibraryEditPage;
