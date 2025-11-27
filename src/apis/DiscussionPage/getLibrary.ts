import { axiosInstance } from '@/apis/axios';
import type { LibraryBookItem, LibraryResponse } from '@/types/DiscussionPage/discussion';

export const getLibrary = async (): Promise<LibraryBookItem[]> => {
  const res = await axiosInstance.get<LibraryResponse>('/api/v1/home/library');

  if (res.data.resultType !== 'SUCCESS' || !res.data.success) {
    return [];
  }

  return res.data.success.data;
};
