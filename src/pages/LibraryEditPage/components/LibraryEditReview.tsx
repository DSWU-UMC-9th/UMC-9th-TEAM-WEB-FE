interface LibraryEditReviewProps {
    review: string;
    setReview: (v: string) => void;
  }
  
  const LibraryEditReview = ({ review, setReview }: LibraryEditReviewProps) => {
    return (
      <section className="w-full rounded-[18px] border-2 border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
        <div className="mb-4 flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>
          <span>독서록</span>
        </div>
  
        <textarea
          rows={8}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="책을 읽고 느낀 점을 자유롭게 작성해주세요."
          className="w-full resize-none bg-white-light px-4 py-3 text-[24px] text-brown-darker outline-none"
        />
      </section>
    );
  };
  
  export default LibraryEditReview;
  