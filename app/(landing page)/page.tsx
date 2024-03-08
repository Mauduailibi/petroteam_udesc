import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Petroteam UDESC</h1>
      <Button asChild>
        <Link href="/dashboard" className="mt-4">
          Acessar o painel
        </Link>
      </Button>
    </div>
  );
}
