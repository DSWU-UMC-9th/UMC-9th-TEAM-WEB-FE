// src/pages/PostBookPage/components/PostBookHeader.tsx
import { useNavigate } from 'react-router-dom';

const PostBookHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="text-[24px] text-brown-dark"
        >
          &lt;
        </button>
        <div className="flex-1 text-center">
          <h2 className="text-[24px] font-semibold text-brown-dark">
            나의 서재
          </h2>
        </div>
        {/* 오른쪽 빈 영역(정렬용) */}
        <div className="w-[24px]" />
      </div>
      <div className="mt-1 h-[2px] w-[110px] bg-brown-dark" />
    </header>
  );
};

export default PostBookHeader;
