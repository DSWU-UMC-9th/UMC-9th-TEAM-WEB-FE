import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '@/apis/SignupPage/auth';
import type { RegisterPayload } from '@/types/SignupPage/auth';
import { AuthLayout } from '@/pages/LoginPage/components/AuthLayout';
import { AuthField } from '@/pages/LoginPage/components/AuthField';
import NicknameField from './components/NicknameField';

const initialForm: RegisterPayload = {
  email: '',
  password: '',
  passwordConfirm: '',
  nickname: '',
};

type RegisterErrors = Partial<Record<keyof RegisterPayload, string>>;

const validateRegisterForm = (form: RegisterPayload): RegisterErrors => {
  const nextErrors: RegisterErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email)) {
    nextErrors.email = '유효하지 않은 메일입니다.';
  }

  if (!form.password) {
    nextErrors.password = '비밀번호를 입력해주세요.';
  }

  if (form.password !== form.passwordConfirm) {
    nextErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }

  if (!form.nickname) {
    nextErrors.nickname = '닉네임을 입력해주세요.';
  }

  return nextErrors;
};

const SignupPage = () => {
  const [form, setForm] = useState<RegisterPayload>(initialForm);
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [checkingNickname, setCheckingNickname] = useState(false);
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (field: keyof RegisterPayload) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev: RegisterPayload) => ({
      ...prev,
      [field]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (field === 'nickname') {
      setNicknameChecked(false);
    }
  };

  const validate = () => {
    const nextErrors = validateRegisterForm(form);
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCheckNickname = async () => {
    if (!form.nickname) {
      setErrors((prev) => ({
        ...prev,
        nickname: '닉네임을 입력해주세요.',
      }));
      return;
    }

    try {
      setCheckingNickname(true);
      const available = await authApi.checkNickname(form.nickname);

      if (!available) {
        setErrors((prev) => ({
          ...prev,
          nickname: '이미 사용하고 있는 닉네임입니다.',
        }));
        setNicknameChecked(false);
      } else {
        setErrors((prev) => ({ ...prev, nickname: undefined }));
        setNicknameChecked(true);
      }
    } finally {
      setCheckingNickname(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    const isValid = validate();
    if (!isValid) return;

    try {
      setSubmitting(true);
      await authApi.register(form);

      navigate('/login');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : '회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.';
      setGeneralError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout title="회원가입" variant="signup">
      <form onSubmit={handleSubmit} className="flex flex-col items-end mr-[100px]">
        <AuthField
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={form.email}
          onChange={handleChange('email')}
          errorText={errors.email}
        />

        <AuthField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={form.password}
          onChange={handleChange('password')}
          errorText={errors.password}
        />

        <AuthField
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요."
          value={form.passwordConfirm}
          onChange={handleChange('passwordConfirm')}
          errorText={errors.passwordConfirm}
        />

        <NicknameField
          value={form.nickname}
          error={errors.nickname}
          checked={nicknameChecked}
          loading={checkingNickname}
          onChange={handleChange('nickname')}
          onCheck={handleCheckNickname}
        />

        {generalError && <p className="my-[11px] mr-[70px] text-[20px] text-error">{generalError}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="mr-[70px] h-[70px] w-[566px] rounded-[20px] bg-brown-normal text-[20px] py-[23px] text-brown-light">
          {submitting ? '가입 중...' : '가입하기'}
        </button>
      </form>

      {/* 하단 링크 */}
      <div className="mt-9 text-[20px] text-center">
        <span className="text-brown-light-active">이미 계정이 있으신가요?</span>
        <span className="text-brown-darker ml-[27px]" onClick={() => navigate('/login')}>
          로그인
        </span>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
