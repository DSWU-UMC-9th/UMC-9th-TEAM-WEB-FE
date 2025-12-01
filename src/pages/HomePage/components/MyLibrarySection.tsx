import type { MyLibrarySectionProps } from '@/types/HomePage/home';
import { useNavigate } from 'react-router-dom';
import MyLibraryBookCard from '@/pages/HomePage/components/MyLibraryBookCard';
import PlusIcon from '@/assets/Plus.svg?react';

const MyLibrarySection = ({ isLoggedIn, loading, error, books, onKeywordClick }: MyLibrarySectionProps) => {
  const navigate = useNavigate();

  const bookListJustifyClass = books.length > 0 && books.length <= 5 ? 'justify-center' : 'justify-start';

  return (
    <section>
      <h2 className="ml-[67px] mb-[39px] text-[39px] font-bold text-brown-dark"> | 나의 서재 </h2>

      <div className="flex h-[503px] w-full items-center justify-center bg-white-normal-active py-5]">
        {!isLoggedIn && <p className="text-[32px] text-brown-dark"> 로그인이 필요한 서비스입니다. </p>}

        {isLoggedIn && loading && <p className="text-[32px] text-brown-sub">불러오는 중입니다...</p>}

        {isLoggedIn && !loading && error && <p className="text-[32px] text-error">{error}</p>}

        {isLoggedIn && !loading && !error && books.length === 0 && (
          <button type="button" className="flex flex-col items-center justify-center" onClick={() => navigate('/post')}>
            <div className="mb-[18px] p-4 flex h-[81px] w-[81px] items-center justify-center rounded-full bg-brown-light">
              <PlusIcon className="h-[32.667px] w-[32.667px]" />
            </div>
            <span className="text-[32px] font-medium text-brown-dark">도서를 추가해주세요!</span>
          </button>
        )}

        {isLoggedIn && !loading && !error && books.length > 0 && (
          <div className="flex w-full flex-col justify-start gap-4">
            <div className={`no-scrollbar flex w-full gap-4 overflow-x-auto pb-2 ${bookListJustifyClass}`}>
              {books.map((book) => (
                <MyLibraryBookCard key={book.id} book={book} onKeywordClick={onKeywordClick} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyLibrarySection;
