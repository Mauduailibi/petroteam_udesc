'use client';

import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '@/components/layout/mobile-sidebar';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center border-b-2 px-4 py-4 dark:border-secondary lg:px-8 lg:py-6">
      <MobileSidebar />
      <div className="flex w-full justify-end gap-4">
        {theme === 'dark' ? (
          <UserButton
            afterSignOutUrl="/"
            showName={true}
            appearance={{
              baseTheme: dark,
              userProfile: {
                baseTheme: dark,
              },
            }}
          />
        ) : (
          <UserButton afterSignOutUrl="/" showName={true} />
        )}
      </div>
    </div>
  );
}
