import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/utils/ScrollToTop';
import FloatingButton from '@/components/FloatingButton';
import { useAuthStore } from '@/hooks/stores/useAuthStore';

const ProtectedLayout = () => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <Navigate to={'/login'} replace />;
  }

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

export default ProtectedLayout;
