import { mapNotionApi } from '@/lib/mapNotionApi';
import { log } from 'console';
import LogBox from './logBox';

// export const revalidate = 600;
// const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? '';
// const redirectUrl =
//   process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://localhost:3000';

type LogListProps = {
  res: Response;
};

export default async function LogList({ res }: LogListProps) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/logs`, {
  //   next: { revalidate },
  // });

  // const raw = JSON.stringify({
  //   grant_type: 'authorization_code',
  //   code: 'e202e8c9-0990-40af-855f-ff8f872b1ec6',
  //   redirect_uri: redirectUrl,
  // });

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.SECRET_NOTION_KEY}`,
  //   },
  //   body: raw,
  //   next: { revalidate: 600 },
  // };

  // const res = await fetch(
  //   `https://api.notion.com/v1/databases/${databaseId}/query`,
  //   options
  // );

  if (!res.ok) {
    return <div>로그 데이터 패치에 실패하였습니다.</div>;
  }

  const logs = await res.json();
  console.log('logs: ', logs);

  if (!log) {
    return <div>로그 데이터 로드에 실패하였습니다.</div>;
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
