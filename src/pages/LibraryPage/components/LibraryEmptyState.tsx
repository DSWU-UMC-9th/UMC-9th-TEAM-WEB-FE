// src/pages/LibraryPage/components/LibraryEmptyState.tsx
import PlusIcon from '@/assets/Plus.svg?react';

interface LibraryEmptyStateProps {
  onClick?: () => void;
}

const LibraryEmptyState = ({ onClick }: LibraryEmptyStateProps) => {
  return (
    <div className="flex h-[503px] flex-col items-center justify-center text-brown-sub">
      <button
        type="button"
        onClick={onClick}
        className="flex flex-col items-center"
      >
        <div className="mb-[18px] flex h-[81px] w-[81px] items-center justify-center rounded-full bg-brown-light p-4">
          <PlusIcon className="h-[32.667px] w-[32.667px]" />
        </div>
        <span className="text-[32px] font-medium text-brown-dark">
          도서를 추가해주세요
        </span>
      </button>
    </div>
  );
};

export default LibraryEmptyState;
