import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

const Header: FC = () => {
  const router = useRouter();

  return (
    <header className='flex items-center justify-center sticky top-0 w-full h-16 bg-gray-100 z-50 uppercase font-semibold text-xl shadow-md px-8'>
      <nav className='flex w-full max-w-6xl'>
        <div className='w-12'>
          <Image src='/logo.svg' alt='logo' width={64} height={64} />
        </div>
        <ul className='flex justify-center items-center w-full gap-8 mx-auto'>
          <li
            className={`hover:border-pink-400  border-b-4 transition-all ${
              router.pathname === '/' ? 'border-pink-400' : 'border-transparent'
            }`}
          >
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`hover:border-pink-400 border-b-4 transition-all ${
              router.pathname === '/paint'
                ? 'border-pink-400'
                : 'border-transparent'
            }`}
          >
            <Link href='/paint'>
              <a>Paint!</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
