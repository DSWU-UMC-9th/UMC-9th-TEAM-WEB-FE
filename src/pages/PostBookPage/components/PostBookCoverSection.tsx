// src/pages/PostBookPage/components/PostBookCoverSection.tsx
import { useRef, useState, useEffect, type ChangeEvent } from 'react';
import LibraryAddCard from '@/pages/LibraryPage/components/LibraryAddCard';

const PostBookCoverSection = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setThumbnailUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return objectUrl;
    });
  };

  useEffect(() => {
    return () => {
      if (thumbnailUrl) URL.revokeObjectURL(thumbnailUrl);
    };
  }, [thumbnailUrl]);

  return (
    <section className="mt-4 mb-8 flex w-full justify-center">
      <LibraryAddCard onClick={handleCardClick} imageUrl={thumbnailUrl} />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </section>
  );
};

export default PostBookCoverSection;
