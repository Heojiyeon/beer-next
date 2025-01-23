import LogList from '@/components/logList';
import PageTitle from '@/components/pageTitle';
import callNotionApi from '@/lib/callNotionApi';

export const revalidate = 600;

export default async function Logs() {
  try {
    const data = await callNotionApi();

    return (
      <main className="w-[80%]">
        <PageTitle title="ISR 방식을 활용해 데이터 패칭을 진행했어요" />
        <LogList res={data} />
      </main>
    );
  } catch (error) {
    console.error('Failed to fetch data in ISR:', error);

    return (
      <main className="w-[80%]">
        <PageTitle title="ISR 방식을 활용해 데이터 패칭을 진행했어요" />
        <p className="text-pageHead text-red-500 mb-6">
          데이터를 불러오지 못했습니다.
        </p>
      </main>
    );
  }
}
