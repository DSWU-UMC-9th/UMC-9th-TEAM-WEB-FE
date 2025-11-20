import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/pages/LoginPage/components/AuthLayout';
import { AuthField } from '@/pages/LoginPage/components/AuthField';
import { useAuthStore } from '@/hooks/stores/useAuthStore';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await login({ email, password });

    if (ok) {
      navigate('/');
    }
  };

  return (
    <AuthLayout title="로그인">
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-end">
        <AuthField
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="my-[11px] mr-[70px] text-[20px] text-error">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 mr-[70px] w-[566px] h-[70px] rounded-[20px] bg-brown-normal py-[23px] text-[20px] text-brown-light">
          {loading ? '로그인 중...' : '로그인'}
        </button>
      </form>
      <div className="gap-[27px] flex mt-[34px] justify-center text-[20px] text-brown-darker">
        <span>비밀번호 찾기</span>
        <span>|</span>
        <span onClick={() => navigate('/signup')}>회원가입</span>
      </div>
    </AuthLayout>
  );
}
