import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { HotQuoteSectionProps } from '@/types/HomePage/home';

const HotQuoteSection = ({ hotQuote, onClick, isLoading }: HotQuoteSectionProps) => {
  const location = useLocation();
  const isDiscussionPage = location.pathname.startsWith('/discussion');

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!Array.isArray(hotQuote) || hotQuote.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hotQuote.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hotQuote]);

  const rotatingHotQuote = hotQuote?.[currentIndex];

  const renderText = () => {
    if (isLoading) return '로딩중...';

    if (!Array.isArray(hotQuote) || hotQuote.length === 0) {
      return '현재 등록된 HOT 구절이 없습니다.';
    }

    if (!rotatingHotQuote) {
      return '현재 등록된 HOT 구절이 없습니다.';
    }

    return `⟪${rotatingHotQuote.bookTitle}⟫ - ${rotatingHotQuote.content}`;
  };

  return (
    <section className="mx-[67px]">
      {!isDiscussionPage && <h2 className=" mb-[45px] text-[39px] font-bold text-brown-dark">| 토론 광장</h2>}

      <div className="ml-3 mb-[29px] text-[32px] font-semibold text-brown-dark">구절 토론</div>

      <button
        type="button"
        onClick={onClick}
        className={`flex h-[98px] w-full items-center rounded-[20px] px-[58px] py-[30px] text-left ${
          isDiscussionPage ? 'bg-brown-normal border-none' : 'bg-white-light border-2 border-brown-darker'
        }`}>
        <span
          className={`min-w-[147px] whitespace-nowrap border-brown-darker text-[32px] font-semibold text-center ${
            isDiscussionPage ? 'text-white-light' : 'text-brown-darker'
          }`}>
          HOT 구절
        </span>

        <div className={`ml-11 mr-10 w-0.5 h-[38px] ${isDiscussionPage ? 'bg-white-light' : 'bg-brown-darker'}`} />

        <div className="w-full overflow-hidden perspective-800">
          <span
            key={rotatingHotQuote ? rotatingHotQuote.id : 'empty'}
            className={`animate-quote-flip block w-full overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[24px] ${
              isDiscussionPage ? 'text-white-light' : 'text-brown-darker'
            }`}>
            {renderText()}
          </span>
        </div>
      </button>
    </section>
  );
};

export default HotQuoteSection;
