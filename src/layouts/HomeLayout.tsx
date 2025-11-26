import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/utils/ScrollToTop';
import FloatingButton from '@/components/FloatingButton';
import { useHomeStore } from '@/hooks/stores/useHomeStore';

const HomeLayout = () => {
  const location = useLocation();
  const { setSelectedKeyword } = useHomeStore();

  useEffect(() => {
    const isDiscussionPage = location.pathname.startsWith('/discussion');

    if (!isDiscussionPage) {
      setSelectedKeyword(null);
    }
  }, [location.pathname, setSelectedKeyword]);

  return (
    <div className="flex flex-col h-dvh">
      <ScrollToTop />
      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>

      <FloatingButton />
    </div>
  );
};

export default HomeLayout;
