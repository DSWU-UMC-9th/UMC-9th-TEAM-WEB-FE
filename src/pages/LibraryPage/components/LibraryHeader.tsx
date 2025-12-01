// src/pages/LibraryPage/components/LibraryHeader.tsx

const LibraryHeader = () => {
    return (
      <header className="mb-[138px] flex flex-col items-center justify-center">
        <h2 className="text-[48px] font-bold text-brown-dark">
          나의 서재
        </h2>
        {/* 타이틀 아래 작은 라인 */}
        <div className="mt-[4px] h-[3px] w-[204px] bg-brown-dark" />
      </header>
    );
  };
  
  export default LibraryHeader;
  