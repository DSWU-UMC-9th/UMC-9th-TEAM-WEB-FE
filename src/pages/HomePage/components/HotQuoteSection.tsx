/**
 * HotQuoteSection 컴포넌트는 인기 구절 토론 섹션을 표시합니다.
 *
 * @param {HotQuoteSectionProps} props - 컴포넌트 props
 * @param {Object} props.hotQuote - 표시할 인기 구절 객체
 * @param {string} props.hotQuote.id - 인기 구절의 고유 식별자
 * @param {string} props.hotQuote.bookTitle - 구절이 속한 책의 제목
 * @param {string} props.hotQuote.content - 구절의 내용
 * @param {() => void} props.onClick - 인기 구절 버튼 클릭 시 호출되는 콜백 함수
 *
 * @returns {JSX.Element} 애니메이션 구절 표시가 포함된 인기 구절 토론 영역을 포함하는 섹션
 */

import type { HotQuoteSectionProps } from '@/types/HomePage/home';
import LineIcon from '@/assets/Line.svg?react';

const HotQuoteSection = ({ hotQuote, onClick }: HotQuoteSectionProps) => {
  return (
    <section className="mx-[67px]">
      <h2 className=" mb-[45px] text-[39px] font-bold text-brown-dark">| 토론 광장</h2>

      <div className="ml-3 mb-[29px] text-[32px] font-semibold text-brown-dark">구절 토론</div>

      <button
        type="button"
        onClick={onClick}
        className="flex h-[98px] w-full items-center rounded-[20px] border-2 border-brown-darker bg-white-light px-[58px] py-[30px] text-left">
        <span className="whitespace-nowrap border-brown-darker text-[32px] font-semibold"> HOT 구절 </span>

        <LineIcon className="ml-11 mr-10" />

        <div className="w-full overflow-hidden perspective-800">
          <span
            key={hotQuote ? hotQuote.id : 'empty'}
            className="animate-quote-flip block w-full overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[24px] text-brown-darker">
            {hotQuote ? `⟪${hotQuote.bookTitle}⟫ - ${hotQuote.content}` : '현재 등록된 HOT 구절이 없습니다.'}
          </span>
        </div>
      </button>
    </section>
  );
};

export default HotQuoteSection;
