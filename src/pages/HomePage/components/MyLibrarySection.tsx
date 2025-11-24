/**
 * MyLibrarySection 컴포넌트
 *
 * 홈 페이지에서 사용자의 서재 섹션을 표시합니다.
 * 인증 상태, 로딩 상태, 데이터 가용성에 따라 다른 상태를 보여줍니다.
 *
 * @param {MyLibrarySectionProps} props - 컴포넌트 props
 * @param {boolean} props.isLoggedIn - 사용자가 현재 로그인했는지 여부
 * @param {boolean} props.loading - 도서 데이터가 현재 로딩 중인지 여부
 * @param {string | null} props.error - 도서 데이터 로드 실패 시 에러 메시지
 * @param {Array} props.books - 서재에 표시할 도서 객체 배열
 * @param {Function} props.onKeywordClick - 키워드 클릭 시 호출되는 콜백 함수
 *
 * @returns {JSX.Element} 다양한 상태를 포함하는 사용자 서재 섹션:
 * - 비인증 사용자를 위한 로그인 필요 메시지
 * - 데이터 가져오는 동안 로딩 표시
 * - 데이터 가져오기 실패 시 에러 메시지
 * - 도서가 없을 때 "도서 추가" 버튼이 있는 빈 상태
 * - 도서가 있을 때 도서 카드 그리드
 */

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
