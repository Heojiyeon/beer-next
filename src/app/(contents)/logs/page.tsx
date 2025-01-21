import LogList from '@/components/logList';

export const revalidate = 600;

export default async function Logs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/logs`, {
    next: { revalidate },
  });

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
