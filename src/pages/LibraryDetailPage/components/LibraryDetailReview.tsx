// src/pages/LibraryDetailPage/components/LibraryDetailReview.tsx

interface Props {
    note: string;
  }
  
  const LibraryDetailReview = ({ note }: Props) => {
    return (
      <section className="w-full rounded-[18px] border-2 border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
        <div className="mb-4 flex items-center gap-2 text-[20px] font-bold text-brown-darker">
          <span>|</span>
          <span>장문의 독서록 글</span>
        </div>
  
        <p className="whitespace-pre-line text-[15px] text-brown-darker">
          {note || '작성된 독서록이 없습니다.'}
        </p>
      </section>
    );
  };
  
  export default LibraryDetailReview;
  