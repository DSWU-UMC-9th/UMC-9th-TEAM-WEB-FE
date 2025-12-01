// src/pages/LibraryDetailPage/components/LibraryDetailHeader.tsx
import { useNavigate } from 'react-router-dom';
import EditIcon from '@pages/LibraryDetailPage/components/icons/EditIcon';

interface Props {
  title?: string;
  onEdit?: () => void;
}

const LibraryDetailHeader = ({ title = '나의 서재', onEdit }: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleEditClick = () => {
    if (onEdit) {
      onEdit();
    }
  };

  return (
    <header className="flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between">
        {/* 뒤로가기 버튼 */}
        <button
          type="button"
          onClick={handleBack}
          className="text-[48px] text-brown-dark"
        >
          &lt;
        </button>

        {/* 가운데 제목 */}
        <div className="flex-1 text-center">
          <h2 className="text-[48px] font-semibold text-brown-dark">
            {title}
          </h2>
        </div>

        {/* 오른쪽 수정 아이콘 버튼 */}
        <button
          type="button"
          onClick={handleEditClick}
          className="flex h-12 w-12 items-center justify-center"
        >
          <EditIcon className="h-12 w-12" />
        </button>
      </div>

      {/* 아래 밑줄 */}
      <div className="mt-1 h-[3px] w-[204px] bg-brown-dark" />
    </header>
  );
};

export default LibraryDetailHeader;
