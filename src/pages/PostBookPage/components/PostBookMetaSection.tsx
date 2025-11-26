// src/pages/PostBookPage/components/PostBookMetaSection.tsx
import { useState } from 'react';

const MAX_KEYWORDS = 3;

// TODO: 나중에 백엔드에서 받아온 키워드 리스트로 교체
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

const PostBookMetaSection = () => {
  // 선택된 키워드 id 배열
  const [selectedKeywordIds, setSelectedKeywordIds] = useState<number[]>([]);

  const handleToggleKeyword = (id: number) => {
    setSelectedKeywordIds((prev) => {
      const isSelected = prev.includes(id);

      // 이미 선택된 경우 → 해제
      if (isSelected) {
        return prev.filter((k) => k !== id);
      }

      // 새로 선택하는 경우인데 이미 3개라면 → 무시
      if (prev.length >= MAX_KEYWORDS) {
        return prev;
      }

      // 새로 추가
      return [...prev, id];
    });
  };

  // TODO: 나중에 폼 submit 할 때 selectedKeywordIds를 함께 전송
  // 예: body.keywords = selectedKeywordIds;

  return (
    <section className="w-full rounded-[20px] border-2 border-brown-darker bg-white-light px-[67px] py-[63px]">
      <div className="flex flex-col gap-6">
        {/* 페이지 수 */}
        <div className="flex items-center gap-[71px]">
          <span className="flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
            <span>|</span>
            <span>페이지 수</span>
          </span>

          <input
            type="number"
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
            type="text"
            placeholder="독서한 시간을 입력해주세요."
            className="h-[62px] w-full max-w-[337px] bg-brown-light px-[20px] py-[19px] text-[20px] text-brown-dark outline-none"
          />
        </div>

        {/* 키워드 */}
        <div className="flex items-start flex-col">
          <span className="flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
            <span>|</span>
            <span>키워드</span>
            {/* 안내 문구 (선택 개수 제한) */}
            <p className="ml-[29px] text-[20px] font-normal text-error">
              *최대 3개의 키워드를 선택해주세요
            </p>
          </span>

          <div className="flex-1 space-y-3">

            {/* 키워드 선택 배지 리스트 */}
            <div className="mt-[30px] flex flex-wrap gap-x-[17px] gap-y-[16px]">
              {KEYWORD_OPTIONS.map((keyword) => {
                const isSelected = selectedKeywordIds.includes(keyword.id);
                const isDisabled =
                  !isSelected && selectedKeywordIds.length >= MAX_KEYWORDS;

                return (
                  <button
                    key={keyword.id}
                    type="button"
                    onClick={() => handleToggleKeyword(keyword.id)}
                    disabled={isDisabled}
                    className={`inline-flex items-center rounded-full px-[35px] py-[17px] text-[24px] font-bold shadow-[0_0_12px_rgba(0,0,0,0.08)] transition
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostBookMetaSection;
