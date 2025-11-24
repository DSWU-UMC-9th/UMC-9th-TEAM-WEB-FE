// src/pages/LibraryPage/components/LibraryAddCard.tsx
import PlusIcon from '@/assets/Plus.svg?react';

interface LibraryAddCardProps {
  onClick?: () => void;
  imageUrl?: string | null;
}

const LibraryAddCard = ({ onClick, imageUrl }: LibraryAddCardProps) => {
  const hasImage = !!imageUrl;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full
        max-w-[260px]
        aspect-[3/4.4]
        grid place-items-center
        rounded-[18px]
        bg-white-normal-hover
        shadow-[0_0_40px_rgba(0,0,0,0.18)]
        overflow-hidden
      "
    >
      {hasImage ? (
        <img
          src={imageUrl as string}
          alt="선택한 책 표지"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className="
            flex items-center justify-center
            bg-white
            rounded-full
            w-[25%]
            aspect-square
            shadow-[0_0_12px_rgba(0,0,0,0.12)]
          "
        >
          <PlusIcon
            className="
              text-brown-dark
              w-[40%]
              h-[40%]
            "
          />
        </div>
      )}
    </button>
  );
};

export default LibraryAddCard;
