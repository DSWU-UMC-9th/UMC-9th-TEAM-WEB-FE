// import HotSection from './components/HotSection'; //Hot 구절
// import KeywordChips from './components/KeywordChips'; //인기 키워드
import BookList from './components/BookList';

import stonerImg from '../../assets/stoner.svg';
import nobodyImg from '../../assets/nobody.svg';
import jeoljeongImg from '../../assets/jeolchang.svg';
import boyImg from '../../assets/boy.svg';

const mockBooks = [
  {
    id: 1,
    title: '스토너',
    author: '존 윌리엄스',
    coverImageUrl: stonerImg,
  },
  {
    id: 2,
    title: '아무도 오지 않는 곳에서',
    author: '한정현',
    coverImageUrl: nobodyImg,
  },
  {
    id: 3,
    title: '절정',
    author: '구병모',
    coverImageUrl: jeoljeongImg,
  },
  {
    id: 4,
    title: '소년이 온다',
    author: '한강',
    coverImageUrl: boyImg,
  },
];

const DiscussionPage = () => {
  return (
    <main className="mx-auto max-w-5xl px-10 py-12">
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-semibold text-brown-dark">토론 광장</h1>
        <div className="mt-3 h-[2px] w-16 bg-brown-dark mx-auto" />
      </section>
      {/* <HotSection />
      <KeywordChips /> */}
      <BookList books={mockBooks} />
    </main>
  );
};

export default DiscussionPage;
