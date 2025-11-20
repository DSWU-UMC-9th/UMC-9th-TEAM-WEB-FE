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
        {!error && checked && <p className="mt-[13px] text-[20px]">사용 가능한 닉네임입니다.</p>}
      </div>
    </div>
  );
};

export default NicknameField;
