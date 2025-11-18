import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { id: 1, label: '메인 화면', to: '/' },
  { id: 2, label: '로그인', to: '/login' },
  { id: 3, label: '회원가입', to: '/signup' },
  { id: 4, label: '나의 서재 페이지', to: '/library' },
  { id: 5, label: '나의 서재 페이지 상세', to: '/library/1' },
  { id: 6, label: '도서 추가 페이지', to: '/post' },
  { id: 7, label: '토론 광장 페이지', to: '/discussion' },
  { id: 8, label: '토론 광장 상세 페이지', to: '/discussion/1' },
];

const Navbar = () => {
  const { pathname } = useLocation();

  // 로그인, 회원가입 페이지에서는 네비게이션 바 렌더링 X
  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <nav>
      <p className="text-white-dark">
        {'<'} 예시 네비게이션 바 입니다. 담당자가 추후 디자인 수정해주세요~~ {'>'}
      </p>
      {LINKS.map((link) => (
        <Link
          key={link.id}
          to={link.to}
          className="flex font-bold text-brown-normal hover:text-brown-normal-hover duration-300">
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
