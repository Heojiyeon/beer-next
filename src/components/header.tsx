import Link from 'next/link';

export default function Header() {
  return (
    <div className="p-[3rem] w-full flex justify-between">
      <div className="text-[30px] flex-wrap">Beer Next</div>
      <div className="w-[30%] content-center hidden md:block">
        <ul className="flex w-[30%] md:w-full h-full justify-around items-center">
          <li className="text-[20px] flex-1 flex justify-center items-center h-full">
            <Link href={'/'}>Intro</Link>
          </li>
          <li className="text-[20px] flex-1 flex justify-center items-center h-full">
            <Link href={'/beers'}>Beers</Link>
          </li>
          <li className="text-[20px] flex-1 flex justify-center items-center h-full">
            <Link href={'/logs'}>Logs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
