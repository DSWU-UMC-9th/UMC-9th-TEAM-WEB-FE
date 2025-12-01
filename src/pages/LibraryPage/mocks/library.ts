// src/pages/LibraryPage/mocks/library.ts

import type { LibraryBook } from '@/types/LibraryPage/library';

import cover1 from './img/1.png';
import cover2 from './img/2.png';
import cover3 from './img/3.png';
import cover4 from './img/4.png';
import cover5 from './img/5.png';
import cover6 from './img/6.png';
import cover7 from './img/7.png';
/**
 * TODO: 백엔드 연동 후 삭제 예정
 * - 현재는 "나의 서재 도서 목록" API 응답을 대신하는 더미 데이터
 */
export const MOCK_LIBRARY_BOOKS: LibraryBook[] = [
    {
        id: 1,
        title: '어른의 품위',
        author: '최서영',
        imgUrl: cover1, 
      },
      {
        id: 2,
        title: '절창',
        author: '구병모',
        imgUrl: cover2,
      },
      {
        id: 3,
        title: '다크 심리학',
        author: '다크 사이드 프로젝트',
        imgUrl: cover3, 
      },
      {
        id: 4,
        title: '자몽살구클럽',
        author: '한로로',
        imgUrl: cover4,
      },
      {
        id: 5,
        title: '위버멘쉬',
        author: '프리드리히 니체',
        imgUrl: cover5, 
      },
      {
        id: 6,
        title: '싯다르타',
        author: '헤르만 헤세',
        imgUrl: cover6,
      },
      {
        id: 7,
        title: '어른의 행복은 조용하다',
        author: '태수',
        imgUrl: cover7,
      }
];
