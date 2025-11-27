import type { LoginPayload, User } from '@/types/LoginPage/auth';
import { axiosInstance } from '@/apis/axios';
import { LOCAL_STORAGE_KEY } from '@/constants/key';

export const authApi = {
  async login(payload: LoginPayload): Promise<User> {
    const { data } = await axiosInstance.post('/api/v1/users/login', {
      email: payload.email,
      password: payload.password,
    });

    const accessToken = data.success.token;
    const nickname = data.success.user.nickname;

    localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, JSON.stringify(accessToken));
    localStorage.setItem(LOCAL_STORAGE_KEY.nickname, nickname);

    return {
      id: data.success.user.id,
      email: data.success.user.email,
      nickname: data.success.user.nickname,
    };
  },
};
