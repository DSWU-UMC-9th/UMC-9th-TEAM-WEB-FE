/**
 * AuthField 컴포넌트는 인증 폼을 위한 레이블이 있는 입력 필드와 에러 처리를 렌더링합니다.
 *
 * @param props - 컴포넌트 props
 * @param props.label - 입력 필드 옆에 표시되는 레이블 텍스트
 * @param props.errorText - 입력 필드 아래에 표시할 선택적 에러 메시지. 제공되면 입력 필드의 테두리 색상이 에러 색상으로 변경됩니다
 * @param props.inputProps - input 요소에 전달되는 추가 HTML input 속성
 *
 * @returns 레이블, 스타일이 적용된 입력 필드, 조건부 에러 메시지가 있는 폼 필드
 *
 * @example
 * ```tsx
 * <AuthField
 *   label="이메일"
 *   errorText="올바르지 않은 이메일 형식입니다"
 *   type="email"
 *   placeholder="이메일을 입력하세요"
 * />
 * ```
 */

import type { AuthFieldProps } from '@/types/LoginPage/auth';

export function AuthField({ label, errorText, ...inputProps }: AuthFieldProps) {
  const hasError = Boolean(errorText);

  return (
    <div className="mb-4 flex gap-7 items-center mr-[70px]">
      <label className="text-[24px] text-brown-darker text-end">{label}</label>
      <div>
        <input
          {...inputProps}
          className={`w-[566px] h-[70px] rounded-[20px] border px-[27px] py-[23px] text-[20px] outline-none bg-white-light placeholder:text-brown-light-active ${hasError ? 'border-error' : 'border-brown-darker'}`}
        />
        {hasError && <p className="mt-[13px] text-[20px] text-error text-end">{errorText}</p>}
      </div>
    </div>
  );
}
