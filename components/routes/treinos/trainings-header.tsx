'use client';

import { createTraining } from '@/actions/trainings/actions';
import CreateTrainingAlert from '@/components/routes/treinos/modals/create-training-alert';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function TrainingsHeader() {
  const { toast } = useToast();
  const router = useRouter();

  async function newTraining() {
    await createTraining()
      .then((response) => {
        router.push(`/treinos/${response.id}`);
      })
      .catch(() => {
        toast({
          title: 'Erro ao criar treino!',
          description: 'Ocorreu um erro ao criar um novo treino.',
          variant: 'destructive',
        });
      });
  }

  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-3xl font-bold">Treinos</h1>
      <CreateTrainingAlert onConfirm={async () => await newTraining()} />
    </div>
  );
}
