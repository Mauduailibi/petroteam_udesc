'use client';

import type { ColumnDef } from '@tanstack/react-table';
import type { Question } from '@prisma/client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRightFromSquare } from 'lucide-react';

export const QuestionsColumns: Array<ColumnDef<Question>> = [
  {
    accessorKey: 'question',
    header: 'Questão',
  },
  {
    accessorKey: 'answer',
    header: 'Resposta',
  },
  {
    accessorKey: 'category.name',
    header: 'Categoria',
    cell: ({ row }) => {
      const category: string = row.getValue('category_name');

      return <span className="capitalize">{category}</span>;
    },
  },
  {
    accessorKey: 'id',
    header: '',
    cell: ({ row }) => {
      const id: string = row.getValue('id');

      return (
        <div className="flex items-center justify-end space-x-2">
          <Link href={`/questoes/${id}`}>
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
