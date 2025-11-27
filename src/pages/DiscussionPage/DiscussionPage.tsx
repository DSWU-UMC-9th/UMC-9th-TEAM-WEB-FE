import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHomeStore } from '@/hooks/stores/useHomeStore';
import HotQuoteSection from '@/pages/HomePage/components/HotQuoteSection';
import KeywordDiscussionSection from '@/pages/HomePage/components/KeywordDiscussionSection';
import { useRotatingHotQuote } from '@/hooks/HomePage/useRotatingHotQuote';
import type { HotQuote } from '@/types/HomePage/home';

import BookList from '@/pages/DiscussionPage/components/BookList';

const DiscussionPage = () => {
  const navigate = useNavigate();
  const {
    selectedKeyword,
    hotQuote,
    keywords,
    setSelectedKeyword,
    fetchHomeData,
    loading,
    error,
    libraryBooks,
    fetchLibrary,
  } = useHomeStore();
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
    fetchHomeData();
  }, [fetchHomeData]);

  useEffect(() => {
    fetchLibrary();
  }, [fetchLibrary]);

  const filteredBooks = useMemo(() => {
    if (!selectedKeyword) return libraryBooks;

    return libraryBooks.filter((item) => item.keywords?.includes(selectedKeyword));
  }, [selectedKeyword, libraryBooks]);

  const handleHotQuoteClick = () => {
    if (!effectiveHotQuote) return;
    navigate(`/discussion/${effectiveHotQuote.bookId}`, {
      state: { initialQuoteId: effectiveHotQuote.id },
    });
  };

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeyword(keyword);
  };

  return (
    <main className="mx-auto px-[131px] pt-[153px] overflow-hidden">
      <section className="mb-[102px] text-center">
        <h1 className="text-[48px] font-bold text-brown-dark">토론 광장</h1>
        <div className="mt-[7px] h-[3px] w-[204px] bg-brown-dark mx-auto" />
      </section>

      <section className="mb-12">
        <HotQuoteSection
          hotQuote={effectiveHotQuote ? [effectiveHotQuote] : null}
          isLoading={isHotQuoteLoading}
          onClick={handleHotQuoteClick}
        />
      </section>

      <section className="mb-12">
        <KeywordDiscussionSection keywords={keywords} onKeywordClick={handleKeywordSelect} />
      </section>

      <BookList
        books={filteredBooks.map((item) => ({
          id: item.book.id,
          title: item.book.title,
          author: item.book.author,
          imgUrl: item.book.imgUrl ?? '',
          keywords: (item.keywords ?? []).map((kw, index) => ({ id: index, name: kw })),
        }))}
      />
    </main>
  );
};

export default DiscussionPage;
