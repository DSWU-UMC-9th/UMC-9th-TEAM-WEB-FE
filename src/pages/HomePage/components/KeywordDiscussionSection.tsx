/**
 * 키워드 토론을 인기 키워드와 함께 표시하는 섹션 컴포넌트입니다.
 *
 * @component
 * @param {KeywordDiscussionSectionProps} props - 컴포넌트 props
 * @param {Array} props.keywords - id와 name 속성을 포함하는 키워드 객체 배열
 * @param {Function} props.onKeywordClick - 키워드 버튼 클릭 시 실행되는 콜백 함수, 키워드 이름을 인자로 받습니다
 *
 * @returns {JSX.Element} 제목과 가로 스크롤 가능한 키워드 버튼 목록을 포함하는 섹션
 *
 * @example
 * ```tsx
 * <KeywordDiscussionSection
 *   keywords={[{ id: 1, name: "React" }, { id: 2, name: "TypeScript" }]}
 *   onKeywordClick={(keywordName) => console.log(keywordName)}
 * />
 * ```
 */

import type { KeywordDiscussionSectionProps } from '@/types/HomePage/home';
import LineIcon from '@/assets/Line.svg?react';

const KeywordDiscussionSection = ({ keywords, onKeywordClick }: KeywordDiscussionSectionProps) => {
  return (
    <section className="mx-[67px]">
      <div className="ml-3 mb-[29px] text-[32px] font-semibold text-brown-dark">키워드 토론</div>

      <div className="flex h-[98px] w-full items-center rounded-[20px] border-2 border-brown-darker bg-white-light pl-[58px] text-left">
        <span className="whitespace-nowrap border-brown-darker text-[32px] font-semibold">인기 키워드</span>

        <LineIcon className="ml-11 mr-10" />
        <div className="flex h-full items-center flex-1 min-w-0 gap-6 px-[18px] overflow-x-scroll overflow-y-visible no-scrollbar">
          {keywords.map((keyword) => (
            <button
              key={keyword.id}
              type="button"
              onClick={() => onKeywordClick(keyword.name)}
              className="h-[62px] w-[158px] shrink-0 rounded-[73px] bg-brown-light-hover text-[24px] text-brown-darker drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
              {keyword.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordDiscussionSection;
