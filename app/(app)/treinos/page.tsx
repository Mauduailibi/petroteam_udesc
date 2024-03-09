import { getAllTrainings } from '@/actions/trainings/actions';

import { TrainingsColumns } from '@/components/routes/treinos/trainings-columns';
import { TrainingsDataTable } from '@/components/routes/treinos/trainings-data-table';
import TrainingsHeader from '@/components/routes/treinos/trainings-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPlayer } from '@/data/player';

export default async function TreinosPage() {
  const player = await getPlayer();

  if (!player) return null;

  if (player?.isActive === false) {
    return (
      <div className="flex justify-between">
        <p>Aguarde a ativação de sua conta</p>
      </div>
    );
  }

  const trainings = await getAllTrainings();

  return (
    <div className="space-y-6">
      <TrainingsHeader />

      <Card>
        <CardHeader>
          <CardTitle>Todos os treinos</CardTitle>
          <CardDescription>
            {trainings.length} treinos encontrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TrainingsDataTable columns={TrainingsColumns} data={trainings} />
        </CardContent>
      </Card>
    </div>
  );
}
