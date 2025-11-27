import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, LoginPayload, AuthState } from '@/types/LoginPage/auth';
import { authApi } from '@/apis/LoginPage/auth';
import { LOCAL_STORAGE_KEY } from '@/constants/key';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
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
        localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
        localStorage.removeItem(LOCAL_STORAGE_KEY.nickname);
        set({ user: null, isLoggedIn: false, loading: false, error: null });
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
);
