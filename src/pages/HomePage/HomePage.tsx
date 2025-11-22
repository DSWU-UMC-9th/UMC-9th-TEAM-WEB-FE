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
  const { isLoggedIn, user } = useAuthStore();
  const { books, hotQuote, keywords, loading, error, fetchHomeData, setSelectedKeyword } = useHomeStore();
  const rotatingHotQuote = useRotatingHotQuote(hotQuote, 10000);

  useEffect(() => {
    fetchHomeData(isLoggedIn ? user?.id : undefined);
  }, [isLoggedIn, user?.id, fetchHomeData]);

  const handleKeywordSelect = (keyword: string) => {
    /**
     *   키워드를 클릭하면 setSelectedKeyword(keyword)로 zustand useHomeStore 안에 selectedKeyword 값을 저장해 두고
     *   /discussion 페이지로 이동시키고 있습니다.
     */
    setSelectedKeyword(keyword);
    /**
     * TODO: /discussion 페이지를 구현하는 분께
     *
     * - useHomeStore() 또는 별도의 discussion 전용 store에서
     *   `selectedKeyword`를 읽어와 해당 키워드에 맞는 책/구절을 필터링해 주세요.
     */
    navigate('/discussion');
  };

  const handleHotQuoteClick = () => {
    if (!rotatingHotQuote) return;

    /**
     * TODO: 백엔드 연동 후에는 rotatingHotQuote.id 를 실제 구절 ID로 연동하여 사용.
     * e.g. /discussion/:quoteId
     */
    navigate(`/discussion/${rotatingHotQuote.id}`);
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
        <HotQuoteSection hotQuote={rotatingHotQuote} onClick={handleHotQuoteClick} />
      </section>

      <section className="mx-auto mt-10 w-full">
        <KeywordDiscussionSection keywords={keywords} onKeywordClick={handleKeywordSelect} />
      </section>
    </main>
  );
};

export default HomePage;
