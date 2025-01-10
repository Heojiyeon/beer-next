import BeerList from '@/components/beerList';
import Logs from '@/components/logs';

export default function Home() {
  return (
    <div>
      <main>
        <Logs />
        <BeerList />
      </main>
      <footer></footer>
    </div>
  );
}
