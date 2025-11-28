// src/pages/PostBookPage/components/PostBookPhraseSection.tsx
interface PostBookPhraseSectionProps {
  page: string;
  onChangePage: (value: string) => void;
  sentence: string;
  onChangeSentence: (value: string) => void;
}

const PostBookPhraseSection = ({
  page,
  onChangePage,
  sentence,
  onChangeSentence,
}: PostBookPhraseSectionProps) => {
  return (
    <section className="w-full rounded-[20px] border-2 border-brown-darker bg-white-light px-[67px] py-[63px]">
        <div className="mb-[36px] flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
        <span>|</span>
        <span>내가 뽑은 구절</span>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          value={page}
          onChange={(e) => onChangePage(e.target.value)}
          placeholder="페이지 번호를 입력해 주세요."
          className="h-[62px] w-full max-w-[337px] bg-brown-light px-4 text-[20px] text-brown-dark outline-none"
        />
        <textarea
          rows={4}
          value={sentence}
          onChange={(e) => onChangeSentence(e.target.value)}
          placeholder="인상 깊었던 구절을 작성해주세요."
          className="w-full resize-none bg-white-light px-4 py-3 text-[20px] text-brown-dark outline-none"
        />
      </div>
    </section>
  );
};

export default PostBookPhraseSection;
