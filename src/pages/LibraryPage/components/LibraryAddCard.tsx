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
        w-[323px]
        h-[468px]
        aspect-[3/4.4]
        grid place-items-center
        bg-white-normal-hover
        shadow-[0_4px_30px_5px_rgba(0,0,0,0.25)]
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
            bg-brown-light
            rounded-full
            w-[81px]
            aspect-square
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
