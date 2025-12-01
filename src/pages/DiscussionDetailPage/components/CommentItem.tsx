import { useState } from 'react';
import type { CommentItemProps } from '@/types/DiscussionDetailPage/bookDetail';

const MAX_COMMENT_PREVIEW_LENGTH = 100;

const CommentItem = ({ comment, onEdit, onDelete }: CommentItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(comment.content);

  const myNickname = localStorage.getItem('nickname');
  const isMine = myNickname === comment.nickname;

  const isLong = comment.content.length > MAX_COMMENT_PREVIEW_LENGTH;
  const displayText =
    !expanded && isLong ? `${comment.content.slice(0, MAX_COMMENT_PREVIEW_LENGTH)}...` : comment.content;

  const formattedDate = comment.createdAt.split('T')[0].replace(/-/g, '.');

  return (
    <div className="flex flex-col rounded-[20px] border-2 border-brown-darker bg-white-light pl-[49px] pr-9 pt-[33px] pb-9 text-brown-darker">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="text-[24px] font-medium">{comment.nickname}</span>
          <div className="flex items-center gap-4">
            <span className="ml-4 whitespace-nowrap text-[18px] text-brown-medium">{formattedDate}</span>
            {isMine && !editing && (
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="w-[30px] h-[34px] rounded-[20px] text-[16px] font-semibold text-brown-normal"
                  onClick={() => setEditing(true)}>
                  수정
                </button>
                <button
                  type="button"
                  className="w-[30px] h-[34px] rounded-[20px] text-[16px] font-semibold text-brown-normal"
                  onClick={() => onDelete(comment.id)}>
                  삭제
                </button>
              </div>
            )}
          </div>
        </div>
        {editing ? (
          <div className="mt-3 flex flex-col items-center gap-3">
            <textarea
              className="w-full resize-none outline-none py-2 text-[24px]"
              rows={4}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <div className="flex gap-4 justify-end w-full">
              <button
                type="button"
                className="rounded-full bg-brown-normal px-8 py-3.5 text-white text-[20px]"
                onClick={async () => {
                  await onEdit(comment.id, editValue);
                  setEditing(false);
                }}>
                저장
              </button>
              <button
                type="button"
                className="rounded-full bg-gray-300 px-8 py-3.5 text-[20px]"
                onClick={() => {
                  setEditing(false);
                  setEditValue(comment.content);
                }}>
                취소
              </button>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-[24px] font-normal leading-relaxed whitespace-pre-line wrap-break-word break-all">
            {displayText}
          </p>
        )}
      </div>

      {isLong && !editing && (
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
