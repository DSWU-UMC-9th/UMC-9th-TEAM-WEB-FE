import { useNavigate, useParams } from 'react-router-dom';
import BookSummary from './components/BookSummary';
import PassageList from './components/PassageList';

import jeoljeongImg from '../../assets/jeolchang.svg';

export type Passage = {
  id: number;
  text: string;
  reference: string;
};

export type BookDetail = {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
  tags: string[];
  passages: Passage[];
};

const mockDetail: BookDetail = {
  id: 3,
  title: '절창',
  author: '구병모',
  coverImageUrl: jeoljeongImg,
  tags: ['소설', '구병모', '작가상', '신작'],
  passages: [
    {
      id: 1,
      text: '깊은 물밑에 자리한 상대의 생각을 읽는 일은, 그 마음의 복잡성과 가변성으로 인해 대체로 안달을 내게 된다는 사실을 알아야 합니다.',
      reference: '《절창》 p.15',
    },
    {
      id: 2,
      text: '“이런 당연한 얘기를 해야 하나요?” “당연한 게 뭔데요.” 당신이 서 있는 세상에서, 일반의 상식에서, 사회적 합의라는 선에서.',
      reference: '《절창》 p.53–54',
    },
    {
      id: 3,
      text: '구체적이고 선명한 단어나 문장이 한줄 한줄 중에 응결된 것 같기도 했고, 서로 맥락이 닿지 않는 이미지들이 평행하면서 이 세상에 더 손쉽게 존재하지 않는 종교의 문을 여는 듯도 했으며...',
      reference: '《절창》 p.90',
    },
    {
      id: 4,
      text: '그러니 당신들도 일한다면 알고 계실 텐데요, 끔찍한 무언가가 세상에 드러나려면 지옥과 밤의 도움을 얻어야 한다는 걸요.',
      reference: '《절창》 p.323',
    },
  ],
};

const DiscussionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const data = mockDetail;

  return (
    <main className="mx-auto max-w-5xl px-10 py-12">
      <section className="mb-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-3xl font-semibold text-brown-dark hover:text-brown-dark-hover">
          {'<'}
        </button>

        <div className="flex flex-1 flex-col items-center">
          <h1 className="text-3xl font-semibold text-brown-dark">토론 광장</h1>
          <div className="mt-2 h-0.5 w-16 bg-brown-dark" />
        </div>
      </section>

      <section className="flex gap-10">
        <BookSummary detail={data} />
        <PassageList passages={data.passages} />
      </section>
    </main>
  );
};

export default DiscussionDetailPage;

//ㅎㅎ
