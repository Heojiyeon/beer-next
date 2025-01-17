import { getLogData } from '@/data/log';
import { mapNotionApi } from '@/lib/mapNotionApi';
import LogBox from './logBox';

export default async function Logs() {
  const logs = await getLogData();

  return (
    <div>
      {logs ? (
        mapNotionApi(logs).map(log => <LogBox key={log.order} {...log} />)
      ) : (
        <div>로그 데이터가 존재하지 않습니다.</div>
      )}
    </div>
  );
}
