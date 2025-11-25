import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import LogoIcon from '@assets/Logo.svg?react';

const LINKS = [
  { id: 1, label: '홈', to: '/' },
  { id: 2, label: '나의 서재', to: '/library' },
  { id: 3, label: '토론 광장', to: '/discussion' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // 로그인, 회원가입 페이지에서는 네비게이션 바 렌더링 X
  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <nav
      className={`bg-white-normal shadow-[0_1px_20px_0_rgba(0,0,0,0.15)] flex items-center gap-[min(50px,2vw)] py-[25px] px-[60px] ${isLoggedIn ? 'justify-between' : 'justify-start'}`}>
      <LogoIcon className="max-w-[325px] object-contain cursor-pointer" onClick={() => navigate('/')} />

      <div className="rounded-[95px] max-w-[1051px] px-[99px] w-full h-[75px] bg-white-normal-hover flex items-center justify-between text-brown-darker text-[31px] font-medium">
        {LINKS.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) => `
            ${isActive ? 'bg-white-light shadow-[0_0_10px_0_rgba(0,0,0,0.15)] rounded-[95px]' : ''} w-[187px] h-[59px] text-center flex justify-center items-center trnasition duration-500 ease
            `}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="text-brown-normal text-[24px] font-normal text-center">
        {isLoggedIn && (
          <div
            className="cursor-pointer"
            onClick={() => {
              if (window.confirm('로그아웃하시겠습니까?')) {
                handleLogout();
              }
            }}>
            {user?.nickname}님 반갑습니다!
          </div>
        )}
        {!isLoggedIn && (
          <div onClick={() => navigate('/login')} className="cursor-pointer">
            로그인
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
