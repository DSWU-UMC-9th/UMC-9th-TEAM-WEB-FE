// src/pages/PostBookPage/PostBookPage.tsx
import PostBookHeader from './components/PostBookHeader';
import PostBookCoverSection from './components/PostBookCoverSection';
import PostBookMetaSection from './components/PostBookMetaSection';
import PostBookQuoteSection from './components/PostBookPhraseSection';
import PostBookReviewSection from './components/PostBookReviewSection';
import PostBookSubmitBar from './components/PostBookSubmitBar';

const PostBookPage = () => {
  return (
    <main className="min-h-screen bg-white-normal">
      <section className="flex w-full flex-col px-[131px] pb-[128px] pt-[152px]">
        <PostBookHeader />
        <PostBookCoverSection />
        <div className="flex flex-col gap-[70px]">
          <PostBookMetaSection />
          <PostBookQuoteSection />
          <PostBookReviewSection />
        </div>
        <PostBookSubmitBar />
      </section>
    </main>
  );
};

export default PostBookPage;
