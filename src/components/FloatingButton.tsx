import ArrowIcon from '@assets/icon-arrow-up.svg?react';

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="size-[92px] bg-brown-dark fixed right-[52px] bottom-[4px] rounded-full flex items-center justify-center cursor-pointer">
      <ArrowIcon />
    </div>
  );
};

export default FloatingButton;
