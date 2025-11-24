// src/pages/LibraryDetailPage/components/LibraryDetailCover.tsx

interface Props {
    imageUrl: string | null;
    title: string;
  }
  
  const LibraryDetailCover = ({ imageUrl, title }: Props) => {
    return (
      <section className="mt-4 mb-8 flex w-full justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-[300px] w-[210px] rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          />
        ) : (
          <div className="flex h-[250px] w-[180px] items-center justify-center rounded-lg bg-brown-light text-brown-darker shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            표지 이미지 없음
          </div>
        )}
      </section>
    );
  };
  
  export default LibraryDetailCover;
  