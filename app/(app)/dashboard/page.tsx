import { getPlayer } from '@/data/player';

export default async function DashboardPage() {
  const player = await getPlayer();

  if (!player) return null;

  if (player?.isActive === false) {
    return (
      <div className="flex justify-between">
        <p>Aguarde a ativação de sua conta</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
