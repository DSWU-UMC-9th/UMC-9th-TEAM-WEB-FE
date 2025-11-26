// src/pages/PostBookPage/components/PostBookReviewSection.tsx
interface PostBookReviewSectionProps {
  review: string;
  onChangeReview: (v: string) => void;
}

const PostBookReviewSection = ({
  review,
  onChangeReview,
}: PostBookReviewSectionProps) => {
  return (
    <section className="w-full rounded-[18px] border border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
      <div className="mb-4 flex items-center gap-2 text-[20px] font-bold text-brown-darker">
        <span className="text-brown-dark">|</span>
        <span>장문의 독서록 글</span>
      </div>

      <textarea
        rows={6}
        value={review}
        onChange={(e) => onChangeReview(e.target.value)}
        placeholder="내용을 작성해주세요."
        className="w-full resize-none rounded-xl bg-brown-light px-4 py-3 text-[14px] text-brown-darker outline-none"
      />
    </section>
  );
};

export default PostBookReviewSection;
