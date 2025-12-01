import { useEffect, useState } from 'react';
import { getSentenceComments } from '@/apis/DiscussionDetailPage/getSentenceComments';
import { postSentenceComment } from '@/apis/DiscussionDetailPage/postComment';
import { updateSentenceComment } from '@/apis/DiscussionDetailPage/updateSentenceComment';
import { deleteSentenceComment } from '@/apis/DiscussionDetailPage/deleteSentenceComment';
import type { SentenceCommentDTO } from '@/types/DiscussionDetailPage/comment';
import PassageCard from '@/pages/DiscussionDetailPage/components/PassageCard';
import type { PassageListProps } from '@/types/DiscussionDetailPage/bookDetail';

const PassageList = ({ passages, initialActiveId, title }: PassageListProps) => {
  const [activeId, setActiveId] = useState<number | null>(initialActiveId ?? null);
  const [comments, setComments] = useState<SentenceCommentDTO[]>([]);

  const toggleActive = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (activeId == null) return;

    const load = async () => {
      const data = await getSentenceComments(activeId);
      setComments(data);
    };

    load();
  }, [activeId]);

  const handleSubmitComment = async (sentenceId: number, content: string) => {
    try {
      if (activeId !== sentenceId) return;

      await postSentenceComment(sentenceId, content);

      const data = await getSentenceComments(sentenceId);
      setComments(data);
    } catch (e) {
      console.error('댓글 작성 실패:', e);
    }
  };

  const refreshComments = async () => {
    if (activeId == null) return;
    const data = await getSentenceComments(activeId);
    setComments(data);
  };

  const handleEditComment = async (commentId: number, newContent: string) => {
    await updateSentenceComment(commentId, newContent);

    if (activeId == null) return;

    const freshComments = await getSentenceComments(activeId);

    setComments(freshComments);
  };

  const handleDeleteComment = async (commentId: number) => {
    if (confirm('댓글을 삭제하시겠습니까?') === false) {
      return;
    } else {
      await deleteSentenceComment(commentId);
      await refreshComments();
    }
  };

  return (
    <section className="relative flex-1">
      <div className="flex flex-col gap-4">
        {passages.map((passage) => (
          <PassageCard
            key={passage.id}
            passage={passage}
            isActive={activeId === passage.id}
            title={title}
            onClick={() => toggleActive(passage.id)}
            comments={comments}
            onSubmitComment={(value) => handleSubmitComment(passage.id, value)}
            onEditComment={(commentId, newContent) => handleEditComment(commentId, newContent)}
            onDeleteComment={(commentId) => handleDeleteComment(commentId)}
          />
        ))}
      </div>
    </section>
  );
};

export default PassageList;
