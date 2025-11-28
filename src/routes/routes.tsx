import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import HomeLayout from '@/layouts/HomeLayout';
import DiscussionDetailPage from '@/pages/DiscussionDetailPage/DiscussionDetailPage';
import DiscussionPage from '@/pages/DiscussionPage/DiscussionPage';
import HomePage from '@/pages/HomePage/HomePage';
import LibraryDetailPage from '@/pages/LibraryDetailPage/LibraryDetailPage';
import LibraryPage from '@/pages/LibraryPage/LibraryPage';
import LibraryEditPage from '@/pages/LibraryDetailPage/components/LibraryEditPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import PostBookPage from '@/pages/PostBookPage/PostBookPage';
import SignupPage from '@/pages/SignupPage/SignupPage';
import ProtectedLayout from '@/layouts/ProtectedLayout';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
];

const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      { path: 'library', element: <LibraryPage /> },
      { path: 'library/:id', element: <LibraryDetailPage /> },
      { path: '/library/:id/edit', element: <LibraryEditPage /> },
      { path: 'post', element: <PostBookPage /> },
      { path: 'discussion', element: <DiscussionPage /> },
      { path: 'discussion/:id', element: <DiscussionDetailPage /> },
    ],
  },
];

export const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);
