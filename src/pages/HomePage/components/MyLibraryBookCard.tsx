/**
 * 책 표지 이미지를 표시하고 호버 시 키워드 버튼을 보여주는 책 카드 컴포넌트입니다.
 *
 * @param props - 컴포넌트 props
 * @param props.book - 제목, 표지 이미지 URL, 키워드를 포함하는 책 객체
 * @param props.onKeywordClick - 키워드 버튼 클릭 시 호출되는 콜백 함수
 *
 * @returns 책 표지와 호버 시 인터랙티브한 키워드 오버레이를 가진 스타일링된 카드 컴포넌트
 *
 * @example
 * ```tsx
 * <MyLibraryBookCard
 *   book={{ title: "책 제목", coverImageUrl: "/path/to/image.jpg", keywords: ["키워드1", "키워드2"] }}
 *   onKeywordClick={(keyword) => console.log(keyword)}
 * />
 * ```
 */

import type { MyLibraryBookCardProps } from '@/types/HomePage/home';

const MyLibraryBookCard = ({ book, onKeywordClick }: MyLibraryBookCardProps) => {
  return (
    <div className="group relative h-[444px] w-[300px] shrink-0 cursor-pointer overflow-hidden bg-gray-200 shadow-md">
      <img src={book.coverImageUrl} alt={book.title} className="h-full w-full object-cover" />

      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50" />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="grid w-full grid-cols-2 justify-between gap-y-8 gap-x-3 px-6">
          {book.keywords.map((keyword) => (
            <button
              key={keyword}
              type="button"
              onClick={() => onKeywordClick(keyword)}
              className="whitespace-nowrap text-ellipsis pointer-events-auto w-full overflow-hidden rounded-[40px] bg-brown-light-hover box-shadow-[0_0_4px_rgba(0,0,0,0.25)] px-[19px] py-[13px] text-[20px] text-brown-darker font-bold">
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLibraryBookCard;
