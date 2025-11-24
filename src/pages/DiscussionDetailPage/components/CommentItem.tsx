import { useState } from 'react';

export type PassageComment = {
  id: number;
  nickname: string;
  createdAt: string;
  content: string;
};

const MAX_COMMENT_PREVIEW_LENGTH = 68;

type CommentItemProps = {
  comment: PassageComment;
};

const CommentItem = ({ comment }: CommentItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = comment.content.length > MAX_COMMENT_PREVIEW_LENGTH;
  const displayText =
    !expanded && isLong ? `${comment.content.slice(0, MAX_COMMENT_PREVIEW_LENGTH)}...` : comment.content;

  return (
    <div className="flex flex-col rounded-[20px] border-2 border-brown-darker bg-white-light pl-[49px] pr-9 pt-[33px] pb-9 text-brown-darker">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="text-[24px] font-medium">{comment.nickname}</span>
          <span className="ml-4 whitespace-nowrap text-[18px] text-brown-medium">{comment.createdAt}</span>
        </div>
        <p className="mt-3 text-[24px] font-normal leading-relaxed">{displayText}</p>
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="text-[20px] font-normal text-brown-normal">
          <p className="flex justify-end">{expanded ? '접기' : '더보기'}</p>
        </button>
      )}
    </div>
  );
};

export default CommentItem;
