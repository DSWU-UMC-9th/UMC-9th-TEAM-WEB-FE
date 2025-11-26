// src/pages/LibraryDetailPage/components/LibraryDetailMeta.tsx
import type { Keyword } from '@/types/LibraryDetailPage/libraryDetail';

interface Props {
  title: string;
  author: string;
  pageCount: number;
  readingMinutes: number;
  keywords: Keyword[];
}

const LibraryDetailMeta = ({
  title,
  author,
  pageCount,
  readingMinutes,
  keywords,
}: Props) => {
  return (
    <section className="w-full rounded-[18px] border-2 border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col gap-6">
        
        {/* 제목 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>책 제목</span>
          </span>
          <p className="text-[15px] text-brown-dark">{title}</p>
        </div>

        {/* 저자 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>저자</span>
          </span>
          <p className="text-[15px] text-brown-dark">{author}</p>
        </div>

        {/* 페이지 수 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>페이지 수</span>
          </span>
          <p className="text-[15px] text-brown-dark">{pageCount}p</p>
        </div>

        {/* 시간 기록 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>시간 기록</span>
          </span>
          <p className="text-[15px] text-brown-dark">{readingMinutes}분</p>
        </div>

        {/* 키워드 */}
        <div className="flex items-start gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>키워드</span>
          </span>

          <div className="flex flex-wrap gap-3">
            {keywords.map((k) => (
              <div
                key={k.id}
                className="rounded-full bg-brown-light px-5 py-2 text-[14px] font-semibold text-brown-darker shadow-[0_0_12px_rgba(0,0,0,0.08)]"
              >
                #{k.name}
              </div>
            ))}
            {keywords.length === 0 && (
              <span className="text-[13px] text-brown-sub">
                선택된 키워드가 없습니다.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryDetailMeta;
