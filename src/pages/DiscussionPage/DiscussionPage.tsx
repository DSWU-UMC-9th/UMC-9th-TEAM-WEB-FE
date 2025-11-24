import { useEffect, useMemo } from 'react';
import { useHomeStore } from '@/hooks/stores/useHomeStore';
import HotQuoteSection from '@/pages/HomePage/components/HotQuoteSection';
import KeywordDiscussionSection from '@/pages/HomePage/components/KeywordDiscussionSection';
import { useRotatingHotQuote } from '@/hooks/HomePage/useRotatingHotQuote';
import { DUMMY_BOOKS } from '@/data/booksDummy';
import type { HotQuote } from '@/types/HomePage/home';

import BookList from '@/pages/DiscussionPage/components/BookList';

const DiscussionPage = () => {
  const { selectedKeyword, hotQuote, keywords, setSelectedKeyword, fetchHomeData, loading, error } = useHomeStore();
  const rotatingHotQuote = useRotatingHotQuote(hotQuote, 5000);

  const effectiveHotQuote: HotQuote | null = useMemo(() => {
    if (rotatingHotQuote) return rotatingHotQuote;

    if (Array.isArray(hotQuote)) {
      return hotQuote[0] ?? null;
    }

    return hotQuote ?? null;
  }, [rotatingHotQuote, hotQuote]);

  const isHotQuoteLoading = loading && !effectiveHotQuote && !error;

  useEffect(() => {
    if (!hotQuote && keywords.length === 0) {
      fetchHomeData();
    }
  }, [hotQuote, keywords.length, fetchHomeData]);

  const filteredBooks = useMemo(() => {
    if (!selectedKeyword) return DUMMY_BOOKS;

    return DUMMY_BOOKS.filter((book) => book.keywords?.some((kw) => kw.includes(selectedKeyword)));
  }, [selectedKeyword]);

  const handleHotQuoteClick = () => {
    if (!rotatingHotQuote) return;
  };

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeyword(keyword);
  };

  return (
    <main className="mx-auto px-10 pt-12 overflow-hidden">
      <section className="mb-[102px] text-center">
        <h1 className="text-[48px] font-bold text-brown-dark">토론 광장</h1>
        <div className="mt-[7px] h-[3px] w-[204px] bg-brown-dark mx-auto" />
      </section>

      <section className="mb-12">
        <HotQuoteSection hotQuote={effectiveHotQuote} isLoading={isHotQuoteLoading} onClick={handleHotQuoteClick} />
      </section>

      <section className="mb-12">
        <KeywordDiscussionSection keywords={keywords} onKeywordClick={handleKeywordSelect} />
      </section>

      <BookList books={filteredBooks} />
    </main>
  );
};

export default DiscussionPage;
