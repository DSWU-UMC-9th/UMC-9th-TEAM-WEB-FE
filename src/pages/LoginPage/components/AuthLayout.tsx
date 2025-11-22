/**
 * AuthLayout 컴포넌트는 인증 페이지를 위한 일관된 레이아웃 구조를 제공합니다.
 *
 * @param {AuthLayoutProps} props - 컴포넌트 props
 * @param {string} props.title - 인증 페이지에 표시할 제목 텍스트
 * @param {React.ReactNode} props.children - 레이아웃 내에 렌더링할 자식 컴포넌트
 *
 * @returns {JSX.Element} 로고, 제목, 자식 컨텐츠가 포함된 중앙 정렬 인증 레이아웃
 *
 * @example
 * ```tsx
 * <AuthLayout title="로그인">
 *   <LoginForm />
 * </AuthLayout>
 * ```
 */

import LogoIcon from '@/assets/Logo.svg?react';
import type { AuthLayoutProps } from '@/types/LoginPage/auth';

export function AuthLayout({ title, children, variant = 'login' }: AuthLayoutProps) {
  const titleMarginClass = variant === 'signup' ? 'mb-[69px]' : 'mb-28';

  return (
    <div className="min-h-screen bg-white-normal flex flex-col items-center">
      <div className="mt-[136px] mb-[71px] text-3xl font-bold tracking-[0.15em]">
        <LogoIcon className="h-[97px] w-[421px]" />
      </div>

      <h1 className={`${titleMarginClass} text-[39px] font-bold text-center`}>{title}</h1>

      <section className="w-full flex flex-col items-center">{children}</section>
    </div>
  );
}
