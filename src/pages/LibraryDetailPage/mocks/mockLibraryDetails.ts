// src/pages/LibraryDetailPage/mocks/mockLibraryDetails.ts
import type { LibraryBookDetail } from '@/types/LibraryDetailPage/libraryDetail';

import cover1 from '../../LibraryPage/mocks/img/1.png';
import cover2 from '../../LibraryPage/mocks/img/2.png';
import cover3 from '../../LibraryPage/mocks/img/3.png';
import cover4 from '../../LibraryPage/mocks/img/4.png';
import cover5 from '../../LibraryPage/mocks/img/5.png';
import cover6 from '../../LibraryPage/mocks/img/6.png';
import cover7 from '../../LibraryPage/mocks/img/7.png';


export const MOCK_LIBRARY_DETAILS: LibraryBookDetail[] = [
  {
    id: 1,
    book: {
        id: 101,
        title: '어른의 품위',
        author: '최서영',
        imgUrl: cover1, 
    },
    pageCount: 970,
    readingMinutes: 360,
    sentence: '새는 알에서 나오려고 투쟁한다.',
    note: '정체성에 대한 고민을 깊게 다룬 작품이라고 느꼈다.',
    keywords: [
      { id: 1, name: '소설' },
      { id: 4, name: '추리' },
    ],
  },
  {
    id: 2,
    book: {
        id: 102,
        title: '절창',
        author: '구병모',
        imgUrl: cover2,
    },
    pageCount: 350,
    readingMinutes: 400,
    sentence: '모든 인생에는 가능성과 선택이 존재한다.',
    note: '인생 재설계에 대한 힐링을 준 책이었다.',
    keywords: [
      { id: 9, name: '자기개발' },
      { id: 16, name: '회복탄력성' },
    ],
  },
  {
    id: 3,
    book: {
        id: 103,
        title: '다크 심리학',
        author: '다크 사이드 프로젝트',
        imgUrl: cover3,
    },
    pageCount: 512,
    readingMinutes: 700,
    sentence: '기억은 신기루다.',
    note: '인류 문명에 대한 통찰이 대단히 흥미로웠다.',
    keywords: [
      { id: 29, name: '인문학' },
      { id: 24, name: '교양' },
    ],
  },
  {
    id: 4,
    book: {
        id: 104,
        title: '자몽살구클럽',
        author: '한로로',
        imgUrl: cover4,
    },
    pageCount: 284,
    readingMinutes: 320,
    sentence: '꿈은 우리의 또 다른 현실이다.',
    note: '힐링과 판타지가 잘 조화된 책.',
    keywords: [
      { id: 5, name: '판타지' },
    ],
  },
  {
    id: 5,
    book: {
        id: 105,
        title: '위버멘쉬',
        author: '프리드리히 니체',
        imgUrl: cover5, 
    },
    pageCount: 296,
    readingMinutes: 290,
    sentence: '사람은 누구나 상처를 품고 산다.',
    note: '읽는 내내 사람냄새가 나는 따뜻한 소설.',
    keywords: [
      { id: 1, name: '소설' },
    ],
  },
  {
    id: 6,
    book: {
        id: 106,
        title: '싯다르타',
        author: '헤르만 헤세',
        imgUrl: cover6,
    },
    pageCount: 256,
    readingMinutes: 240,
    sentence: '감정은 배워야 한다.',
    note: '감정 불능 소년과의 여정을 통해 많은 걸 느꼈다.',
    keywords: [
      { id: 29, name: '인문학' },
      { id: 30, name: '심리' },
    ],
  },
  {
    id: 7,
    book: {
        id: 107,
        title: '어른의 행복은 조용하다',
        author: '태수',
        imgUrl: cover7,
    },
    pageCount: 320,
    readingMinutes: 310,
    sentence: '진짜 시간은 마음이 느끼는 방식이다.',
    note: '어른에게 더 필요한 동화라고 느꼈다.',
    keywords: [
      { id: 8, name: '문학' },
      { id: 19, name: '미니멀리즘' },
    ],
  },
];
