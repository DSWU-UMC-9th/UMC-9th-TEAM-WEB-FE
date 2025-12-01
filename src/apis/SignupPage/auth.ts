import type { User } from '@/types/LoginPage/auth';
import type { RegisterPayload } from '@/types/SignupPage/auth';
import { axiosInstance } from '@/apis/axios';

export const authApi = {
  async register(payload: RegisterPayload): Promise<User> {
    const { data } = await axiosInstance.post('/api/v1/users/signup', {
      email: payload.email,
      password: payload.password,
      nickname: payload.nickname,
    });
    return {
      id: data.success.id,
      email: data.success.email,
      nickname: data.success.nickname,
    };
  },

  async checkNickname(nickname: string): Promise<boolean> {
    const { data } = await axiosInstance.post('/api/v1/users/nickname/check', {
      nickname,
    });
    return data.success.data.isAvailable;
  },
};
