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
      <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-6 pb-24 pt-8">
        <PostBookHeader />
        <PostBookCoverSection />
        <PostBookMetaSection />
        <PostBookQuoteSection />
        <PostBookReviewSection />
        <PostBookSubmitBar />
      </section>
    </main>
  );
};

export default PostBookPage;
