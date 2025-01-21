import Link from 'next/link';

export default function Header() {
  return (
    <div className="p-[3rem] w-full flex justify-between">
      <div className="text-[30px]">Beer Next</div>
      <ul className="flex w-[30%] justify-around items-center">
        <li className="text-[20px]">
          <Link href={'/'}>Intro</Link>
        </li>
        <li className="text-[20px]">
          <Link href={'/beers'}>Beers</Link>
        </li>
        <li className="text-[20px]">
          <Link href={'/logs'}>Logs</Link>
        </li>
      </ul>
    </div>
  );
}
