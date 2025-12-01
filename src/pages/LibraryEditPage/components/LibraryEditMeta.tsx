// src/pages/LibraryEditPage/components/LibraryEditMeta.tsx
import type { LibraryBookDetail } from '@/types/LibraryDetailPage/libraryDetail';
import {
  MAX_KEYWORDS,
  VISIBLE_KEYWORD_COUNT,
  KEYWORD_OPTIONS,
} from '@/pages/PostBookPage/constants/keywords';

interface LibraryEditMetaProps {
  origin: LibraryBookDetail;

  pageCount: string;
  readingMinutes: string;
  selectedKeywordIds: number[];
  showAllKeywords: boolean;

  setPageCount: (v: string) => void;
  setReadingMinutes: (v: string) => void;
  setShowAllKeywords: (v: boolean) => void;

  handleToggleKeyword: (id: number) => void;
}

const LibraryEditMeta = ({
  origin,
  pageCount,
  readingMinutes,
  selectedKeywordIds,
  showAllKeywords,
  setPageCount,
  setReadingMinutes,
  setShowAllKeywords,
  handleToggleKeyword,
}: LibraryEditMetaProps) => {
  const displayed = showAllKeywords
    ? KEYWORD_OPTIONS
    : KEYWORD_OPTIONS.slice(0, VISIBLE_KEYWORD_COUNT);

  return (
    <section className="w-full rounded-[18px] border-2 border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)] flex flex-col gap-6">
      {/* 책 제목 */}
      <div className="flex items-center gap-8">
        <span className="flex min-w-[120px] gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>책 제목
        </span>
        <input
          value={origin.book.title}
          readOnly
          className="h-9 px-3 text-[24px] text-brown-dark outline-none"
        />
      </div>

      {/* 저자 */}
      <div className="flex items-center gap-8">
        <span className="flex min-w-[120px] gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>저자
        </span>
        <input
          value={origin.book.author}
          readOnly
          className="h-9 px-3 text-[24px] text-brown-dark outline-none"
        />
      </div>

      {/* 페이지 수 */}
      <div className="flex items-center gap-8">
        <span className="flex min-w-[120px] gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>페이지 수
        </span>
        <input
          type="number"
          value={pageCount}
          onChange={(e) => setPageCount(e.target.value)}
          placeholder="책의 총 페이지 수를 입력해주세요."
          className="h-[62px] w-[337px] bg-brown-light px-4 text-[24px] text-brown-dark outline-none placeholder:text-[20px]"
        />
      </div>

      {/* 시간 기록 */}
      <div className="flex items-center gap-8">
        <span className="flex min-w-[120px] gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>시간 기록
        </span>
        <input
          type="number"
          value={readingMinutes}
          onChange={(e) => setReadingMinutes(e.target.value)}
          placeholder="독서한 시간을 분 단위로 입력해주세요."
          className="h-[62px] w-[337px] bg-brown-light px-4 text-[24px] text-brown-dark outline-none placeholder:text-[20px]"
        />
      </div>

      {/* 키워드 */}
      <div className="flex items-start gap-8">
        <span className="flex min-w-[120px] gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>키워드
        </span>

        <div className="flex-1 space-y-3">
          <p className="text-[20px] text-red mt-2">
            *최대 {MAX_KEYWORDS}개의 키워드를 선택해주세요
          </p>

          <div className="mt-1 flex flex-wrap gap-3">
            {displayed.map((keyword) => {
              const isSelected = selectedKeywordIds.includes(keyword.id);

              return (
                <button
                  key={keyword.id}
                  onClick={() => handleToggleKeyword(keyword.id)}
                  className={`inline-flex items-center rounded-full px-5 py-2 text-[24px] font-semibold shadow transition ${
                    isSelected
                      ? 'border-2 border-brown-darker bg-white-normal-active text-brown-darker'
                      : 'bg-brown-light text-brown-darker'
                  }`}
                >
                  {keyword.label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setShowAllKeywords(!showAllKeywords)}
              className="inline-flex items-center rounded-full border-2 border-brown-darker bg-white px-5 py-2 text-[24px] font-semibold text-brown-darker"
            >
              {showAllKeywords ? '접기' : '키워드 더보기'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryEditMeta;
