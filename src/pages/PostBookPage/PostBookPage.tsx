// src/pages/PostBookPage/PostBookPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PostBookHeader from './components/PostBookHeader';
import PostBookCoverSection from './components/PostBookCoverSection';
import PostBookMetaSection from './components/PostBookMetaSection';
import PostBookPhraseSection from './components/PostBookPhraseSection';
import PostBookReviewSection from './components/PostBookReviewSection';
import PostBookSubmitBar from './components/PostBookSubmitBar';

import { createMyLibraryBook } from '@/apis/PostBookPage/libraryApi';

const PostBookPage = () => {
  const navigate = useNavigate();

  // 1) 이미지 파일
  const [imageFile, setImageFile] = useState<File | null>(null);

  // 2) 메타 정보
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pageCount, setPageCount] = useState('');
  const [readingMinutes, setReadingMinutes] = useState('');
  const [selectedKeywordIds, setSelectedKeywordIds] = useState<number[]>([]);

  // 3) 구절
  const [sentencePage, setSentencePage] = useState(''); 
  const [sentence, setSentence] = useState(''); 
  const [reviewText, setReviewText] = useState(''); 

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    // 제목/저자 필수
    if (!title.trim() || !author.trim()) {
      alert('제목과 저자를 입력해 주세요.');
      return;
    }

    const pageCountNum = pageCount ? Number(pageCount) : undefined;
    const readingMinutesNum = readingMinutes ? Number(readingMinutes) : undefined;

    if (pageCount && Number.isNaN(pageCountNum)) {
      alert('페이지 수는 숫자로 입력해 주세요.');
      return;
    }

    if (readingMinutes && Number.isNaN(readingMinutesNum)) {
      alert('시간 기록은 숫자(분 단위)로 입력해 주세요.');
      return;
    }

    // 구절: 페이지 번호 + 내용 합쳐서 하나의 sentence로 보냄
    const mergedSentence =
      sentencePage && sentence
        ? `[${sentencePage}p] ${sentence}`
        : sentence || undefined;

    setIsSubmitting(true);
    try {
      await createMyLibraryBook({
        image: imageFile ?? undefined,
        title,
        author,
        pageCount: pageCountNum,
        readingMinutes: readingMinutesNum,
        sentence: mergedSentence,
        note: reviewText || undefined,
        keywords: selectedKeywordIds,
      });

      alert('나의 서재에 도서가 추가되었습니다.');
      navigate('/library');
    } catch (error) {
      console.error(error);
      alert('도서 저장 중 오류가 발생했어요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white-normal">
      <section className="flex w-full flex-col px-[131px] pb-[128px] pt-[152px]">
        <PostBookHeader />

        {/* 표지 이미지 업로드 섹션 */}
        <PostBookCoverSection onImageSelect={setImageFile} />

        <div className="flex flex-col gap-[70px]">
        {/* 메타 정보 섹션 (제목, 저자, 페이지 수, 시간, 키워드) */}
            <PostBookMetaSection
              title={title}
              author={author}
              pageCount={pageCount}
              readingMinutes={readingMinutes}
              selectedKeywordIds={selectedKeywordIds}
              onChangeTitle={setTitle}
              onChangeAuthor={setAuthor}
              onChangePageCount={setPageCount}
              onChangeReadingMinutes={setReadingMinutes}
              onChangeKeywords={setSelectedKeywordIds}
            />

            {/* 내가 뽑은 구절 섹션 */}
            <PostBookPhraseSection
              page={sentencePage}
              sentence={sentence}
              onChangePage={setSentencePage}
              onChangeSentence={setSentence}
            />

            {/* 장문의 독서록 섹션 */}
            <PostBookReviewSection
              review={reviewText}
              onChangeReview={setReviewText}
            />
        </div>
        {/* 하단 저장 버튼 */}
        <PostBookSubmitBar onSubmit={handleSubmit} disabled={isSubmitting} />
      </section>
    </main>
  );
};

export default PostBookPage;
