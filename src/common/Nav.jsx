'use client';

import { usePathname } from 'next/navigation';

export default function Nav() {
  const route = usePathname().substring(1);

  return (
    <nav className="bg-white shadow relative z-20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{route}</h1>
      </div>
    </nav>
  );
}
