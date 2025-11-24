// src/pages/LibraryPage/components/LibraryHeader.tsx

const LibraryHeader = () => {
    return (
      <header className="mb-10 flex flex-col items-center justify-center">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-brown-dark">
          나의 서재
        </h2>
        {/* 타이틀 아래 작은 라인 */}
        <div className="mt-3 h-[2px] w-[140px] bg-brown-dark" />
      </header>
    );
  };
  
  export default LibraryHeader;
  