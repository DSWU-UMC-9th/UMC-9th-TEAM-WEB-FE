import { useEffect, useRef } from 'react';
import type { Passage } from '../DiscussionDetailPage';
import CommentItem, { type PassageComment } from './CommentItem';
import CommentInput from './CommentInput';

type PassageCardProps = {
  passage: Passage;
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const PassageCard = ({ passage, isActive, title, onClick }: PassageCardProps) => {
  const articleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !articleRef.current) return;

    const element = articleRef.current;
    const rect = element.getBoundingClientRect();

    const top = window.scrollY + rect.top - 133;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }, [isActive]);

  return (
    <>
      <article
        ref={articleRef}
        onClick={onClick}
        className="cursor-pointer rounded-[20px] bg-brown-normal pt-[34px] px-9 text-[24px] font-normal leading-relaxed text-brown-light">
        <p>{passage.text}</p>

        <p className="mt-4 mb-[25px] text-right text-[20px] font-bold text-white-light">- ⟪{title}⟫ {passage.reference}</p>
      </article>

      {isActive && <CommentInput />}

      {isActive && passage.content && passage.content.length > 0 && (
        <div className="my-[21px] flex flex-col gap-[55px]">
          {passage.content.map((comment) => (
            <CommentItem key={comment.id} comment={comment as PassageComment} />
          ))}
        </div>
      )}
    </>
  );
};

export default PassageCard;
