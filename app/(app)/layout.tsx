import Sidebar from '@/components/layout/sidebar';
import Navbar from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/toaster';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen">
      <div className="flex h-full">
        <div className="z-[50] hidden h-full border-r-2 px-8 py-5 dark:border-secondary dark:bg-background lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>
        <div className="w-full lg:pl-72">
          <Navbar />
          <div className="p-4 lg:p-8">{children}</div>
          <Toaster />
        </div>
      </div>
    </main>
  );
}
