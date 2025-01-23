'use client';

import ErrorInfo from '@/components/errorInfo';
import { useEffect } from 'react';

export default function GlobalError({
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
    <html>
      <body className="w-screen h-screen flex items-center justify-center">
        <ErrorInfo
          title={'예상치 못한 에러가 발생했습니다 :('}
          onClick={() => reset()}
        />
      </body>
    </html>
  );
}
