/**
 * 회원가입 요청 데이터
 *
 * @interface RegisterPayload
 * @property {string} email - 이메일 주소
 * @property {string} password - 비밀번호
 * @property {string} passwordConfirm - 비밀번호 확인
 * @property {string} nickname - 닉네임
 */

export interface RegisterPayload {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

/**
 * 인증 에러 정보
 *
 * @interface AuthError
 * @property {string} message - 에러 메시지
 * @property {'email' | 'password' | 'passwordConfirm' | 'nickname'} [field] - 에러가 발생한 필드 (선택적)
 */

export interface AuthError {
  message: string;
  field?: 'email' | 'password' | 'passwordConfirm' | 'nickname';
}

/**
 * 회원가입 페이지의 닉네임 입력 필드 컴포넌트 Props
 *
 * @interface NicknameFieldProps
 * @property {string} value - 닉네임 입력 필드의 현재 값
 * @property {string} [error] - 유효성 검사 실패 시 표시할 에러 메시지 (선택적)
 * @property {boolean} checked - 닉네임이 검증/확인되었는지 여부
 * @property {boolean} loading - 닉네임 확인 작업이 진행 중인지 여부
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - 입력 값이 변경될 때 호출되는 콜백 함수
 * @property {() => void} onCheck - 사용자가 닉네임 검증을 시작할 때 호출되는 콜백 함수
 */

export interface NicknameFieldProps {
  value: string;
  error?: string;
  checked: boolean;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: () => void;
}
