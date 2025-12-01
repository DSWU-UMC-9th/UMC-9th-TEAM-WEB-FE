// src/pages/PostBookPage/components/PostBookMetaSection.tsx
import {
  MAX_KEYWORDS,
  VISIBLE_KEYWORD_COUNT,
  KEYWORD_OPTIONS,
} from '@/pages/PostBookPage/constants/keywords';

import { useState } from 'react';

interface Props {
  title: string;
  author: string;
  pageCount: string;
  readingMinutes: string;
  selectedKeywordIds: number[];

  onChangeTitle: (v: string) => void;
  onChangeAuthor: (v: string) => void;
  onChangePageCount: (v: string) => void;
  onChangeReadingMinutes: (v: string) => void;
  onChangeKeywords: (ids: number[]) => void;
}

const PostBookMetaSection = ({
  title,
  author,
  pageCount,
  readingMinutes,
  selectedKeywordIds,
  onChangeTitle,
  onChangeAuthor,
  onChangePageCount,
  onChangeReadingMinutes,
  onChangeKeywords,
}: Props) => {

  const [showAllKeywords, setShowAllKeywords] = useState(false);

  const displayedKeywords = showAllKeywords
    ? KEYWORD_OPTIONS
    : KEYWORD_OPTIONS.slice(0, VISIBLE_KEYWORD_COUNT);

  const handleToggleKeyword = (id: number) => {
    const isSelected = selectedKeywordIds.includes(id);

    if (isSelected) {
      onChangeKeywords(selectedKeywordIds.filter((k) => k !== id));
      return;
    }

    if (selectedKeywordIds.length >= MAX_KEYWORDS) return;

    onChangeKeywords([...selectedKeywordIds, id]);
  };

  return (
    <section className="w-full rounded-[20px] border-2 border-brown-darker bg-white-light px-[67px] py-[63px]">
      <div className="flex flex-col gap-6">
        {/* 책 제목 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[36px] font-semibold text-brown-darker">
              <span>|</span>
              <span>책 제목</span>
          </span>

          <input
            type="text"
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
            placeholder="책 제목을 입력해주세요."
            className="h-[62px] w-[337px] bg-brown-light px-4 text-[24px] text-brown-dark outline-none placeholder:text-[20px] placeholder:text-white-dark-hover"
          />
        </div>

        {/* 저자 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[36px] font-semibold text-brown-darker">
              <span>|</span>
              <span>저자</span>
          </span>

          <input
            type="text"
            value={author}
            onChange={(e) => onChangeAuthor(e.target.value)}
            placeholder="저자를 입력해주세요."
            className="h-[62px] w-[337px] bg-brown-light px-4 text-[24px] text-brown-dark outline-none placeholder:text-[20px] placeholder:text-white-dark-hover"
          />
        </div>

        {/* 페이지 수 */}
        <div className="flex items-center gap-[71px]">
          <span className="flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
            <span>|</span>
            <span>페이지 수</span>
          </span>

          <input
            type="number"
            value={pageCount}
            onChange={(e) => onChangePageCount(e.target.value)}
            placeholder="책의 총 페이지 수를 입력해주세요."
            className="h-[62px] w-full max-w-[337px] bg-brown-light px-[20px] py-[19px] text-[20px] text-brown-dark outline-none"
          />
        </div>

        {/* 시간 기록 */}
        <div className="flex items-center gap-[71px]">
          <span className="flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
            <span>|</span>
            <span>시간 기록</span>
          </span>

          <input
            type="number"
            value={readingMinutes}
            onChange={(e) => onChangeReadingMinutes(e.target.value)}
            placeholder="독서한 시간을 입력해주세요."
            className="h-[62px] w-full max-w-[337px] bg-brown-light px-[20px] py-[19px] text-[20px] text-brown-dark outline-none"
          />
        </div>

        {/* 키워드 */}
        <div className="flex items-start flex-col">
          <span className="flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
            <span>|</span>
            <span>키워드</span>
            
            <p className="ml-[29px] text-[20px] font-normal text-error">
              *최대 3개의 키워드를 선택해주세요
            </p>
          </span>

          <div className="flex-1 space-y-3">

            <div className="mt-[30px] flex flex-wrap gap-x-[17px] gap-y-[16px]">
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
                    className={`inline-flex items-center rounded-full px-5 py-2 text-[24px] font-semibold shadow-[0_0_12px_rgba(0,0,0,0.08)] transition
                    ${
                        isSelected
                        ? 'border-2 border-brown-darker bg-white-normal-active text-brown-darker'
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

              <button
                type="button"
                onClick={() => setShowAllKeywords((prev) => !prev)}
                className="inline-flex items-center rounded-full border-2 border-brown-darker bg-white px-5 py-2 text-[24px] font-semibold text-brown-darker"
              >
                {showAllKeywords ? '접기' : '키워드 더보기'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostBookMetaSection;
