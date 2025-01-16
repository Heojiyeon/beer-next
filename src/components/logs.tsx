import { mapNotionApi } from '@/lib/mapNotionApi';
import LogBox from './logBox';

export const revalidate = 600; // 1시간

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

/**
 * @returns 학습 로그 리스트 서버 컴포넌트
 */
export default async function Logs() {
  let logData = [];

  try {
    const data = await fetch(`${API_BASE_URL}/api/logs`, {
      next: { revalidate },
    });

    logData = data.ok ? await data.json() : [];
  } catch (error) {
    console.error('Error fetching logs:', error);
    logData = [];
  }

  if (logData.length === 0) {
    return <div>로그 데이터가 존재하지 않습니다.</div>;
  }

  return (
    <div>
      {mapNotionApi(logData).map(log => (
        <LogBox key={log.order} {...log} />
      ))}
    </div>
  );
}
