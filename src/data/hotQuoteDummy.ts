import type { HotQuote } from '@/types/HomePage/home';

/**
 * TODO:
 * - 나중에 백엔드 연동 시에는 이 더미 데이터를 제거하고
 *   실제 API 응답으로 대체.
 */

export const DUMMY_HOT_QUOTES: HotQuote[] = [
  {
    id: 101,
    bookTitle: '절창',
    content:
      '그러나 당신들도 일하다보면 알고 계실 텐데요, 끔찍한 무언가가 세상에 드러나려면 지옥과 밤의 도움을 얻어야 한다는 걸요.',
  },
  {
    id: 102,
    bookTitle: '머니트렌드 2026',
    content: '돈은 목적이 아니라 선택지를 넓혀주는 수단이며, 선택지가 많을수록 삶의 안전망은 두꺼워진다.',
  },
  {
    id: 103,
    bookTitle: '우리가 빛의 속도로 갈 수 없다면',
    content:
      '우리는 종종 도착하지 못할 목적지를 향해 떠나지만, 그 길 위에서 서로를 발견하는 일만으로도 충분히 의미가 있다.',
  },
];
