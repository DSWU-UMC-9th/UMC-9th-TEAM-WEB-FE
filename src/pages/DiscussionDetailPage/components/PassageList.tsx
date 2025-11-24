import { useState } from 'react';
import PassageCard from '@/pages/DiscussionDetailPage/components/PassageCard';
import type { PassageListProps } from '@/types/DiscussionDetailPage/bookDetail';

const PassageList = ({ passages, initialActiveId, title }: PassageListProps) => {
  const [activeId, setActiveId] = useState<number | null>(initialActiveId ?? null);

  return (
    <section className="relative flex-1">
      <div className="flex flex-col gap-4">
        {passages.map((passage) => (
          <PassageCard
            key={passage.id}
            passage={passage}
            isActive={passage.id === activeId}
            title={title}
            onClick={() => setActiveId((prev) => (prev === passage.id ? null : passage.id))}
          />
        ))}
      </div>
    </section>
  );
};

export default PassageList;
