/**
 * 인증 상태 및 작업을 관리하는 Zustand입니다.
 *
 * @remarks
 * 이 스토어는 로그인, 로그아웃 및 현재 사용자 정보 추적을 포함한
 * 사용자 인증 상태를 처리합니다.
 *
 * @example
 * ```typescript
 * const { user, isLoggedIn, login, logout } = useAuthStore();
 *
 * // 로그인
 * const success = await login({ email: 'user@example.com', password: 'password' });
 *
 * // 로그아웃
 * logout();
 * ```
 *
 * @property {User | null} user - 현재 인증된 사용자 객체, 로그인하지 않은 경우 null
 * @property {boolean} isLoggedIn - 사용자가 현재 로그인되어 있는지 나타내는 플래그
 * @property {boolean} loading - 인증 작업이 진행 중인지 나타내는 플래그
 * @property {string | null} error - 마지막 인증 실패 시 에러 메시지, 에러가 없으면 null
 *
 * @method login - 제공된 자격 증명으로 사용자를 인증합니다
 * @param {LoginPayload} payload - 로그인 자격 증명 (일반적으로 이메일과 비밀번호)
 * @returns {Promise<boolean>} 로그인 성공 시 true, 실패 시 false를 반환하는 Promise
 *
 * @method logout - 현재 사용자를 로그아웃하고 인증 상태를 초기화합니다
 * @returns {void}
 */

import { create } from 'zustand';
import type { User, LoginPayload, AuthState } from '@/types/LoginPage/auth';
import { authApi } from '@/apis/LoginPage/auth';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,

  async login(payload: LoginPayload): Promise<boolean> {
    try {
      set({ loading: true, error: null });
      const user: User = await authApi.login(payload);
      set({ user, isLoggedIn: true, loading: false });
      return true;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : '로그인에 실패했습니다.';
      set({ error: message, loading: false });
      return false;
    }
  },

  logout() {
    set({ user: null, isLoggedIn: false });
  },
}));
