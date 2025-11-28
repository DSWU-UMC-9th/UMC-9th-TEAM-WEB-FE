import { useEffect, useRef } from 'react';
import CommentItem from '@/pages/DiscussionDetailPage/components/CommentItem';
import CommentInput from '@/pages/DiscussionDetailPage/components/CommentInput';
import type { PassageCardProps } from '@/types/DiscussionDetailPage/bookDetail';
import type { SentenceCommentDTO } from '@/types/DiscussionDetailPage/comment';

interface PassageCardFixedProps extends PassageCardProps {
  comments: SentenceCommentDTO[];
  onSubmitComment: (value: string) => void;
  onEditComment: (commentId: number, newContent: string) => Promise<void>;
  onDeleteComment: (commentId: number) => Promise<void>;
}

const PassageCard = ({
  passage,
  isActive,
  title,
  onClick,
  comments,
  onSubmitComment,
  onEditComment,
  onDeleteComment,
}: PassageCardFixedProps) => {
  const articleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !articleRef.current) return;

    articleRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [isActive]);

  return (
    <>
      <article
        ref={articleRef}
        onClick={onClick}
        className="cursor-pointer rounded-[20px] bg-brown-normal pt-[34px] px-9 text-[24px] font-normal leading-relaxed text-brown-light">
        <p>{passage.text}</p>

        <p className="mt-4 mb-[25px] text-right text-[20px] font-bold text-white-light">
          - ⟪{title}⟫ {passage.reference}
        </p>
      </article>

      {isActive && comments.length > 0 && (
        <div className="my-[21px] flex flex-col gap-[55px]">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} onEdit={onEditComment} onDelete={onDeleteComment} />
          ))}
        </div>
      )}

      {isActive && <CommentInput onSubmit={onSubmitComment} />}
    </>
  );
};

export default PassageCard;
