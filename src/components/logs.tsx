import { mapNotionApi } from '@/lib/mapNotionApi';
import LogBox from './logBox';
import { log } from 'console';

const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://staging-beer-next.vercel.app'
    : 'http://127.0.0.1:8080';

export default async function Logs() {
  const res = await fetch(`${API_BASE_URL}/api/logs`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    return <div>Failed to load logs</div>;
  }
  const logs = await res.json();

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
