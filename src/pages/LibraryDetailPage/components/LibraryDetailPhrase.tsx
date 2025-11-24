// src/pages/LibraryDetailPage/components/LibraryDetailPhrase.tsx

interface Props {
    sentence: string;
  }
  
  const LibraryDetailPhrase = ({ sentence }: Props) => {
    return (
      <section className="w-full rounded-[18px] border-2 border-brown-darker bg-white-light px-10 py-8 shadow-[0_0_25px_rgba(0,0,0,0.06)]">
        <div className="mb-4 flex items-center gap-2 text-[20px] font-bold text-brown-darker">
          <span>|</span>
          <span>내가 뽑은 구절</span>
        </div>
  
        <p className="whitespace-pre-line text-[15px] text-brown-darker">
          {sentence || '작성된 구절이 없습니다.'}
        </p>
      </section>
    );
  };
  
  export default LibraryDetailPhrase;
  