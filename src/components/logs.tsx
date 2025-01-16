import { mapNotionApi } from '@/lib/mapNotionApi';
import LogBox from './logBox';

export const revalidate = 600; // 1시간

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

/**
 * @returns 학습 로그 리스트 서버 컴포넌트
 */
export default async function Logs() {
  const data = await fetch(`${API_BASE_URL}/api/logs`, {
    next: { revalidate },
  });

  if (!data.ok) {
    throw new Error('Failed to fetch logs');
  }

  const logData = await data.json();

  return (
    <div>
      {mapNotionApi(logData).map(log => (
        <LogBox key={log.order} {...log} />
      ))}
    </div>
  );
}
