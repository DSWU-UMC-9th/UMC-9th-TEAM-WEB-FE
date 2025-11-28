// src/pages/PostBookPage/components/PostBookSubmitBar.tsx
interface PostBookSubmitBarProps {
  onSubmit: () => void;
  disabled?: boolean;
}

const PostBookSubmitBar = ({ onSubmit, disabled }: PostBookSubmitBarProps) => {
  return (
    <div className="mt-[70px] flex w-full justify-center">
      <button
        type="button"
        onClick={onSubmit}
        disabled={disabled}
        className="
          px-[144px] py-[38px]
          rounded-full
          bg-brown-normal
          text-[36px] font-normal text-white
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        저장하기
      </button>
    </div>
  );
};

export default PostBookSubmitBar;
