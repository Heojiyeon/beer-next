import BeerList from '@/components/beerList';
import PageTitle from '@/components/pageTitle';

export default function Beers() {
  return (
    <main className="w-[70%]">
      <PageTitle title="SSR 방식을 활용해 데이터 패칭을 진행했어요" />
      <div className="flex justify-center p-2">
        <BeerList />
      </div>
    </main>
  );
}
