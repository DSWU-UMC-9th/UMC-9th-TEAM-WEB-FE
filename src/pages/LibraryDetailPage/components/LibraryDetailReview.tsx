// src/pages/LibraryDetailPage/components/LibraryDetailReview.tsx

interface Props {
    note: string;
  }
  
  const LibraryDetailReview = ({ note }: Props) => {
    return (
      <section className="w-full rounded-[20px] border-2 border-brown-darker bg-white-light px-[67px] py-[63px]">
        <div className="mb-[36px] flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>
          <span>장문의 독서록 글</span>
        </div>
  
        <p className="whitespace-pre-line text-[24px] font-normal text-brown-darker">
          {note || '작성된 독서록이 없습니다.'}
        </p>
      </section>
    );
  };
  
  export default LibraryDetailReview;
  