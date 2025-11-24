import type { User } from '@/types/LoginPage/auth';
import type { RegisterPayload } from '@/types/SignupPage/auth';
// import axios from 'axios';
// 위 axios import는 나중에 실제 서버 연동 시 주석을 해제하고 사용합니다.

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const authApi = {
  async register(payload: RegisterPayload): Promise<User> {
    await delay(700);

    if (payload.password !== payload.passwordConfirm) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    // 이메일 형식/닉네임 중복 체크 같은 건 여기서 임시로만 처리 가능
    const user: User = {
      id: 2,
      email: payload.email,
      nickname: payload.nickname,
    };

    // 나중에 실제 서버 연동 시에는 아래처럼 교체할 예정.
    /*
    const { data } = await axios.post<User>('/api/auth/register', payload);
    return data;
    */

    return user;
  },

  async checkNickname(nickname: string): Promise<boolean> {
    await delay(400);
    // true면 사용 가능, false면 중복
    return nickname !== '중복닉네임';
  },
};
