import type { BookDetail } from '../DiscussionDetailPage';

type BookSummaryProps = {
  detail: BookDetail;
};

const BookSummary = ({ detail }: BookSummaryProps) => {
  return (
    <aside className="flex w-64 flex-col items-center rounded-3xl bg-brown-dark px-6 py-8">
      {/* 책 표지 */}
      <div className="mb-4 h-64 w-40 overflow-hidden rounded-md">
        <img src={detail.coverImageUrl} alt={detail.title} className="h-full w-full object-cover" />
      </div>

      {/* 제목, 작가 */}
      <p className="text-sm font-semibold text-brown-light">&lt;{detail.title}&gt;</p>
      <p className="mt-1 text-xs text-brown-light">{detail.author}</p>

      {/* 태그 리스트 */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {detail.tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="rounded-full bg-brown-light-hover px-3 py-1 text-[11px] font-medium text-brown-dark">
            #{tag}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default BookSummary;
