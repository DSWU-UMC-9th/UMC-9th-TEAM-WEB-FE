// src/pages/LibraryDetailPage/components/LibraryDetailPhrase.tsx

interface Props {
  sentence: string;
}

const LibraryDetailPhrase = ({ sentence }: Props) => {
  return (
    <section className="w-full rounded-[20px] border-2 border-brown-darker bg-white-light px-[67px] py-[63px]">
      <div className="mb-[36px] flex items-center gap-2 text-[36px] font-semibold text-brown-darker">
        <span>|</span>
        <span>내가 뽑은 구절</span>
      </div>

      <p className="whitespace-pre-line text-[24px] font-normal text-brown-darker">
        {sentence || '작성된 구절이 없습니다.'}
      </p>
    </section>
  );
};

export default LibraryDetailPhrase;
  