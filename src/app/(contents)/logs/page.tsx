import LogList from '@/components/logList';

export const revalidate = 600;

export default async function Logs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/logs`, {
    next: { revalidate },
  });

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

  console.log('res in logs page: ', res);

  return (
    <main className="w-[70%]">
      <p className="text-pageHead text-card-description mb-6">
        ISR 방식을 활용해 데이터 패칭을 진행했어요
      </p>
      <LogList res={res} />
    </main>
  );
}
