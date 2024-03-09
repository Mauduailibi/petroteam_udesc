'use client';

import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import DeleteTrainingAlert from '@/components/routes/treinos/modals/delete-training-alert';
import { deleteTraining } from '@/actions/trainings/actions';

interface TrainingHeaderProps {
  trainingId: string;
}

export default function TrainingHeader({ trainingId }: TrainingHeaderProps) {
  const { toast } = useToast();
  const router = useRouter();

  async function deleteFunction(trainingId: string) {
    await deleteTraining(trainingId)
      .then(() => {
        router.push('/treinos');
      })
      .catch(() => {
        toast({
          title: 'Erro ao deletar treino!',
          description: 'Ocorreu um erro ao deletar o treino.',
          variant: 'destructive',
        });
      });
  }

  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-3xl font-bold">Detalhes do treino</h1>
      <DeleteTrainingAlert
        onConfirm={async () => await deleteFunction(trainingId)}
      />
    </div>
  );
}
