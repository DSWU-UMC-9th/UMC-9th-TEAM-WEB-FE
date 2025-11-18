import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-dvh">
      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
