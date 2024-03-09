'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Player } from '@prisma/client';
import { ArrowUpRightFromSquare } from 'lucide-react';

interface ActivePlayerListProps {
  players: Player[];
}

export default function ActivePlayersList({ players }: ActivePlayerListProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Jogadores ativos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.length === 0 && <p>Não há jogadores ativos</p>}
          {players.map((player) => (
            <div
              key={player.id}
              className="flex w-full items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={player.avatarUrl} alt={player.name} />
                </Avatar>
                <p className="font-medium">{player.name}</p>
              </div>
              <Button variant="outline">
                <ArrowUpRightFromSquare className="mr-2 h-4 w-4" /> Detalhes
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
