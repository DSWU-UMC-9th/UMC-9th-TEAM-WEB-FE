// src/pages/PostBookPage/components/PostBookReviewSection.tsx
const PostBookReviewSection = () => {
    return (
      <section className="w-full rounded-[20px] border-2 border-brown-darker bg-white-light px-[67px] py-[63px]">
        <div className="mb-[36px] flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>
          <span>장문의 독서록 글</span>
        </div>
  
        <textarea
          rows={6}
          placeholder="내용을 작성해주세요."
          className="w-full resize-none bg-brown-light px-4 py-3 text-[20px] text-brown-darker outline-none"
        />
      </section>
    );
  };
  
  export default PostBookReviewSection;
  