import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/utils/ScrollToTop';
import FloatingButton from '@/components/FloatingButton';

const HomeLayout = () => {
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
