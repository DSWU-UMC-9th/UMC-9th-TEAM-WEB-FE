import type { BookDetail } from '@/pages/DiscussionDetailPage/DiscussionDetailPage';

type BookSummaryProps = {
  detail: BookDetail;
};

const BookSummary = ({ detail }: BookSummaryProps) => {
  return (
    <aside className="sticky top-[133px] h-fit flex min-w-[540px] flex-col items-center rounded-[20px] bg-brown-normal py-[61px] px-[91px]">
      <div className="mb-14 h-[452px] w-[300px] overflow-hidden rounded-md">
        <img src={detail.coverImageUrl} alt={detail.title} className="h-full w-full object-cover" />
      </div>

      <p className="text-[36px] font-bold text-brown-light">&lt;{detail.title}&gt;</p>
      <p className="mt-1.5 text-[24px] font-normal text-brown-light">{detail.author}</p>

      <div className="mt-[30px] grid grid-cols-2 gap-x-[42px] gap-y-6">
        {detail.tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="flex justify-center items-center h-[62px] w-[158px]  rounded-[73px]  bg-brown-light ">
            <p className="w-[138px] whitespace-nowrap overflow-hidden text-ellipsis shrink-0 text-[24px] font-bold text-brown-darker">
              {tag}
            </p>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default BookSummary;
