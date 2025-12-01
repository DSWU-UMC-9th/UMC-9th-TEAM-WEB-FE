interface LibraryEditPhraseProps {
    sentence: string;
    setSentence: (v: string) => void;
  }
  
  const LibraryEditPhrase = ({ sentence, setSentence }: LibraryEditPhraseProps) => {
    return (
      <section className="w-full rounded-[18px] border-2 border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
        <div className="mb-4 flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
          <span>|</span>
          <span>내가 뽑은 구절</span>
        </div>
  
        <textarea
          rows={4}
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          placeholder="인상 깊었던 구절을 작성해주세요."
          className="w-full resize-none bg-white-light px-4 py-3 text-[24px] text-brown-darker outline-none"
        />
      </section>
    );
  };
  
  export default LibraryEditPhrase;
  