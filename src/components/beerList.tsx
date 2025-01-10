import { getBeerData } from '@/apis/beer';
import { Beer } from '@/types/beer';

/**
 * @returns SSR + sample API 활용한 beerList 컴포넌트
 */
export default async function BeerList() {
  const beerData: Beer[] = await getBeerData();

  return (
    <ol>
      {beerData.map(data => {
        return <li key={data.id}>{data.name}</li>;
      })}
    </ol>
  );
}
