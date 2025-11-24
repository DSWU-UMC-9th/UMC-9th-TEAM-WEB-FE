/**
 * 기본 정보를 포함한 도서 엔티티를 나타냅니다.
 *
 * @interface Book
 * @property {number} id - 도서의 고유 식별자
 * @property {string} title - 도서의 제목
 * @property {string} coverImageUrl - 도서 표지 이미지의 URL
 * @property {string[]} keywords - 분류 또는 검색 목적으로 도서와 연관된 키워드 배열
 */

export interface Book {
  id: number;
  title: string;
  coverImageUrl: string;
  keywords: string[];
}

/**
 * 인기 있거나 트렌딩 중인 도서 인용구를 나타냅니다.
 *
 * @interface HotQuote
 * @property {number} id - 인용구의 고유 식별자
 * @property {string} content - 인용구의 텍스트 내용
 * @property {string} bookTitle - 인용구가 출처한 도서의 제목
 */

export interface HotQuote {
  id: number;
  content: string;
  bookTitle: string;
}

/**
 * 홈페이지에 표시되는 인기 키워드를 나타냅니다.
 *
 * @interface PopularKeyword
 * @property {number} id - 키워드의 고유 식별자
 * @property {string} name - 키워드의 표시 이름
 */

export interface PopularKeyword {
  id: number;
  name: string;
}

/**
 * 홈페이지의 상태 관리 인터페이스를 나타냅니다. - useHomeState 컴포넌트에 전달되는 속성들
 *
 * @interface HomeState
 *
 * @property {Book[]} books - 홈페이지에 표시될 도서 항목 배열
 * @property {HotQuote[] | null} hotQuote - 오늘의 추천 인용구, 없을 경우 null
 * @property {PopularKeyword[]} keywords - 트렌딩 또는 인기 검색 키워드 목록
 * @property {boolean} loading - 데이터를 가져오는 중인지 여부를 나타냄
 * @property {string | null} error - 데이터 가져오기 실패 시 오류 메시지, 그렇지 않으면 null
 * @property {string | null} selectedKeyword - 현재 선택된 키워드 필터, 선택되지 않았으면 null
 * @property {(userId?: number) => Promise<void>} fetchHomeData - 홈페이지 데이터를 가져오는 비동기 함수, 사용자 ID로 선택적 필터링 가능
 * @property {(keyword: string | null) => void} setSelectedKeyword - 선택된 키워드 필터를 업데이트하는 함수
 */

export interface HomeState {
  books: Book[];
  hotQuote: HotQuote[] | null;
  keywords: PopularKeyword[];
  loading: boolean;
  error: string | null;
  selectedKeyword: string | null;
  fetchHomeData: (userId?: number) => Promise<void>;
  setSelectedKeyword: (keyword: string | null) => void;
}

/**
 * HotQuoteSection 컴포넌트의 Props를 나타냅니다.
 *
 * @interface HotQuoteSectionProps
 * @property {HotQuote | null} hotQuote - 표시할 인기 인용구 데이터, 인용구가 없을 경우 null
 * @property {() => void} onClick - 섹션 클릭 시 실행될 콜백 함수
 */

export interface HotQuoteSectionProps {
  hotQuote: HotQuote | null;
  onClick: () => void;
}

/**
 * KeywordDiscussionSection 컴포넌트의 Props를 나타냅니다.
 *
 * @interface KeywordDiscussionSectionProps
 * @property {PopularKeyword[]} keywords - 섹션에 표시될 인기 키워드 배열
 * @property {(keyword: string) => void} onKeywordClick - 키워드 클릭 시 실행될 콜백 함수, 클릭된 키워드를 문자열 매개변수로 받음
 */

export interface KeywordDiscussionSectionProps {
  keywords: PopularKeyword[];
  onKeywordClick: (keyword: string) => void;
}

/**
 * MyLibraryBookCard 컴포넌트의 Props를 나타냅니다.
 *
 * @interface MyLibraryBookCardProps
 * @property {Book} book - 카드에 표시될 도서 정보를 포함하는 도서 객체
 * @property {function} onKeywordClick - 키워드 클릭 시 실행될 콜백 함수, 클릭된 키워드를 문자열 매개변수로 받음
 */

export interface MyLibraryBookCardProps {
  book: Book;
  onKeywordClick: (keyword: string) => void;
}

/**
 * MyLibrarySection 컴포넌트의 Props를 나타냅니다.
 *
 * @interface MyLibrarySectionProps
 * @property {boolean} isLoggedIn - 사용자가 현재 로그인되어 있는지 여부를 나타냄
 * @property {boolean} loading - 컴포넌트가 로딩 중인지 여부를 나타냄
 * @property {string | null} error - 오류 발생 시 오류 메시지, 그렇지 않으면 null
 * @property {Book[]} books - 라이브러리 섹션에 표시될 도서 배열
 * @property {(keyword: string) => void} onKeywordClick - 키워드 클릭 시 실행될 콜백 함수, 클릭된 키워드를 문자열 매개변수로 받음
 */

export interface MyLibrarySectionProps {
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  books: Book[];
  onKeywordClick: (keyword: string) => void;
}
