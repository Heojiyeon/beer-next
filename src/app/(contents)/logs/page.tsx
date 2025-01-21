import LogList from '@/components/logList';
import callNotionApi from '@/lib/callNotionApi';

export const revalidate = 600;

export default async function Logs() {
  try {
    const data = await callNotionApi();

    return (
      <main className="w-[70%]">
        <p className="text-pageHead text-card-description mb-6">
          ISR 방식을 활용해 데이터 패칭을 진행했어요
        </p>
        <LogList res={data} />
      </main>
    );
  } catch (error) {
    console.error('Failed to fetch data in ISR:', error);

    return (
      <main className="w-[70%]">
        <p className="text-pageHead text-card-description mb-6">
          ISR 방식을 활용해 데이터 패칭을 진행했어요
        </p>
        <p className="text-pageHead text-red-500 mb-6">
          데이터를 불러오지 못했습니다.
        </p>
      </main>
    );
  }
}
