import type { Passage } from '../DiscussionDetailPage';
import PassageCard from './PassageCard';

type PassageListProps = {
  passages: Passage[];
};

const PassageList = ({ passages }: PassageListProps) => {
  return (
    <section className="relative flex-1">
      <div className="flex flex-col gap-4">
        {passages.map((passage) => (
          <PassageCard key={passage.id} passage={passage} />
        ))}
      </div>

      <button
        type="button"
        className="absolute -bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-brown-dark text-lg text-brown-light shadow-md hover:bg-brown-dark-hover">
        &gt;
      </button>
    </section>
  );
};

export default PassageList;
