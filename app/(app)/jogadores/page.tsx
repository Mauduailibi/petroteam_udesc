import { getAllPlayers } from '@/actions/players/actions';
import ActivePlayersList from '@/components/routes/jogadores/active-players-list';
import InactivePlayersList from '@/components/routes/jogadores/inactive-players-list';
import { getPlayer } from '@/data/player';
import type { Player } from '@prisma/client';

export default async function JogadoresPage() {
  const player = await getPlayer();

  if (!player) return null;

  if (player?.isActive === false) {
    return (
      <div className="flex justify-between">
        <p>Aguarde a ativação de sua conta</p>
      </div>
    );
  }

  const players = await getAllPlayers();

  const activePlayers = players.filter((player: Player) => player.isActive);
  const inactivePlayers = players.filter((player: Player) => !player.isActive);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Jogadores</h1>

      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <ActivePlayersList players={activePlayers} />
        <InactivePlayersList players={inactivePlayers} />
      </div>
    </div>
  );
}
