import { useState } from 'react';
import type { CommentInputProps } from '@/types/DiscussionDetailPage/bookDetail';

const CommentInput = ({ onSubmit }: CommentInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async () => {
    const trimmed = value.trim();
    if (!trimmed) return;

    if (onSubmit) {
      await onSubmit(trimmed);
    }
    setValue('');
  };

  return (
    <div className="mt-[21px] w-full rounded-[20px] border-2 border-brown-darker bg-white-light px-9 py-[26px] flex items-end gap-4">
      <textarea
        rows={4}
        placeholder="댓글을 입력해 주세요."
        className=" no-scrollbar flex-1 resize-none bg-transparent text-[22px] leading-relaxed text-brown-darker outline-none"
        value={value}
        onChange={handleChange}
      />
      <button
        type="button"
        className="shrink-0 rounded-full bg-brown-normal px-8 py-3.5 text-[20px] font-bold text-white-light"
        disabled={!value.trim()}
        onClick={handleSubmit}>
        등록
      </button>
    </div>
  );
};

export default CommentInput;
