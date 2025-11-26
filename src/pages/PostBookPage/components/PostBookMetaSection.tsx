// src/pages/PostBookPage/components/PostBookMetaSection.tsx
const MAX_KEYWORDS = 3;

const KEYWORD_OPTIONS = [
  { id: 1, label: '소설' },
  { id: 2, label: '시' },
  { id: 3, label: '에세이' },
  { id: 4, label: '추리' },
  { id: 5, label: '판타지' },
  { id: 6, label: 'SF' },
  { id: 7, label: '고전' },
  { id: 8, label: '문학' },
  { id: 9, label: '자기개발' },
  { id: 10, label: '경제경영' },
  { id: 11, label: '재테크' },
  { id: 12, label: '건강' },
  { id: 13, label: '요리' },
  { id: 14, label: '취미' },
  { id: 15, label: '여행' },
  { id: 16, label: '회복탄력성' },
  { id: 17, label: '번아웃' },
  { id: 18, label: '인공지능' },
  { id: 19, label: '미니멀리즘' },
  { id: 20, label: '루틴' },
  { id: 21, label: '불안' },
  { id: 22, label: '미국주식' },
  { id: 23, label: '웹툰' },
  { id: 24, label: '교양' },
  { id: 25, label: '기술' },
  { id: 26, label: '인간관계' },
  { id: 27, label: '예술' },
  { id: 28, label: '종교' },
  { id: 29, label: '인문학' },
  { id: 30, label: '심리' },
];

interface Props {
  title: string;
  author: string;
  pageCount: string;
  readingMinutes: string;
  selectedKeywordIds: number[];

  onChangeTitle: (v: string) => void;
  onChangeAuthor: (v: string) => void;
  onChangePageCount: (v: string) => void;
  onChangeReadingMinutes: (v: string) => void;
  onChangeKeywords: (ids: number[]) => void;
}

const PostBookMetaSection = ({
  title,
  author,
  pageCount,
  readingMinutes,
  selectedKeywordIds,
  onChangeTitle,
  onChangeAuthor,
  onChangePageCount,
  onChangeReadingMinutes,
  onChangeKeywords,
}: Props) => {
  const handleToggleKeyword = (id: number) => {
    const isSelected = selectedKeywordIds.includes(id);

    if (isSelected) {
      onChangeKeywords(selectedKeywordIds.filter((k) => k !== id));
      return;
    }

    if (selectedKeywordIds.length >= MAX_KEYWORDS) return;

    onChangeKeywords([...selectedKeywordIds, id]);
  };

  return (
    <section className="w-full rounded-[18px] border border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col gap-6">
        {/* 책 제목 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>책 제목</span>
          </span>

          <input
            type="text"
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
            placeholder="책 제목을 입력해주세요."
            className="h-10 w-full max-w-[280px] rounded-xl bg-brown-light px-4 text-[14px] text-brown-dark outline-none placeholder:text-brown-sub"
          />
        </div>

        {/* 저자 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>저자</span>
          </span>

          <input
            type="text"
            value={author}
            onChange={(e) => onChangeAuthor(e.target.value)}
            placeholder="저자를 입력해주세요."
            className="h-10 w-full max-w-[280px] rounded-xl bg-brown-light px-4 text-[14px] text-brown-dark outline-none placeholder:text-brown-sub"
          />
        </div>

        {/* 페이지 수 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>페이지 수</span>
          </span>

          <input
            type="number"
            value={pageCount}
            onChange={(e) => onChangePageCount(e.target.value)}
            placeholder="책의 총 페이지 수를 입력해주세요."
            className="h-10 w-full max-w-[280px] rounded-xl bg-brown-light px-4 text-[14px] text-brown-dark outline-none placeholder:text-brown-sub"
          />
        </div>

        {/* 시간 기록 */}
        <div className="flex items-center gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>시간 기록</span>
          </span>

          <input
            type="number"
            value={readingMinutes}
            onChange={(e) => onChangeReadingMinutes(e.target.value)}
            placeholder="독서한 시간을 분 단위로 입력해주세요."
            className="h-10 w-full max-w-[280px] rounded-xl bg-brown-light px-4 text-[14px] text-brown-dark outline-none placeholder:text-brown-sub"
          />
        </div>

        {/* 키워드 */}
        <div className="flex items-start gap-8">
          <span className="flex min-w-[120px] items-center gap-2 text-[20px] font-bold text-brown-darker">
            <span>|</span>
            <span>키워드</span>
          </span>

          <div className="flex-1 space-y-3">
            <p className="text-[13px] text-brown-sub">
              키워드는 최대 {MAX_KEYWORDS}개까지 선택할 수 있습니다.
            </p>

            <div className="mt-1 flex flex-wrap gap-3">
              {KEYWORD_OPTIONS.map((keyword) => {
                const isSelected = selectedKeywordIds.includes(keyword.id);
                const isDisabled =
                  !isSelected && selectedKeywordIds.length >= MAX_KEYWORDS;

                return (
                  <button
                    key={keyword.id}
                    type="button"
                    onClick={() => handleToggleKeyword(keyword.id)}
                    disabled={isDisabled}
                    className={`inline-flex items-center rounded-full px-5 py-2 text-[14px] font-semibold shadow-[0_0_12px_rgba(0,0,0,0.08)] transition
                      ${
                        isSelected
                          ? 'border-2 border-brown-darker bg-white-dark text-brown-darker'
                          : 'bg-brown-light text-brown-darker'
                      }
                      ${
                        isDisabled
                          ? 'cursor-not-allowed opacity-60'
                          : 'cursor-pointer'
                      }`}
                  >
                    {keyword.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostBookMetaSection;
