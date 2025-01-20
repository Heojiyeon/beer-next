import { mapNotionApi } from '@/lib/mapNotionApi';
import { log } from 'console';
import LogBox from './logBox';

export const revalidate = 600;

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export default async function Logs() {
  const res = await fetch(`${API_BASE_URL}/api/logs`, {
    next: { revalidate },
  });

  console.log('fetch url: ', `${API_BASE_URL}/api/logs`);
  console.log('res: ', res);

  const logs = await res.json();
  console.log('logs: ', logs);

  if (!log) {
    return <div>로그 데이터 패치에 실패하였습니다.</div>;
  }

  return (
    <div>
      {mapNotionApi(logs).length > 0 ? (
        mapNotionApi(logs).map(log => <LogBox key={log.id} {...log} />) // 실제 데이터를 사용
      ) : (
        <div>로그 데이터가 존재하지 않습니다.</div>
      )}
    </div>
  );
}
