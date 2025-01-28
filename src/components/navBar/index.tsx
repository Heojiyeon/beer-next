'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Intro', href: '/' },
  { name: 'Beers', href: '/beers' },
  { name: 'Logs', href: '/logs' },
];

type NavBarProps = {
  ulStyle: string;
  liStyle: string;
};

export default function NavBar({ ulStyle, liStyle }: NavBarProps) {
  const pathname = usePathname();

  return (
    <ul className={ulStyle}>
      {navLinks.map(link => {
        const isActive = pathname === link.href;

        return (
          <li key={link.name} className={liStyle}>
            <Link
              href={link.href}
              className={isActive ? 'font-bold' : 'font-light'}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
