import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '@/layouts/HomeLayout';
import DiscussionDetailPage from '@/pages/DiscussionDetailPage/DiscussionDetailPage';
import DiscussionPage from '@/pages/DiscussionPage/DiscussionPage';
import HomePage from '@/pages/HomePage/HomePage';
import LibraryDetailPage from '@/pages/LibraryDetailPage/LibraryDetailPage';
import LibraryPage from '@/pages/LibraryPage/LibraryPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import PostBookPage from '@/pages/PostBookPage/PostBookPage';
import SignupPage from '@/pages/SignupPage/SignupPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'library', element: <LibraryPage /> },
      { path: 'library/:id', element: <LibraryDetailPage /> },
      { path: 'post', element: <PostBookPage /> },
      { path: 'discussion', element: <DiscussionPage /> },
      { path: 'discussion/:id', element: <DiscussionDetailPage /> },
    ],
  },
]);
