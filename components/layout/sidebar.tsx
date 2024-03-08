'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Dumbbell, Users, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Treinos',
    icon: Dumbbell,
    href: '/treinos',
  },
  {
    label: 'Jogadores',
    icon: Users,
    href: '/jogadores',
  },
  {
    label: 'Questões',
    icon: Database,
    href: '/questoes',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 py-4">
      <div className="flex flex-1 flex-col py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 flex h-8 w-full items-center">
            <h1 className="text-2xl font-bold text-primary">PETROTEAM</h1>
          </div>
        </Link>
        <div className="space-y-2">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-primary hover:text-white hover:dark:text-secondary',
                pathname.split('/')[1] === route.href.split('/')[1] &&
                  'bg-primary text-white dark:text-secondary',
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className="mr-3 h-5 w-5" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
