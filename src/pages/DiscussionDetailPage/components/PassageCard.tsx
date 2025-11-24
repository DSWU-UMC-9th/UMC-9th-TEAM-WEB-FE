import type { Passage } from '../DiscussionDetailPage';

type PassageCardProps = {
  passage: Passage;
};

const PassageCard = ({ passage }: PassageCardProps) => {
  return (
    <article className="rounded-3xl bg-brown-dark px-6 py-4 text-sm leading-relaxed text-brown-light">
      <p>{passage.text}</p>
      <p className="mt-3 text-right text-xs text-brown-light/80">- {passage.reference}</p>
    </article>
  );
};

export default PassageCard;
