import ArrowIcon from '@assets/icon-arrow-up.svg?react';
import { useLocation } from 'react-router-dom';

const FloatingButton = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {pathname !== '/login' && pathname !== '/signup' && (
        <div
          onClick={scrollToTop}
          className="size-[92px] bg-brown-dark fixed right-[52px] bottom-1 rounded-full flex items-center justify-center cursor-pointer">
          <ArrowIcon />
        </div>
      )}
    </>
  );
};

export default FloatingButton;
