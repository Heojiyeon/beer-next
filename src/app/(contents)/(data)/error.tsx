'use client';

import ErrorInfo from '@/components/errorInfo';
import { useEffect } from 'react';

/**
 * @returns 에러 바운더리 (beer page)
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 min-h-[80vh] flex justify-center items-center">
      <ErrorInfo
        title={'맥주 정보를 불러오는데 실패하였습니다 :('}
        onClick={() => reset()}
      />
    </div>
  );
}
