// src/pages/PostBookPage/components/PostBookSubmitBar.tsx
interface PostBookSubmitBarProps {
  onSubmit: () => void;
  disabled?: boolean;
}

const PostBookSubmitBar = ({ onSubmit, disabled }: PostBookSubmitBarProps) => {
  return (
    <div className="mt-4 flex w-full justify-center">
      <button
        type="button"
        onClick={onSubmit}
        disabled={disabled}
        className="
          h-[52px] w-[180px]
          rounded-full
          bg-brown-normal
          text-[16px] font-semibold text-white
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        저장하기
      </button>
    </div>
  );
};

export default PostBookSubmitBar;
