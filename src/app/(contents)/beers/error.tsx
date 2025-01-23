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
    <ErrorInfo
      title={'맥주 정보를 불러오는 데 실패하였습니다 :('}
      onClick={() => reset()}
    />
  );
}
