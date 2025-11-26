// src/pages/PostBookPage/components/PostBookSubmitBar.tsx
const PostBookSubmitBar = () => {
    const handleSubmit = () => {
      // TODO: 실제 저장 로직 연결
    };
  
    return (
      <div className="mt-[70px] flex w-full justify-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="
            px-[144px] py-[38px]
            rounded-full
            bg-brown-normal
            text-[36px] font-normal text-white
          "
        >
          저장하기
        </button>
      </div>
    );
  };
  
  export default PostBookSubmitBar;
  