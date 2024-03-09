import { getTrainingById } from '@/actions/trainings/actions';
import TrainingHeader from '@/components/routes/treinos/treino/training-header';
import { getPlayer } from '@/data/player';

export default async function TreinoPage({
  params,
}: {
  params: {
    treinoId: string;
  };
}) {
  const player = await getPlayer();

  if (!player) return null;

  if (player?.isActive === false) {
    return (
      <div className="flex justify-between">
        <p>Aguarde a ativação de sua conta</p>
      </div>
    );
  }

  const training = await getTrainingById(params.treinoId);

  return (
    <div className="space-y-6">
      <TrainingHeader trainingId={training.id} />

      {/* TODO: Sorteador de questões */}

      {/* TODO: Gereneciar participantes */}

      {/* TODO: Buzz */}
    </div>
  );
}
