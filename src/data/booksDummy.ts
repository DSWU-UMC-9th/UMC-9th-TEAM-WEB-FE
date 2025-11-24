import type { Book } from '@/types/HomePage/home';

/**
 * TODO:
 * - 나중에 백엔드 연동 시에는 이 더미 데이터를 제거하고
 *   실제 API 응답으로 대체.
 * - coverImageUrl 경로도 실제 정적 이미지 경로에 맞게 교체.
 */
export const DUMMY_BOOKS: Book[] = [
  {
    id: 1,
    title: '절창',
    author: '이수영',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791141602451.jpg',
    keywords: ['#단편소설', '#문학', '#감정'],
  },
  {
    id: 2,
    title: '트렌드 코리아 2026',
    author: '김난도',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791193638859.jpg',
    keywords: ['#트렌드', '#미래', '#사회'],
  },
  {
    id: 3,
    title: '머니트렌드 2026',
    author: '박민서',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193937686.jpg',
    keywords: ['#경제', '#투자', '#재테크'],
  },
  {
    id: 4,
    title: '처음 만나는 양자의 세계',
    author: '장하진',
    coverImageUrl: 'https://image.yes24.com/goods/153908443/L',
    keywords: ['#양자역학', '#과학', '#입문'],
  },
  {
    id: 5,
    title: '하버드 상위 1퍼센트의 말하기',
    author: '전지윤',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788947545952.jpg',
    keywords: ['#말하기', '#커뮤니케이션', '#자기계발'],
  },
  {
    id: 6,
    title: '아주 작은 습관의 힘',
    author: '제임스 클리어',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791162540640.jpg',
    keywords: ['#습관', '#라이프스타일', '#성장'],
  },
  {
    id: 7,
    title: '죽음에 관하여',
    author: '이도윤',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788996885160.jpg',
    keywords: ['#철학', '#죽음', '#사유'],
  },
  {
    id: 8,
    title: '달까지 가자',
    author: '장류진',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434496.jpg',
    keywords: ['#소설', '#청년', '#한국문학'],
  },
  {
    id: 9,
    title: '코스모스',
    author: '칼 세이건',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788983711892.jpg',
    keywords: ['#우주', '#과학', '#교양'],
  },
  {
    id: 10,
    title: '아침 그리고 저녁',
    author: '존 포세',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788954657129.jpg',
    keywords: ['#문학', '#노벨상', '#서정'],
  },
  {
    id: 11,
    title: '꺾이지 않는 마음',
    author: '박서현',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193938003.jpg',
    keywords: ['#심리학', '#마음', '#회복'],
  },
  {
    id: 12,
    title: '데이터로 말하라',
    author: '최지훈',
    coverImageUrl: 'https://image.yes24.com/goods/17623183/XL',
    keywords: ['#데이터분석', '#비즈니스', '#통계'],
  },
  {
    id: 13,
    title: '클린 코드',
    author: '로버트 C. 마틴',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788964200377.jpg',
    keywords: ['#프로그래밍', '#코딩', '#개발자'],
  },
  {
    id: 14,
    title: '이펙티브 타입스크립트',
    author: '댄 밴더캄',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788966263134.jpg',
    keywords: ['#타입스크립트', '#웹개발', '#실무'],
  },
  {
    id: 15,
    title: '역행자',
    author: '자청',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788901272580.jpg',
    keywords: ['#자기계발', '#돈', '#라이프스타일'],
  },
  {
    id: 16,
    title: '나는 나에게 가장 좋은 사람이 되기로 했다',
    author: '이홍비',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791193808382.jpg',
    keywords: ['#에세이', '#자존감', '#위로'],
  },
  {
    id: 17,
    title: '일의 기쁨과 슬픔',
    author: '장류진',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788956605739.jpg',
    keywords: ['#단편소설', '#직장', '#현실'],
  },
  {
    id: 18,
    title: '미움받을 용기',
    author: '기시미 이치로',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791168340770.jpg',
    keywords: ['#철학', '#심리학', '#아들러'],
  },
  {
    id: 19,
    title: '작별하지 않는다',
    author: '한강',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788954682152.jpg',
    keywords: ['#소설', '#한국문학', '#기억'],
  },
  {
    id: 20,
    title: '우리가 빛의 속도로 갈 수 없다면',
    author: '김초엽',
    coverImageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791190090537.jpg',
    keywords: ['#SF', '#단편집', '#한국SF'],
  },
];
