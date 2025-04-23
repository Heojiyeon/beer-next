import { getBeerData } from '@/data/beer';
import { Beer } from '@/types/beer';
import Card from '../card';

/**
 * @returns SSR + sample API 활용한 beerList 컴포넌트
 */
export default async function BeerList() {
  const beerData: Beer[] = await getBeerData();
  const urls = beerData.map((data) => data.image);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
      {beerData.map(data => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
}
