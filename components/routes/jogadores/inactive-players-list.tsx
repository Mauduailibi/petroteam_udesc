'use client';

import { setPlayerActive } from '@/actions/players/actions';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import type { Player } from '@prisma/client';
import { useRouter } from 'next/navigation';
import ActivatePlayerAlert from './modals/activate-player-alert';

interface InactivePlayerListProps {
  players: Player[];
}

export default function InactivePlayersList({
  players,
}: InactivePlayerListProps) {
  const { toast } = useToast();
  const router = useRouter();

  async function activatePlayer(id: string) {
    try {
      await setPlayerActive(id).then(() => {
        toast({
          title: 'Jogador ativado',
          description: 'O jogador foi ativado com sucesso',
        });

        router.refresh();
      });
    } catch (error) {
      toast({
        title: 'Erro ao ativar jogador',
        description: 'Ocorreu um erro ao ativar o jogador',
        variant: 'destructive',
      });
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Jogadores inativos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.length === 0 && <p>Não há jogadores inativos</p>}
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
              <ActivatePlayerAlert
                onConfirm={async () => await activatePlayer(player.id)}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
