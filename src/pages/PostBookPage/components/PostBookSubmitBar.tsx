// src/pages/PostBookPage/components/PostBookSubmitBar.tsx
const PostBookSubmitBar = () => {
    const handleSubmit = () => {
      // TODO: 실제 저장 로직 연결
    };
  
    return (
      <div className="mt-4 flex w-full justify-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="
            h-[52px] w-[180px]
            rounded-full
            bg-brown-normal
            text-[16px] font-semibold text-white
          "
        >
          저장하기
        </button>
      </div>
    );
  };
  
  export default PostBookSubmitBar;
  