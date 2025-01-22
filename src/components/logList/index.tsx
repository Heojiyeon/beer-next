import { mapNotionApi } from '@/lib/mapNotionApi';
import { log } from 'console';
import LogBox from '../logBox';

type LogListProps = {
  res: Response;
};

export default async function LogList({ res }: LogListProps) {
  if (!res.ok) {
    return <div>로그 데이터 패치에 실패하였습니다.</div>;
  }

  const logs = mapNotionApi(await res.json());
  console.log('logs: ', logs);

  if (!log) {
    return <div>로그 데이터 로드에 실패하였습니다.</div>;
  }

  return (
    <div>
      {logs.length > 0 ? (
        logs.map(log => <LogBox key={log.id} {...log} />) // 실제 데이터를 사용
      ) : (
        <div key={'empty'}>로그 데이터가 존재하지 않습니다.</div>
      )}
    </div>
  );
}
