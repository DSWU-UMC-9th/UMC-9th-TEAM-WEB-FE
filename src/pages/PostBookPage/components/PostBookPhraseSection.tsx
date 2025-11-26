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
    <section className="w-full rounded-[18px] border border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
      <div className="mb-4 flex items-center gap-2 text-[20px] font-bold text-brown-darker">
        <span className="text-brown-darker">|</span>
        <span>내가 뽑은 구절</span>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          value={page}
          onChange={(e) => onChangePage(e.target.value)}
          placeholder="페이지 번호를 입력해 주세요."
          className="h-10 w-full max-w-[200px] rounded-xl bg-brown-light px-4 text-[14px] text-brown-dark outline-none"
        />
        <textarea
          rows={4}
          value={sentence}
          onChange={(e) => onChangeSentence(e.target.value)}
          placeholder="인상 깊었던 구절을 작성해주세요."
          className="w-full resize-none rounded-xl bg-brown-light px-4 py-3 text-[14px] text-brown-dark outline-none"
        />
      </div>
    </section>
  );
};

export default PostBookPhraseSection;
