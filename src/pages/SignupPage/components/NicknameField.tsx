/**
 * 닉네임 입력 필드 컴포넌트 - 중복 확인 기능 포함
 *
 * @param {NicknameFieldProps} props - 컴포넌트 props
 * @param {string} props.value - 현재 닉네임 입력값
 * @param {string} [props.error] - 유효성 검사 실패 시 표시할 에러 메시지
 * @param {boolean} props.checked - 닉네임 유효성 검사 성공 여부
 * @param {boolean} props.loading - 중복 확인 중 로딩 상태
 * @param {function} props.onChange - 입력값 변경 시 호출되는 콜백 함수
 * @param {function} props.onCheck - 중복 확인 버튼 클릭 시 호출되는 콜백 함수
 *
 * @returns {JSX.Element} 닉네임 입력 필드, 중복 확인 버튼, 유효성 검사 메시지를 포함한 폼 필드
 *
 * @example
 * ```tsx
 * <NicknameField
 *   value={nickname}
 *   error={errorMessage}
 *   checked={isChecked}
 *   loading={isLoading}
 *   onChange={(e) => setNickname(e.target.value)}
 *   onCheck={handleDuplicateCheck}
 * />
 * ```
 */

import type { NicknameFieldProps } from '@/types/SignupPage/auth';

const NicknameField = ({ value, error, checked, loading, onChange, onCheck }: NicknameFieldProps) => {
  return (
    <div className="mb-4 flex gap-7 items-center mr-[70px]">
      <label className="w-[83px] text-[24px] text-brown-darker text-end">닉네임</label>
      <div className="">
        <div className="flex gap-[18px]">
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={value}
            onChange={onChange}
            className={`w-[412px] h-[70px] rounded-[20px] border px-[27px] py-[23px] text-[20px] outline-none bg-white-light placeholder:text-brown-light-active ${error ? 'border-error' : 'border-brown-darker'}`}
          />
          <button
            type="button"
            onClick={onCheck}
            disabled={loading}
            className="h-[70px] w-[136px] rounded-[20px] bg-brown-darker text-[20px] text-brown-light disabled:opacity-60">
            {loading ? '확인 중' : '중복 확인'}
          </button>
        </div>
        {error && <p className="mt-[13px] text-[20px] text-error text-end">{error}</p>}
        {!error && checked && <p className="mt-[13px] text-[20px] text-end">사용 가능한 닉네임입니다.</p>}
      </div>
    </div>
  );
};

export default NicknameField;
