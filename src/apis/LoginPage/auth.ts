import type { LoginPayload, User } from '@/types/LoginPage/auth';
// import axios from 'axios';
// 위 axios import는 나중에 실제 서버 연동 시 주석을 해제하고 사용.

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const authApi = {
  async login(payload: LoginPayload): Promise<User> {
    await delay(500);

    // TODO: 나중에 여기를 진짜 axios.post로 교체
    if (!payload.email || !payload.password) {
      throw new Error('이메일과 비밀번호를 입력해주세요.');
    }

    if (payload.email !== 'asdf@gmail.com' || payload.password !== 'asdfasdf') {
      throw new Error('현재는 테스트 계정으로만 로그인할 수 있습니다.');
    }

    // 나중에 실제 서버 연동 시에는 아래처럼 교체할 예정.
    /*
    const { data } = await axios.post<User>('/api/auth/login', payload);
    return data;
    */

    // 테스트용으로는 고정된 유저 정보를 반환.
    return {
      id: 1,
      email: payload.email,
      nickname: '테스트닉네임',
    };
  },
};
