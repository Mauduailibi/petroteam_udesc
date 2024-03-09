'use client';

import type { ColumnDef } from '@tanstack/react-table';
import type { Training } from '@prisma/client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRightFromSquare } from 'lucide-react';

export const TrainingsColumns: Array<ColumnDef<Training>> = [
  {
    accessorKey: 'createdAt',
    header: 'Data',
    cell: ({ row }) => {
      const createdAt: Date = row.getValue('createdAt');
      const formattedDate = createdAt.toLocaleDateString();

      return (
        <div className="flex items-center justify-start space-x-2">
          <p>{formattedDate}</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'id',
    header: '',
    cell: ({ row }) => {
      const id: string = row.getValue('id');

      return (
        <div className="flex items-center justify-end space-x-2">
          <Link href={`/treinos/${id}`}>
            <Button variant="outline">
              <ArrowUpRightFromSquare className="mr-2 h-4 w-4" />
              Detalhes
            </Button>
          </Link>
        </div>
      );
    },
  },
];
