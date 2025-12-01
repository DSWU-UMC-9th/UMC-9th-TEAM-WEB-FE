import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useHomeStore } from '@/hooks/stores/useHomeStore';
import MyLibrarySection from '@/pages/HomePage/components/MyLibrarySection';
import HotQuoteSection from '@/pages/HomePage/components/HotQuoteSection';
import KeywordDiscussionSection from '@/pages/HomePage/components/KeywordDiscussionSection';
import { useRotatingHotQuote } from '@/hooks/HomePage/useRotatingHotQuote';

const HomePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  const { books, hotQuote, keywords, loading, error, fetchHomeData, setSelectedKeyword } = useHomeStore();
  const rotatingHotQuote = useRotatingHotQuote(hotQuote, 5000);

  const isHotQuoteLoading = loading;

  useEffect(() => {
    if (!isLoggedIn) return;

    fetchHomeData();
  }, [isLoggedIn, fetchHomeData]);

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeyword(keyword);
    navigate('/discussion');
  };

  const handleHotQuoteClick = () => {
    if (!rotatingHotQuote) return;
    navigate(`/discussion/${rotatingHotQuote.bookId}`, {
      state: { initialQuoteId: rotatingHotQuote.id },
    });
  };

  return (
    <main className="pb-[138px]">
      <section className="mx-auto w-full pt-12">
        <MyLibrarySection
          isLoggedIn={isLoggedIn}
          loading={loading}
          error={error}
          books={books}
          onKeywordClick={handleKeywordSelect}
        />
      </section>

      <section className="mx-auto mt-[58px] w-full">
        <HotQuoteSection
          hotQuote={rotatingHotQuote ? [rotatingHotQuote] : []}
          isLoading={isHotQuoteLoading}
          onClick={handleHotQuoteClick}
        />
      </section>

      <section className="mx-auto mt-10 w-full">
        <KeywordDiscussionSection keywords={keywords} onKeywordClick={handleKeywordSelect} />
      </section>
    </main>
  );
};

export default HomePage;
