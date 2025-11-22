import type { ReactNode } from 'react';
import type { InputHTMLAttributes } from 'react';

/**
 * 인증 시스템의 사용자를 나타냅니다.
 *
 * @interface User
 * @property {number} id - 사용자의 고유 식별자
 * @property {string} email - 사용자의 이메일 주소
 * @property {string} nickname - 사용자의 표시 이름 또는 닉네임
 */

export interface User {
  id: number;
  email: string;
  nickname: string;
}

/**
 * 로그인 요청 데이터
 *
 * @interface LoginPayload
 * @property {string} email - 이메일 주소
 * @property {string} password - 비밀번호
 */

export interface LoginPayload {
  email: string;
  password: string;
}

/**
 * 로그인 시스템의 인증 상태 및 액션을 나타냅니다.
 *
 * @interface AuthState
 *
 * @property {User | null} user - 현재 인증된 사용자 객체, 로그인되지 않은 경우 null
 * @property {boolean} isLoggedIn - 사용자가 현재 로그인되어 있는지 여부
 * @property {boolean} loading - 인증 작업이 진행 중인지 여부
 * @property {string | null} error - 인증 에러가 발생한 경우 에러 메시지, 없으면 null
 * @property {(payload: LoginPayload) => Promise<boolean>} login - 로그인 함수
 * @property {() => void} logout - 로그아웃 함수
 */

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  login: (payload: LoginPayload) => Promise<boolean>;
  logout: () => void;
}

/**
 * 인증 레이아웃 컴포넌트의 Props - AuthLayout 컴포넌트에 전달되는 속성들
 *
 * @interface AuthLayoutProps
 * @property {string} title - 인증 레이아웃에 표시될 제목
 * @property {ReactNode} children - 인증 레이아웃 내부에 렌더링될 자식 컴포넌트
 * @property {'login' | 'signup'} [variant] - 인증 타입을 지정하는 선택적 변형 (로그인 또는 회원가입)
 */

export interface AuthLayoutProps {
  title: string;
  children: ReactNode;
  variant?: 'login' | 'signup';
}

/**
 * 인증 폼 필드 컴포넌트의 Props - AuthField 컴포넌트에 전달되는 속성들
 *
 * @property {string} label - 입력 필드에 표시될 레이블 텍스트
 * @property {string} [errorText] - 유효성 검사 실패 시 표시될 선택적 에러 메시지
 */

export interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
}
